const Sem_1 = document.querySelector(".sem-1");
const displayResult = Sem_1.querySelector("#display-result");
const createInputsBtn = Sem_1.querySelector("#create-inputs-btn");
const TeachingUnitNumber = Sem_1.querySelector("#Teaching-unit-number");
const allInputs = Sem_1.querySelector(".all-inputs");
const calculateSection = Sem_1.querySelector(".calculate-section");

const Sem_2 = document.querySelector(".sem-2");
const displayResult_2 = Sem_2.querySelector("#display-result");
const createInputsBtn_2 = Sem_2.querySelector("#create-inputs-btn");
const TeachingUnitNumber_2 = Sem_2.querySelector("#Teaching-unit-number");
const allInputs_2 = Sem_2.querySelector(".all-inputs");
const calculateSection_2 = Sem_2.querySelector(".calculate-section");

const Sem_3 = document.querySelector(".sem-3");
const displayResult_3 = Sem_3.querySelector("#display-result");
const createInputsBtn_3 = Sem_3.querySelector("#create-inputs-btn");
const TeachingUnitNumber_3 = Sem_3.querySelector("#Teaching-unit-number");
const allInputs_3 = Sem_3.querySelector(".all-inputs");
const calculateSection_3 = Sem_3.querySelector(".calculate-section");

const Sem_4 = document.querySelector(".sem-4");
const displayResult_4 = Sem_4.querySelector("#display-result");
const createInputsBtn_4 = Sem_4.querySelector("#create-inputs-btn");
const TeachingUnitNumber_4 = Sem_4.querySelector("#Teaching-unit-number");
const allInputs_4 = Sem_4.querySelector(".all-inputs");
const calculateSection_4 = Sem_4.querySelector(".calculate-section");

const Sem_5 = document.querySelector(".sem-5");
const displayResult_5 = Sem_5.querySelector("#display-result");
const createInputsBtn_5 = Sem_5.querySelector("#create-inputs-btn");
const TeachingUnitNumber_5 = Sem_5.querySelector("#Teaching-unit-number");
const allInputs_5 = Sem_5.querySelector(".all-inputs");
const calculateSection_5 = Sem_5.querySelector(".calculate-section");

const Sem_6 = document.querySelector(".sem-6");
const displayResult_6 = Sem_6.querySelector("#display-result");
const createInputsBtn_6 = Sem_6.querySelector("#create-inputs-btn");
const TeachingUnitNumber_6 = Sem_6.querySelector("#Teaching-unit-number");
const allInputs_6 = Sem_6.querySelector(".all-inputs");
const calculateSection_6 = Sem_6.querySelector(".calculate-section");

const Sem_1_and_2 = document.querySelector(".sem-1-and-2");
const Sem_3_and_4 = document.querySelector(".sem-3-and-4");
const Sem_5_and_6 = document.querySelector(".sem-5-and-6");


const errorBtn = document.querySelector("#error-btn");
const warningMessage = document.querySelector("#warning-message");
const errorMessage = document.querySelector(".error-message");

document.addEventListener("DOMContentLoaded", () => {
    const HasRead = localStorage.getItem("HasRead");
    const welcomeMessageContainer = document.querySelector(".welcome-message-container");
    const NextBtn = document.querySelector("#next-btn");
    const prevBtn = document.querySelector("#prev-btn");
    const closeBtn = document.querySelector("#close-btn");

    const messageContent_1 = document.querySelector("#message-content");
    const messageContenet_2 = document.querySelector("#message-content-2");

    if(HasRead === "true") {
        return;
    } else {
        function WelcomeMessage() {
            welcomeMessageContainer.style.display = "block";
    
            NextBtn.addEventListener("click", () => {
                messageContent_1.style.display = "none";
                messageContent_1.classList.remove("animate-content-prev");
                messageContent_1.classList.add("animate-content-1");
                messageContenet_2.style.display = "block";
            })
            prevBtn.addEventListener("click", () => {
                messageContent_1.classList.remove("animate-content-1");
                messageContent_1.classList.add("animate-content-prev");
                messageContenet_2.style.display = "none";
                messageContent_1.style.display = "block";
            })
            closeBtn.addEventListener("click", () => {
                localStorage.setItem("HasRead", "true");
                welcomeMessageContainer.style.display = "none";
            })
        }
        WelcomeMessage()
    }

})

