// Requirements
//     Using let/const
//     Using operators to perform calculations on variable and literals
//     Using strings numbers boolean values within variables
//     2 if/else statements
//     use try/catch
//     2 diff loops
//         break || continue
//     manipulate array && objects 
//     functions for repeated tasks
//     out process as shown
//     no errors
//     commit
//     readme file


//// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  
//   function getLearnerData(course, ag, submissions) {
//     // here, we would process this data to achieve the desired result.
//     const result = [
//     //   {
//     //     id: 125,
//     //     avg: 0.985, // (47 + 150) / (50 + 150)
//     //     1: 0.94, // 47 / 50
//     //     2: 1.0 // 150 / 150
//     //   },
//     //   {
//     //     id: 132,
//     //     avg: 0.82, // (39 + 125) / (50 + 150)
//     //     1: 0.78, // 39 / 50
//     //     2: 0.833 // late: (140 - 15) / 150
//     //   }
//     ];
  
//     return result;
//   }


//What do I need to do?
//Gather data, process it, and output accordingly
//Create a function named getLearnerData() that accepts these values as parameters, in the order listed: (CourseInfo, AssignmentGroup, [LearnerSubmission]), and returns the formatted result, which should be an array of objects as described above.


//What do we know
//Points_possible = Account for arithmetic erros/string inputs
//Validation: Assignment !== Course ID, throw an error
//if assignment !== due, do not log average, score - 10%  (submitted_at vs due_at)

//starting with Course Info
  //AssignmentGroup && Course ID must match



//Lets start with gathering data

// function getLearnerData(course, ag, submissions) {
//     // here, we would process this data to achieve the desired result.
//     const result = [];
//     try {
//         if(course.id !== AssignmentGroup) {
//             console.log("Course ID does not match Assignment Group.")
//         } else if (course_id !== Number || assignment_id  !== Number){
//             console.log{"Not a valid input."} //if parameters for IDs are not a numerical value.
//         }
//     }catch(error){
//         console.log(error)
// }
//   //
//     return result;
//   }
  
//   const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
//   console.log(result);



//Assignments: 
//Exclude assignments that are not yet due
//Look at due dates for Assignment group
    //  due_at: "2023-01-25",       [125]submitted_at: "2023-01-25",        [132]submitted_at: "2023-01-24",
    // due_at: "2023-02-27",        [125]submitted_at: "2023-02-12",        [132]submitted_at: "2023-03-07",
    // due_at: "3156-11-15",        [125]submitted_at: "2023-01-25",          
  //Use Javascript Built In Function for current date for comparison
const currentDate = new Date();
const day = currentDate.getUTCDate(); 
const year = currentDate.getFullYear();
const month = currentDate.getMonth();

const fullDate = `${year}-${month}-${day}`

// console.log(year)
// console.log(month)
// console.log(day)
// console.log(currentDate)
console.log(fullDate)

//Make Date comparison a function?


















//adjust scores for late submissions 
//calculate the weighted average score
