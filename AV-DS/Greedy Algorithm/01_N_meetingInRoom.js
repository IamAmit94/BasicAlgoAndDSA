// https://www.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1
/*
You are given timings of n meetings in the form of (start[i], end[i]) where start[i] is the start time of meeting i and end[i] is the finish time of meeting i. Return the maximum number of meetings that can be accommodated in a single meeting room, when only one meeting can be held in the meeting room at a particular time. 

Note: The start time of one chosen meeting can't be equal to the end time of the other chosen meeting.

Examples :

Input: n = 6, start[] = [1, 3, 0, 5, 8, 5], end[] =  [2, 4, 6, 7, 9, 9]
Output: 4
Explanation: Maximum four meetings can be held with given start and end timings. The meetings are - (1, 2), (3, 4), (5,7) and (8,9)
Input: n = 3, start[] = [10, 12, 20], end[] = [20, 25, 30]
Output: 1
Explanation: Only one meetings can be held with given start and end timings.

*/

function maxMeetings(n, start, end) {
    // Create an array of meetings
    let meetings = [];
    for (let i = 0; i < n; i++) {
        meetings.push({ start: start[i], end: end[i] });
    }
    console.log('meeting--->', meetings);
    // Sort meetings based on their end times
    meetings.sort((a, b) => a.end - b.end);
    console.log('After meeting--->', meetings);
    let count = 0;
    let lastEndTime = 0;

    // Iterate over sorted meetings and select the ones that don't overlap
    for (let i = 0; i < n; i++) {
        if (meetings[i].start >= lastEndTime) {
            count++;
            lastEndTime = meetings[i].end;
        }
    }

    return count;
}

// Example usage
const n1 = 6;
const start1 = [1, 3, 0, 5, 8, 5];
const end1 = [2, 4, 6, 7, 9, 9];
console.log(maxMeetings(n1, start1, end1)); // Output: 4

// const n2 = 3;
// const start2 = [10, 12, 20];
// const end2 = [20, 25, 30];
// console.log(maxMeetings(n2, start2, end2)); // Output: 1



// The endtime must be greater than the start time of the next meeting
// 