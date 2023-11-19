import React from 'react';

const MemoryAllocation = () =>
{
    const v8 = require('v8');

const heapStatistics = v8.getHeapStatistics();
console.log("heapStatistics ", heapStatistics);

  const bytesToMB = (bytes) => bytes / (1024 * 1024);

    return (
        <section className='w-full py-4 2xl:py-6 px-4 lg:px-8 2xl:px-9 space-y-6 2xl:space-y-10'>
            <h1 className='text-3xl text-[#2B5743] text-center font-bold'>My Wallet</h1>
            <h3>{`Total Heap Size: ${bytesToMB(heapStatistics.total_heap_size)} MB`}</h3>
            <h3>{`Used Heap Size: ${bytesToMB(heapStatistics.used_heap_size)} MB`}</h3>
            <h3>{`Heap Size Limit: ${bytesToMB(heapStatistics.heap_size_limit)} MB`}</h3>
            <h3>{`Total Physical Size: ${bytesToMB(heapStatistics.total_physical_size)} MB`}</h3>
            <h3>{`Total Available Size: ${bytesToMB(heapStatistics.total_available_size)} MB`}</h3>
            <h3>{`Malloced Memory: ${bytesToMB(heapStatistics.malloced_memory)} MB`}</h3>
            <h3>{`Peak Malloced Memory: ${bytesToMB(heapStatistics.peak_malloced_memory)} MB`}</h3>
            <h3>{`External Memory: ${bytesToMB(heapStatistics.external_memory)} MB`}</h3>
            {/* <h1>{heapStatistics}</h1> */}
        </section>
    );
};
export default MemoryAllocation;