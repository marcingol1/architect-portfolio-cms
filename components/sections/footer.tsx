import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <>
      <p className="font-light text-gray-600 w-full max-w-lg text-center mt-6">
        <Link
          href="/"
          className="font-medium underline underline-offset-4 hover:text-black transition-colors"
        >
          Projekty architektoniczne
        </Link>{' '}
        tworzone w programie{' '}
        <Link
          href="/"
          className="font-medium underline underline-offset-4 hover:text-black transition-colors"
        >
          ArchiCAD
        </Link>{' '}
        jako narzędziu do projektowania. <br /> Anna Gol członek{' '}
        <Link
          href="https://lubelska.iarp.pl/"
          className="font-medium underline underline-offset-4 hover:text-black transition-colors"
        >
          Izby Architektów Rzeczpospolitej Polskiej
        </Link>
        .
      </p>

      <div className="flex justify-center space-x-5 pt-10 mt-10 border-t border-gray-300 w-full max-w-xl text-gray-600">
        <Link
          href="mailto:golannaprojektowanie@gmail.com"
          className="font-medium underline underline-offset-4 hover:text-black transition-colors"
        >
          Email
        </Link>
        <Link
          href="/"
          className="font-medium underline underline-offset-4 hover:text-black transition-colors"
        >
          Facebook / Messenger
        </Link>
      </div>

      <div className="sm:absolute sm:bottom-0 w-full px-20 py-10 flex justify-between">
        <Link href="/">
          <Image
            src="/ag.svg"
            alt="Anna Gol Logo"
            width={100}
            height={24}
            priority
          />
        </Link>
        <Link
          href="https://github.com/marcingol1/architect-portfolio-cms"
          className="flex items-center space-x-2"
        >
          <Image
            src="/github.svg"
            alt="GitHub Logo"
            width={24}
            height={24}
            priority
          />
          <p className="font-light">Źródło</p>
        </Link>
      </div>
    </>
  );
}