console.log("This website is powered by E-learning !");


errorBtn.addEventListener("click", () => {
    errorMessage.style.display = "none";
})

function createInputs(Sem_N_Arg, createInputsBtn_Arg, TeachingUnitNumber_Arg, allInputs_Arg, calculateSection_Arg) {
    createInputsBtn_Arg.addEventListener("click", (e) => {
        e.preventDefault();
        const ResetBtn = Sem_N_Arg.querySelector("#reset-btn");
        const getNumberOfInputToCreate = TeachingUnitNumber_Arg.value.trim();
        const TurnItToNumberType = Number(getNumberOfInputToCreate)

        if(getNumberOfInputToCreate === "") {
            warningMessage.textContent = "Le champ est vide, veuillez insérer un nombre, s'il vous plaît.";
            errorMessage.style.display = "block";
            return;
        }

        if(isNaN(TurnItToNumberType)) {
            warningMessage.textContent = "Le champ contient du texte, veuillez insérer plutôt un nombre, s'il vous plaît.";
            errorMessage.style.display = "block";
            return;
        }

        if(TurnItToNumberType === 0) {
            warningMessage.textContent = "Veuillez insérer un nombre supérieur à 0, s'il vous plaît.";
            errorMessage.style.display = "block";
            return;
        }

        let currentInputCount = Sem_N_Arg.querySelectorAll('.input-holder').length;

        for(let i = currentInputCount; i < currentInputCount + TurnItToNumberType; i++) {

            const TeachingInputs = `
            <div class="input-holder">
                <input class="inp-value" type="text" id="unit-${i + 1}">
                <select class="credit-options">
                    <option>Crédit</option>
                    <option id="opt-1" value="1">1</option>
                    <option id="opt-2" value="2">2</option>
                    <option id="opt-3" value="3">3</option>
                    <option id="opt-4" value="4">4</option>
                    <option id="opt-5" value="5">5</option>
                    <option id="opt-6" value="6">6</option>
                </select>
            </div>
            `;
            
            allInputs_Arg.insertAdjacentHTML('beforeend', TeachingInputs);
        }

        if(TurnItToNumberType > 0) {
            calculateSection_Arg.style.display = "block"
        }

        ResetBtn.addEventListener("click", () => {
            allInputs_Arg.innerHTML = "";
            calculateSection_Arg.style.display = "none";
        })
        
    })
}

createInputs(Sem_1, createInputsBtn, TeachingUnitNumber, allInputs, calculateSection);
createInputs(Sem_2, createInputsBtn_2, TeachingUnitNumber_2, allInputs_2, calculateSection_2);
createInputs(Sem_3, createInputsBtn_3, TeachingUnitNumber_3, allInputs_3, calculateSection_3);
createInputs(Sem_4, createInputsBtn_4, TeachingUnitNumber_4, allInputs_4, calculateSection_4);
createInputs(Sem_5, createInputsBtn_5, TeachingUnitNumber_5, allInputs_5, calculateSection_5);
createInputs(Sem_6, createInputsBtn_6, TeachingUnitNumber_6, allInputs_6, calculateSection_6);


