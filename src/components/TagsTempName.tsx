import Link from 'next/link';

type TagProps = {
  tags: Array<string>;
};

export default function Tags({ tags }: TagProps) {
  return (
    <>
      {tags.map((tag, i) => (
        <Link href={`/tag/${tag}`} key={i}>
          <div className='bg-violet-600 text-slate-100 m-1.5 p-1.5 rounded-md hover:bg-violet-800'>
            #{tag}
          </div>
        </Link>
      ))}
    </>
  );
}
