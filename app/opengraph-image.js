import { ImageResponse } from 'next/og';
export const alt = 'Nuvora Finds — smart finds for better organized spaces';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function Image() {
  return new ImageResponse(<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', height: '100%', background: '#f7f5ef', padding: 70, color: '#202723' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 20, fontSize: 32 }}><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 50, width: 68, height: 68, background: '#536b5c', color: 'white' }}>N</div>Nuvora Finds</div>
    <div style={{ display: 'flex', fontSize: 78, fontWeight: 700, maxWidth: 1000, lineHeight: 1.05 }}>Smart finds for better organized spaces.</div>
    <div style={{ display: 'flex', fontSize: 24, color: '#536b5c' }}>HOME  /  KITCHEN  /  ORGANIZATION  /  SMALL SPACES</div>
  </div>, size);
}