function calculationSection(Sem_N_Arg, displayResult_Arg, allInputs_Arg) {
    let TotalMarks = 0;
    const Average = Sem_N_Arg.querySelector("#Average");
    const Marks = Sem_N_Arg.querySelector("#Marks");
    displayResult_Arg.addEventListener("click", () => {
    const eachInput = allInputs_Arg.querySelectorAll(".inp-value");
    const CreditsOptions = allInputs_Arg.querySelectorAll(".credit-options");
    console.log("This website is powered by E-learning !");
    const GetSemester = Sem_N_Arg.getAttribute("class");
    
    let ArrForInputs = [];
    let ArrForCredits = [];
    eachInput.forEach((Inp) => {
            const InpsValue = Inp.value.trim();
            if(!InpsValue) {
                warningMessage.textContent = "L'un des champs est vide, veuillez insérer un nombre, s'il vous plaît.";
                errorMessage.style.display = "block";
                return;
            } else if (isNaN(InpsValue)) {
                warningMessage.textContent = "L'un des champs contient du texte, veuillez insérer un nombre, s'il vous plaît.";
                errorMessage.style.display = "block";
                return;
            } else {
                if(!isNaN(InpsValue)) {
                    ArrForInputs.push(InpsValue);
                }
            }
        
    })

    CreditsOptions.forEach((opt) => {
        const creditValue = opt.value.trim();
        if(creditValue === "Crédit") {
            warningMessage.textContent = "Veuillez sélectionner le crédit de chaque Unité d'Enseignement, s'il vous plaît.";
                errorMessage.style.display = "block";
            return;
        } else {
            if(creditValue !== "Crédit") {
                ArrForCredits.push(creditValue);
            }
        }
    })

            if(ArrForInputs.length >= eachInput.length && ArrForCredits.length >= eachInput.length) {
                const firstSection = Sem_N_Arg.querySelector(".first-section");
                const resultSection = Sem_N_Arg.querySelector(".result-section-holder");
                const spinner = Sem_N_Arg.querySelector(".spinner");
                const afterSpinner = Sem_N_Arg.querySelector(".after-spinner");
                const calculateAgainBtn = Sem_N_Arg.querySelector("#calculate-again");
                eachInput.forEach((inp) => {
                    const InpValue = inp.value;

                        const TurnToNumber = Number(InpValue);
                        
                        const Credit = inp.parentElement;
                        const CreditValue = Credit.querySelector(".credit-options").value;
                        const MultiplyMarkandCredit = TurnToNumber * CreditValue;
                        TotalMarks = TotalMarks + MultiplyMarkandCredit;
                        const averageReport = (TotalMarks / 30).toFixed(2);
                        Marks.textContent = TotalMarks;
                        Average.textContent = averageReport;
                        localStorage.setItem(`${GetSemester}-Marks`, TotalMarks);
                        localStorage.setItem(`${GetSemester}-Average`, averageReport);
                        
                })
                firstSection.style.display = "none";
                resultSection.style.display = "block";
                setTimeout(() => {
                    spinner.style.display = "none";
                    afterSpinner.style.display = "block";
                }, 1000);
                localStorage.setItem(`${GetSemester}-GradAvailable`, "true");
                TotalMarks = 0;
                calculateAgainBtn.addEventListener("click", () => {
                    firstSection.style.display = "block";
                    resultSection.style.display = "none";
                })
            }
    })

}

calculationSection(Sem_1, displayResult, allInputs);
calculationSection(Sem_2, displayResult_2, allInputs_2);
calculationSection(Sem_3, displayResult_3, allInputs_3);
calculationSection(Sem_4, displayResult_4, allInputs_4);
calculationSection(Sem_5, displayResult_5, allInputs_5);
calculationSection(Sem_6, displayResult_6, allInputs_6);


