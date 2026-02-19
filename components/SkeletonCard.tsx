export default function SkeletonCard() {
  return (
    <div className="animate-pulse border rounded-lg p-2 dark:border-gray-700">
      <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-4">

        {/* Thumbnail Skeleton */}
        <div className="w-full sm:w-32 md:w-40 lg:w-48 aspect-[4/3] md bg-gray-300 dark:bg-gray-700" />

        <div className="flex-1 mt-2 sm:mt-0 space-y-2 w-full">
          {/* Tag + Heading */}
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-5/6" />
          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-1/2" />

          {/* Time */}
          <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-24 mt-1" />
        </div>
      </div>
    </div>
  );
}
