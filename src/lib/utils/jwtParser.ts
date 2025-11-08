// src/lib/utils/jwtParser.ts
export interface JwtPayload {
  iat?: number;
  exp?: number;
  [key: string]: any;
}

export interface ParseResult {
  payload: JwtPayload | null;
  error: string | null;
  raw: {
    header: string;
    payload: string;
    signature: string;
  } | null;
}

export function parseJwt(token: string): ParseResult {
  const trimmed = token.trim();
  const parts = trimmed.split('.');

  if (parts.length !== 3 || parts.some(p => p === '')) {
    return { payload: null, error: 'Invalid JWT format. Must have 3 parts: header.payload.signature', raw: null };
  }

  try {
    const [headerB64, payloadB64, signature] = parts;

    const decodeBase64Url = (str: string): string => {
      const base64 = str.replace(/-/g, '+').replace(/_/g, '/');
      const padded = base64.padEnd(base64.length + (4 - base64.length % 4) % 4, '=');
      return atob(padded);
    };

    const payloadJson = decodeBase64Url(payloadB64);
    const payload: JwtPayload = JSON.parse(payloadJson);

    return {
      payload,
      error: null,
      raw: { header: headerB64, payload: payloadB64, signature }
    };
  } catch (err) {
    return { payload: null, error: 'Invalid Base64 or JSON in payload', raw: null };
  }
}

export function getValidityStatus(payload: JwtPayload | null, now: number): {
  status: 'valid' | 'expired' | 'not-yet-valid' | 'missing-claims';
  message: string;
} {
  if (!payload) return { status: 'missing-claims', message: 'No payload' };

  const iat = payload.iat;
  const exp = payload.exp;

  if (typeof iat !== 'number' || typeof exp !== 'number') {
    return { status: 'missing-claims', message: 'Missing iat or exp claim' };
  }

  // CORRECT: iat/exp are in SECONDS, now is in MS → divide by 1000
  const nowSeconds = Math.floor(now / 1000);

  if (nowSeconds < iat) {
    return { status: 'not-yet-valid', message: 'Token not yet valid' };
  }
  if (nowSeconds >= exp) {
    return { status: 'expired', message: 'Token expired' };
  }
  return { status: 'valid', message: 'Token is valid' };
}

export function formatTimestamp(unixSeconds: number | undefined, timezone: 'utc' | 'local'): string {
  if (typeof unixSeconds !== 'number') return '—';
  const date = new Date(unixSeconds * 1000);  // Convert seconds → ms
  const formatter = new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: timezone === 'utc' ? 'UTC' : undefined
  });
  const parts = formatter.formatToParts(date);
  const obj: any = {};
  parts.forEach(p => obj[p.type] = p.value);
  const formatted = `${obj.year}-${obj.month}-${obj.day} ${obj.hour}:${obj.minute}:${obj.second}`;
  return timezone === 'utc' ? `${formatted} Z` : formatted;
}

export function reEncodeJwt(header: string, payload: JwtPayload, signature: string): string {
  const encode = (obj: any) => btoa(JSON.stringify(obj)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  return `${header}.${encode(payload)}.${signature}`;
}