function DisplayExistingGrade(Sem_N_Arg, Sem_N_and_N_Arg) {
    const GetSemester = Sem_N_Arg.getAttribute("class");
    const GetAllSemesters = Sem_N_and_N_Arg.getAttribute("class");
    const GradAvailable = localStorage.getItem(`${GetSemester}-GradAvailable`);
    const firstSection = Sem_N_Arg.querySelector(".first-section");
    const resultSection = Sem_N_Arg.querySelector(".result-section-holder");
    const spinner = Sem_N_Arg.querySelector(".spinner");
    const afterSpinner = Sem_N_Arg.querySelector(".after-spinner");
    const AverageContent = Sem_N_Arg.querySelector("#Average");
    const MarksContent = Sem_N_Arg.querySelector("#Marks");
    const Marks = localStorage.getItem(`${GetSemester}-Marks`);
    const Average = localStorage.getItem(`${GetSemester}-Average`);
    const calculateAgainBtn = Sem_N_Arg.querySelector("#calculate-again");

    if(GradAvailable === "true") {
        firstSection.style.display = "none";
        AverageContent.textContent = Average;
        MarksContent.textContent = Marks;
        resultSection.style.display = "block";
        setTimeout(() => {
            spinner.style.display = "none";
        }, 1000);
        afterSpinner.style.display = "block";
    } else {
        firstSection.style.display = "block";
        resultSection.style.display = "none";
    }

    calculateAgainBtn.addEventListener("click", () => {
        localStorage.removeItem(`${GetSemester}-GradAvailable`);
        localStorage.removeItem(`${GetSemester}-Marks`);
        localStorage.removeItem(`${GetSemester}-Average`);
        localStorage.removeItem(`${GetAllSemesters}-Annual-Marks`);
        localStorage.removeItem(`${GetAllSemesters}-Annual-Average`);
        localStorage.removeItem("Complete-Marks");
        localStorage.removeItem("Complete-Average");
        firstSection.style.display = "block";
        resultSection.style.display = "none";
    })
}
DisplayExistingGrade(Sem_1, Sem_1_and_2);
DisplayExistingGrade(Sem_2, Sem_1_and_2);
DisplayExistingGrade(Sem_3, Sem_3_and_4);
DisplayExistingGrade(Sem_4, Sem_3_and_4);
DisplayExistingGrade(Sem_5, Sem_5_and_6);
DisplayExistingGrade(Sem_6, Sem_5_and_6);


