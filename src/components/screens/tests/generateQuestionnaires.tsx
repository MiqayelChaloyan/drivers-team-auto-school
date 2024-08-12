import { DRIVING_THEORY_EXAM as group1 } from '@/src/drivingTheory/group-1';
import { DRIVING_THEORY_EXAM as group2 } from '@/src/drivingTheory/group-2';
import { DRIVING_THEORY_EXAM as group3 } from '@/src/drivingTheory/group-3';
import { DRIVING_THEORY_EXAM as group4 } from '@/src/drivingTheory/group-4';
import { DRIVING_THEORY_EXAM as group5 } from '@/src/drivingTheory/group-5';
import { DRIVING_THEORY_EXAM as group6 } from '@/src/drivingTheory/group-6';
import { DRIVING_THEORY_EXAM as group7 } from '@/src/drivingTheory/group-7';
import { DRIVING_THEORY_EXAM as group8 } from '@/src/drivingTheory/group-8';
import { DRIVING_THEORY_EXAM as group9 } from '@/src/drivingTheory/group-9';
import { DRIVING_THEORY_EXAM as group10 } from '@/src/drivingTheory/group-10';

const groups = [group1, group2, group3, group4, group5, group6, group7, group8, group9, group10];
const questionsPerGroup = [3, 1, 1, 3, 5, 2, 1, 2, 1, 1];

export const generateQuestionnaires = () => {
    const numQuestionnaires = 20;
    const questionsPerQuestionnaire = 20;

    let questionnaires = [];
    let startingIndices = Array(groups.length).fill(0);

    for (let i = 0; i < numQuestionnaires; i++) {
        let currentQuestions = [];
        let currentIndex = 0;

        for (let g = 0; g < groups.length; g++) {
            const startIdx = startingIndices[g];
            const endIdx = startIdx + questionsPerGroup[g];
            const questions = groups[g].slice(startIdx, endIdx);

            if (currentIndex + questions.length <= questionsPerQuestionnaire) {
                currentQuestions.push(...questions);
                currentIndex += questions.length;
                startingIndices[g] = endIdx;
            } else {
                break;
            }
        }

        if (currentQuestions.length < questionsPerQuestionnaire) {
            console.warn(`Not enough questions for questionnaire ${i + 1}. Available questions: ${currentQuestions.length}`);
            while (currentQuestions.length < questionsPerQuestionnaire && startingIndices.some(idx => idx < groups[0].length)) {
                for (let g = 0; g < groups.length; g++) {
                    if (currentQuestions.length >= questionsPerQuestionnaire) break;
                    const startIdx = startingIndices[g];
                    const remainingQuestions = groups[g].slice(startIdx);
                    currentQuestions.push(...remainingQuestions);
                    startingIndices[g] = groups[g].length;
                }
            }
        }

        questionnaires.push(currentQuestions.slice(0, questionsPerQuestionnaire));
    }

    return questionnaires;
};
