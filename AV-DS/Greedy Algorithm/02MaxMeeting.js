// https://www.geeksforgeeks.org/find-maximum-meetings-in-one-room/
// Print Maximum Meetings in One Room

/**
 Given n meetings in the form of start[] and end[], where start[i] is the start time of ith meeting and end[i] is the end time of ith meeting. The task is to print the meeting number of all the meetings which can be held in a single room such that total number of meetings held is maximized. The meeting room can have only one meeting at a particular time.

Note: The start time of one chosen meeting can’t be equal to the end time of any other chosen meeting.

Examples: 

Input: start[] = {1, 3, 0, 5, 8, 5}, end[] = {2, 4, 6, 7, 9, 9} 
Output: 1 2 4 5
Explanation: We can attend the 1st meeting from (1 to 2), then the 2nd meeting from (3 to 4), then the 4th meeting from (5 to 7), and the 5th meeting from (8 to 9).


Input: start[] = {10, 12, 20}, end[] = {20, 25, 30}
Output: 1
Explanation: We can attend at most one meeting in a single meeting room.
 */


const maxMeetings = (n,start, end) => {
    console.log('start -----',start,`end-------`,end)
    let meetings = []

    for(let i =0;i<n;i++) {
        meetings.push({start: start[i], end: end[i]})
    }

    meetings.sort((a, b) => a.end - b.end);

    let totalMeetings = [];
    let lastEndTime = 0

    for(let i =0;i<n;i++) {
        if(meetings[i].start > lastEndTime) {
            totalMeetings.push(i+1)
            lastEndTime = meetings[i].end
        }
    }

    return totalMeetings;
}


const n1 = 6;
const end = [2, 4, 6, 7, 9, 9];
const start = [1, 3, 0, 5, 8, 5];
console.log(maxMeetings(n1, start, end)); // Output: 4