const YearlyGrade = (Sem_N_Arg) => {
    const GetAnnualGradeBtn = Sem_N_Arg.querySelector("#calculate-annual-grade");
    const Marks = Sem_N_Arg.querySelector("#Marks");
    const Average = Sem_N_Arg.querySelector("#Average");
    const spinner = Sem_N_Arg.querySelector(".spinner");
    GetAnnualGradeBtn.addEventListener('click', () => {
        const GetSemester = Sem_N_Arg.getAttribute("class");

        const GetMarks_1 = localStorage.getItem(`sem-1-Marks`);
        const GetMarks_2 = localStorage.getItem(`sem-2-Marks`);
        const GetAverage_1 = localStorage.getItem(`sem-1-Average`);
        const GetAverage_2 = localStorage.getItem(`sem-2-Average`);

        const GetMarks_3 = localStorage.getItem(`sem-3-Marks`);
        const GetMarks_4 = localStorage.getItem(`sem-4-Marks`);
        const GetAverage_3 = localStorage.getItem(`sem-3-Average`);
        const GetAverage_4 = localStorage.getItem(`sem-4-Average`);

        const GetMarks_5 = localStorage.getItem(`sem-5-Marks`);
        const GetMarks_6 = localStorage.getItem(`sem-6-Marks`);
        const GetAverage_5 = localStorage.getItem(`sem-5-Average`);
        const GetAverage_6 = localStorage.getItem(`sem-6-Average`);


        if(GetSemester === "sem-1-and-2") {

            if(!GetMarks_1){
                warningMessage.innerHTML = `Les notes du <strong> { Semestre 1 } </strong> manquent. Veuillez calculer votre moyenne du <strong> { Semestre 1 } </strong> d'abord.`;
                errorMessage.style.display = "block";
                return;
            } else if (!GetMarks_2) {
                warningMessage.innerHTML = `Les notes du <strong> { Semestre 2 } </strong> manquent. Veuillez calculer votre moyenne du <strong> { Semestre 2 } </strong> d'abord.`;
                errorMessage.style.display = "block";
                return;
            }

            if(!GetAverage_1){
                warningMessage.innerHTML = `La moyenne obtenue pour le <strong> { Semestre 1 } </strong> manque. Veuillez calculer votre moyenne du <strong> { Semestre 1 } </strong> d'abord.`;
                errorMessage.style.display = "block";
                return;
            } else if (!GetAverage_2) {
                warningMessage.innerHTML = `La moyenne obtenue pour le <strong> { Semestre 2 } </strong> manque. Veuillez calculer votre moyenne du <strong> { Semestre 2 } </strong> d'abord.`;
                errorMessage.style.display = "block";
                return;
            }

            const convertMarksToNumber_1 = Number(GetMarks_1)
            const convertMarksToNumber_2 = Number(GetMarks_2)
            const TotalMarks = convertMarksToNumber_1 + convertMarksToNumber_2
            const AnnualAverage = (TotalMarks / 60).toFixed(2);
            localStorage.setItem(`${GetSemester}-Annual-Marks`, TotalMarks);
            localStorage.setItem(`${GetSemester}-Annual-Average`, AnnualAverage);
            spinner.style.display = "block";

            setTimeout(() => {
                spinner.style.display = "none";
                Marks.textContent = TotalMarks;
                Average.textContent = AnnualAverage;
            }, 1000)
        }

        if(GetSemester === "sem-3-and-4") {

            if(!GetMarks_3){
                warningMessage.innerHTML = `Les notes du <strong> { Semestre 3 } </strong> manquent. Veuillez calculer votre moyenne du <strong> { Semestre 3 } </strong> d'abord.`;
                errorMessage.style.display = "block";
                return;
            } else if (!GetMarks_4) {
                warningMessage.innerHTML = `Les notes du <strong> { Semestre 4 } </strong> manquent. Veuillez calculer votre moyenne du <strong> { Semestre 4 } </strong> d'abord.`;
                errorMessage.style.display = "block";
                return;
            }

            if(!GetAverage_3){
                warningMessage.innerHTML = `La moyenne obtenue pour le <strong> { Semestre 3 } </strong> manque. Veuillez calculer votre moyenne du <strong> { Semestre 3 } </strong> d'abord.`;
                errorMessage.style.display = "block";
                return;
            } else if (!GetAverage_4) {
                warningMessage.innerHTML = `La moyenne obtenue pour le <strong> { Semestre 4 } </strong> manque. Veuillez calculer votre moyenne du <strong> { Semestre 4 } </strong> d'abord.`;
                errorMessage.style.display = "block";
                return;
            }

            const convertMarksToNumber_3 = Number(GetMarks_3)
            const convertMarksToNumber_4 = Number(GetMarks_4)
            const TotalMarks = convertMarksToNumber_3 + convertMarksToNumber_4
            const AnnualAverage = (TotalMarks / 60).toFixed(2)
            localStorage.setItem(`${GetSemester}-Annual-Marks`, TotalMarks);
            localStorage.setItem(`${GetSemester}-Annual-Average`, AnnualAverage);
            
            spinner.style.display = "block";
            setTimeout(() => {
                spinner.style.display = "none";
                Marks.textContent = TotalMarks;
                Average.textContent = AnnualAverage;
            }, 1000)
        }

        if(GetSemester === "sem-5-and-6") {

            if(!GetMarks_5){
                warningMessage.innerHTML = `Les notes du <strong> { Semestre 5 } </strong> manquent. Veuillez calculer votre moyenne du <strong> { Semestre 5 } </strong> d'abord.`;
                errorMessage.style.display = "block";
                return;
            } else if (!GetMarks_6) {
                warningMessage.innerHTML = `Les notes du <strong> { Semestre 6 } </strong> manquent. Veuillez calculer votre moyenne du <strong> { Semestre 6 } </strong> d'abord.`;
                errorMessage.style.display = "block";
                return;
            }

            if(!GetAverage_5){
                warningMessage.innerHTML = `La moyenne obtenue pour le <strong> { Semestre 5 } </strong> manque. Veuillez calculer votre moyenne du <strong> { Semestre 5 } </strong> d'abord.`;
                errorMessage.style.display = "block";
                return;
            } else if (!GetAverage_6){
                warningMessage.innerHTML = `La moyenne obtenue pour le <strong> { Semestre 6 } </strong> manque. Veuillez calculer votre moyenne du <strong> { Semestre 6 } </strong> d'abord.`;
                errorMessage.style.display = "block";
                return;
            }

            const convertMarksToNumber_5 = Number(GetMarks_5)
            const convertMarksToNumber_6 = Number(GetMarks_6)
            const TotalMarks = convertMarksToNumber_5 + convertMarksToNumber_6
            const AnnualAverage = (TotalMarks / 60).toFixed(2)
            localStorage.setItem(`${GetSemester}-Annual-Marks`, TotalMarks);
            localStorage.setItem(`${GetSemester}-Annual-Average`, AnnualAverage);
            spinner.style.display = "block";

            setTimeout(() => {
                spinner.style.display = "none";
                Marks.textContent = TotalMarks;
                Average.textContent = AnnualAverage;
            }, 1000)
        }
    })
}

