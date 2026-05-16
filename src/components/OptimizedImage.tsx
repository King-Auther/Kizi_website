import React from 'react';

type OptimizedImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  /** Load immediately (hero / above-the-fold). */
  priority?: boolean;
};

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  priority = false,
  className = '',
  alt = '',
  ...props
}) => {
  return (
    <img
      {...props}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      className={className}
    />
  );
};

export default OptimizedImage;
