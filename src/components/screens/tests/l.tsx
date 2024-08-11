const groups = [
    'group-1',
    'group-2',
    'group-3',
    'group-4',
    'group-5',
    'group-6',
    'group-7',
    'group-8',
    'group-9',
    'group-10',
];

const importModule = async (group: string) => {
    const module = await import(`@/src/drivingTheory/${group}`);
    const { DRIVING_THEORY_EXAM } = module;
    return DRIVING_THEORY_EXAM;
};

const processGroups = async () => {
    const results = await Promise.all(groups.map(group => importModule(group)));
    return results.flat();
};

// Helper function to shuffle array
const shuffleArray = (array: any[]) => array.sort(() => Math.random() - 0.5);

const generateTests = async (numTests: number, questionsPerTest: number) => {
    const allQuestions = await processGroups();

    // Ensure there are enough questions to generate the requested number of tests
    // if (allQuestions.length < numTests * questionsPerTest) {
    //     throw new Error("Not enough questions to generate the requested number of tests.");
    // }

    const tests = [];
    let questionIndex = 0;

    for (let i = 0; i < numTests; i++) {
        const rangeStart = questionIndex;
        const rangeEnd = rangeStart + questionsPerTest;
        const testQuestions = allQuestions.slice(rangeStart, rangeEnd);

        if (testQuestions.length < questionsPerTest) {
            console.warn(`Test ${i + 1} has fewer questions than requested.`);
        }

        tests.push(testQuestions);
        questionIndex += questionsPerTest;

        // Adjust questionIndex to loop around if necessary
        if (questionIndex >= allQuestions.length) {
            questionIndex = 0;
        }
    }

    return tests;
};






export { generateTests };