YearlyGrade(Sem_1_and_2);
YearlyGrade(Sem_3_and_4);
YearlyGrade(Sem_5_and_6);

function ExistingAnnualGrade(Sem_N_Arg) {
    const GetSemester = Sem_N_Arg.getAttribute("class");
    const spinner = Sem_N_Arg.querySelector(".spinner");
    const Annual_Marks = Sem_N_Arg.querySelector("#Marks");
    const Annual_Average = Sem_N_Arg.querySelector("#Average");

    const GetSem_1_and_2_Marks = localStorage.getItem(`${GetSemester}-Annual-Marks`);
    const GetSem_1_and_2_Average = localStorage.getItem(`${GetSemester}-Annual-Average`);

    const GetSem_3_and_4_Marks = localStorage.getItem(`${GetSemester}-Annual-Marks`);
    const GetSem_3_and_4_Average = localStorage.getItem(`${GetSemester}-Annual-Average`);

    const GetSem_5_and_6_Marks = localStorage.getItem(`${GetSemester}-Annual-Marks`);
    const GetSem_5_and_6_Average = localStorage.getItem(`${GetSemester}-Annual-Average`);

    if(GetSem_1_and_2_Marks && GetSem_1_and_2_Average) {
        spinner.style.display = "block";
            setTimeout(() => {
                spinner.style.display = "none";
                Annual_Marks.textContent = GetSem_1_and_2_Marks;
                Annual_Average.textContent = GetSem_1_and_2_Average;
            }, 1000)
    }

    if(GetSem_3_and_4_Marks && GetSem_3_and_4_Average) {
        spinner.style.display = "block";
            setTimeout(() => {
                spinner.style.display = "none";
                Annual_Marks.textContent = GetSem_3_and_4_Marks;
                Annual_Average.textContent = GetSem_3_and_4_Average;
            }, 1000)
    }

    if(GetSem_5_and_6_Marks && GetSem_5_and_6_Average) {
        spinner.style.display = "block";
            setTimeout(() => {
                spinner.style.display = "none";
                Annual_Marks.textContent = GetSem_5_and_6_Marks;
                Annual_Average.textContent = GetSem_5_and_6_Average;
            }, 1000)
    }
}

ExistingAnnualGrade(Sem_1_and_2);
ExistingAnnualGrade(Sem_3_and_4);
ExistingAnnualGrade(Sem_5_and_6);

