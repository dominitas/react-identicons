import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import sha1 from 'crypto-js/sha1';
import { Identicon as IdenticonLib, type IdenticonOptions } from '../lib/identicon';

export interface IdenticonProps extends IdenticonOptions {
  value?: string,
  hash?: string,
  options?: IdenticonOptions,
  alt?: string,
}

const Identicon: React.FC<IdenticonProps> = ({ value, hash, options = {}, alt }) => {
  const [hexString, setHexString] = useState<string>();

  useEffect(() => {
    if (hash) {
      setHexString(hash);
    } else if (value) {
      valueToHash();
    }
  }, [value, hash]);

  const valueToHash = () => {
    const hexHash = sha1(value as string).toString();
    setHexString(hexHash);
  };

  const base64ToDataUrl = (mime: string, base64: string) => {
    return `data:image/${mime};base64,${base64}`;
  };

  if (!hexString) {
    return null;
  }

  const identicon = new IdenticonLib(hexString, { format: 'png', ...options });

  if (identicon.options.format === 'svg') {
    return <>{ parse(identicon.toString(true)) }</>;
  }

  const src = base64ToDataUrl(identicon.options.format, identicon.toString());

  return (
    <img
      src={src}
      width={identicon.options.size}
      height={identicon.options.size}
      alt={alt}
    />
  );
};

export default Identicon;
