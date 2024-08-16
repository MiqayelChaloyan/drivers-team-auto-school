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
const questionsPerGroup = [3, 1, 1, 3, 5, 2, 1, 2, 1, 1];

export const generateQuestionnaires = () => {
    const numQuestionnaires = 60;
    const questionsPerQuestionnaire = 20;

    let questionnaires = [];
    let startingIndices = Array(groups.length).fill(0);

    while (questionnaires.length < numQuestionnaires) {
        let currentQuestions = [];
        let currentQuestionCounts = Array(groups.length).fill(0);
        let validTest = true;

        for (let g = 0; g < groups.length; g++) {
            const startIdx = startingIndices[g];
            const neededQuestions = questionsPerGroup[g];
            const availableQuestions = groups[g].length - startIdx;

            if (availableQuestions < neededQuestions) {
                if (availableQuestions > 0) {
                    const questions = groups[g].slice(startIdx, startIdx + availableQuestions);
                    currentQuestions.push(...questions);
                    currentQuestionCounts[g] = availableQuestions;
                    startingIndices[g] += availableQuestions;
                } else {
                    validTest = false;
                    break;
                }
            } else {
                const questions = groups[g].slice(startIdx, startIdx + neededQuestions);
                currentQuestions.push(...questions);
                currentQuestionCounts[g] = neededQuestions;
                startingIndices[g] += neededQuestions;
            }
        }

        if (currentQuestions.length < questionsPerQuestionnaire) {
            let additionalQuestionsNeeded = questionsPerQuestionnaire - currentQuestions.length;
            for (let g = 0; g < groups.length; g++) {
                if (additionalQuestionsNeeded <= 0) break;

                const startIdx = startingIndices[g];
                const remainingQuestions = groups[g].slice(startIdx);
                if (remainingQuestions.length > 0) {
                    const additionalQuestions = remainingQuestions.slice(0, additionalQuestionsNeeded);
                    currentQuestions.push(...additionalQuestions);
                    additionalQuestionsNeeded -= additionalQuestions.length;
                }
            }
        }

        if (currentQuestions.length === questionsPerQuestionnaire) {
            questionnaires.push(currentQuestions);
        } else {
            break;
        }
    }

    return questionnaires;
};