function DisplayGeneralGrade () {
    const allSemesters = document.querySelector(".all-semesters");
    const spinner = allSemesters.querySelector(".spinner");
    const calculateAllSemestersGradeBtn = allSemesters.querySelector("#calculate-all-semesters-grade");
    const Marks = allSemesters.querySelector("#Marks");
    const Average = allSemesters.querySelector("#Average");

    const GetSem_1_and_2_Marks = localStorage.getItem('sem-1-and-2-Annual-Marks');
    const GetSem_3_and_4_Marks = localStorage.getItem('sem-3-and-4-Annual-Marks');
    const GetSem_5_and_6_Marks = localStorage.getItem('sem-5-and-6-Annual-Marks');

    const GetSem_1_and_2_Average = localStorage.getItem('sem-1-and-2-Annual-Average');
    const GetSem_3_and_4_Average = localStorage.getItem('sem-3-and-4-Annual-Average');
    const GetSem_5_and_6_Average = localStorage.getItem('sem-5-and-6-Annual-Average');

    calculateAllSemestersGradeBtn.addEventListener("click", () => {
        if(!GetSem_1_and_2_Marks && !GetSem_1_and_2_Average) {
            warningMessage.innerHTML = `La moyenne annuelle du <strong> { Semestre 1 } </strong> et <strong> { Semestre 2 } </strong> manquent. Veuillez calculer votre moyenne annuelle du <strong> { Semestre 1 } </strong> et <strong> { Semestre 2 } </strong> d'abord.`;
            errorMessage.style.display = "block";
            return;
        }
        if(!GetSem_3_and_4_Marks && !GetSem_3_and_4_Average) {
            warningMessage.innerHTML = `La moyenne annuelle du <strong> { Semestre 3 } </strong> et <strong> { Semestre 4 } </strong> manquent. Veuillez calculer votre moyenne annuelle du <strong> { Semestre 3 } </strong> et <strong> { Semestre 4 } </strong> d'abord.`;
            errorMessage.style.display = "block";
            return;
        }
        if(!GetSem_5_and_6_Marks && !GetSem_5_and_6_Average) {
            warningMessage.innerHTML = `La moyenne annuelle du <strong> { Semestre 5 } </strong> et <strong> { Semestre 6 } </strong> manquent. Veuillez calculer votre moyenne annuelle du <strong> { Semestre 5 } </strong> et <strong> { Semestre 6 } </strong> d'abord.`;
            errorMessage.style.display = "block";
            return;
        }

        const convertSem_1_and_2_Marks = Number(GetSem_1_and_2_Marks);
        const convertSem_3_and_4_Marks = Number(GetSem_3_and_4_Marks);
        const convertSem_5_and_6_Marks = Number(GetSem_5_and_6_Marks);

        const convertSem_1_and_2_Average = Number(GetSem_1_and_2_Average);
        const convertSem_3_and_4_Average = Number(GetSem_3_and_4_Average);
        const convertSem_5_and_6_Average = Number(GetSem_5_and_6_Average);

        const TotalGeneralMarks = (convertSem_1_and_2_Marks + convertSem_3_and_4_Marks + convertSem_5_and_6_Marks)
        localStorage.setItem("Complete-Marks", TotalGeneralMarks);
        console.log(TotalGeneralMarks);

        const TotalGeneralGrade = (convertSem_1_and_2_Average + convertSem_3_and_4_Average + convertSem_5_and_6_Average);
        const GetGeneraleGrade = (TotalGeneralGrade / 3).toFixed(2);
        localStorage.setItem("Complete-Average", GetGeneraleGrade);
        console.log(GetGeneraleGrade);

        spinner.style.display = "block";
            setTimeout(() => {
                spinner.style.display = "none";
                Marks.textContent = TotalGeneralMarks;
                Average.textContent = GetGeneraleGrade;
            }, 1000)
        
    
    })


}
DisplayGeneralGrade();

function ExistingGeneralGrade() {
    const allSemesters = document.querySelector(".all-semesters");
    const spinner = allSemesters.querySelector(".spinner");
    const Marks = allSemesters.querySelector("#Marks");
    const Average = allSemesters.querySelector("#Average");


    const CompleteMarks = localStorage.getItem("Complete-Marks");
    const CompleteAverage = localStorage.getItem("Complete-Average");

    if(CompleteMarks && CompleteAverage) {
        spinner.style.display = "block";
            setTimeout(() => {
                spinner.style.display = "none";
                Marks.textContent = CompleteMarks;
                Average.textContent = CompleteAverage;
            }, 1000)
    }
}
ExistingGeneralGrade();