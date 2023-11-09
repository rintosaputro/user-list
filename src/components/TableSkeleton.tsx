const TableSkeleton = () => {
  return (
    <div className="animate-pulse w-full">
      {[...Array(10)].map((_item, index) => {
        const bg = index % 2 === 0 ? "bg-gray-400" : "bg-gray-500";
        return <div className={`w-full rounded-sm h-16 ${bg}`} key={index} />;
      })}
    </div>
  );
};

export default TableSkeleton;
