import Link from 'next/link';

type TagProps = {
  tags: Array<string>;
};

export default function Tags({ tags }: TagProps) {
  return (
    <div className='flex justify-center'>
      {tags.map((tag) => (
        <Link href={`/tag/${tag}`}>
          <div className='bg-violet-600 text-slate-100 m-2 p-1.5 rounded-md hover:bg-violet-800'>
            #{tag}
          </div>
        </Link>
      ))}
    </div>
  );
}
