import { DRIVING_THEORY_EXAM as group1 } from '@/src/driving_theory/group_1';
import { DRIVING_THEORY_EXAM as group2 } from '@/src/driving_theory/group_2';
import { DRIVING_THEORY_EXAM as group3 } from '@/src/driving_theory/group_3';
import { DRIVING_THEORY_EXAM as group4 } from '@/src/driving_theory/group_4';
import { DRIVING_THEORY_EXAM as group5 } from '@/src/driving_theory/group_5';
import { DRIVING_THEORY_EXAM as group6 } from '@/src/driving_theory/group_6';
import { DRIVING_THEORY_EXAM as group7 } from '@/src/driving_theory/group_7';
import { DRIVING_THEORY_EXAM as group8 } from '@/src/driving_theory/group_8';
import { DRIVING_THEORY_EXAM as group9 } from '@/src/driving_theory/group_9';
import { DRIVING_THEORY_EXAM as group10 } from '@/src/driving_theory/group_10';

const groups = [group1, group2, group3, group4, group5, group6, group7, group8, group9, group10];

const generateQuestionnaires = () => {
    return groups;
};

export {
    generateQuestionnaires
}

// const questionsPerGroup = [3, 1, 1, 3, 5, 2, 1, 2, 1, 1];


// export const generateQuestionnaires = () => {
//     const numQuestionnaires = 60;
//     const questionsPerQuestionnaire = 20;

//     let questionnaires = [];
//     let startingIndices = Array(groups.length).fill(0);

//     const shuffleArray = (array) => {
//         for (let i = array.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             [array[i], array[j]] = [array[j], array[i]];
//         }
//         return array;
//     };

//     while (questionnaires.length < numQuestionnaires) {
//         let currentQuestions = [];
//         let validTest = true;

//         for (let g = 0; g < groups.length; g++) {
//             let startIdx = startingIndices[g];
//             const neededQuestions = questionsPerGroup[g];
//             const availableQuestions = groups[g].length - startIdx;

//             if (availableQuestions < neededQuestions) {
//                 const questions = shuffleArray(groups[g].slice(startIdx));
//                 currentQuestions.push(...questions.map(question => ({ ...question, group: g + 1 })));
//                 startingIndices[g] = 0; // Reset to allow recycling
//             } else {
//                 const questions = shuffleArray(groups[g].slice(startIdx, startIdx + neededQuestions));
//                 currentQuestions.push(...questions.map(question => ({ ...question, group: g + 1 })));
//                 startingIndices[g] += neededQuestions;
//             }
//         }

//         if (currentQuestions.length < questionsPerQuestionnaire) {
//             let additionalQuestionsNeeded = questionsPerQuestionnaire - currentQuestions.length;
//             for (let g = 0; g < groups.length; g++) {
//                 if (additionalQuestionsNeeded <= 0) break;

//                 let startIdx = startingIndices[g];
//                 const remainingQuestions = groups[g].slice(startIdx);
//                 if (remainingQuestions.length > 0) {
//                     const additionalQuestions = shuffleArray(remainingQuestions).slice(0, additionalQuestionsNeeded);
//                     currentQuestions.push(...additionalQuestions.map(question => ({ ...question, group: g + 1 })));
//                     additionalQuestionsNeeded -= additionalQuestions.length;
//                     startingIndices[g] += additionalQuestions.length;
//                 }

//                 if (startIdx >= groups[g].length) {
//                     startingIndices[g] = 0; // Reset to allow recycling
//                 }
//             }
//         }

//         if (currentQuestions.length === questionsPerQuestionnaire) {
//             questionnaires.push(currentQuestions);
//         } else {
//             break;
//         }
//     }

//     return questionnaires;
// };