/**
 * ImageCard 元件
 * 設計理念：展示景點或日本風景照片
 */

interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  description?: string;
}

export default function ImageCard({ src, alt, title, description }: ImageCardProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white border border-[#d4cec1]">
      <div className="relative h-64 overflow-hidden bg-[#e8e3d6]">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#1a3a52] font-serif mb-2">{title}</h3>
        {description && (
          <p className="text-sm text-[#999999]">{description}</p>
        )}
      </div>
    </div>
  );
}
