const questions = [
  {
    id: 1,
    question: "Which Of the following is the flag Bharat?",
    options: [
      {
        answerId: 1,
        imgURL: "https://www.worldometers.info/img/flags/in-flag.gif",
        correct: true,
      },
      {
        answerId: 2,
        imgURL: "https://www.worldometers.info/img/flags/id-flag.gif",
        correct: false,
      },
      {
        answerId: 3,
        imgURL: "https://www.worldometers.info/img/flags/ir-flag.gif",
        correct: false,
      },
      {
        answerId: 4,
        imgURL: "https://www.worldometers.info/img/flags/ei-flag.gif",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "Which Of the following is the flag USA?",
    options: [
      {
        answerId: 1,
        imgURL: "https://www.worldometers.info/img/flags/us-flag.gif",
        correct: true,
      },
      {
        answerId: 2,
        imgURL: "https://www.worldometers.info/img/flags/fr-flag.gif",
        correct: false,
      },
      {
        answerId: 3,
        imgURL: "https://www.worldometers.info/img/flags/ir-flag.gif",
        correct: false,
      },
      {
        answerId: 4,
        imgURL: "https://www.worldometers.info/img/flags/jm-flag.gif",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: "Which Of the following is the flag France?",
    options: [
      {
        answerId: 1,
        imgURL: "https://www.worldometers.info/img/flags/fr-flag.gif",
        correct: true,
      },
      {
        answerId: 2,
        imgURL: "https://www.worldometers.info/img/flags/lh-flag.gif",
        correct: false,
      },
      {
        answerId: 3,
        imgURL: "https://www.worldometers.info/img/flags/small/tn_lu-flag.gif",
        correct: false,
      },
      {
        answerId: 4,
        imgURL: "https://www.worldometers.info/img/flags/small/tn_ml-flag.gif",
        correct: false,
      },
    ],
  },
  {
    id: 4,
    question: "Which Of the following is the flag Singapore?",
    options: [
      {
        answerId: 1,
        imgURL: "https://www.worldometers.info/img/flags/sn-flag.gif",
        correct: true,
      },
      {
        answerId: 2,
        imgURL: "https://www.worldometers.info/img/flags/mx-flag.gif",
        correct: false,
      },
      {
        answerId: 3,
        imgURL: "https://www.worldometers.info/img/flags/small/tn_mz-flag.gif",
        correct: false,
      },
      {
        answerId: 4,
        imgURL: "https://www.worldometers.info/img/flags/fr-flag.gif",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question: "Which Of the following is the flag Germany?",
    options: [
      {
        answerId: 1,
        imgURL: "https://www.worldometers.info/img/flags/gm-flag.gif",
        correct: true,
      },
      {
        answerId: 2,
        imgURL: "https://www.worldometers.info/img/flags/small/tn_wa-flag.gif",
        correct: false,
      },
      {
        answerId: 3,
        imgURL: "https://www.worldometers.info/img/flags/small/tn_ng-flag.gif",
        correct: false,
      },
      {
        answerId: 4,
        imgURL: "https://www.worldometers.info/img/flags/small/tn_ni-flag.gif",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    question: "Which Of the following is the flag Argentina?",
    options: [
      {
        answerId: 1,
        imgURL: "https://www.worldometers.info/img/flags/ar-flag.gif",
        correct: true,
      },
      {
        answerId: 2,
        imgURL: "https://www.worldometers.info/img/flags/gm-flag.gif",
        correct: false,
      },
      {
        answerId: 3,
        imgURL: "https://www.worldometers.info/img/flags/small/tn_ni-flag.gif",
        correct: false,
      },
      {
        answerId: 4,
        imgURL: "https://www.worldometers.info/img/flags/mx-flag.gif",
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question: "Which Of the following is the flag Russia?",
    options: [
      {
        answerId: 1,
        imgURL: "https://www.worldometers.info/img/flags/rs-flag.gif",
        correct: true,
      },
      {
        answerId: 2,
        imgURL: "https://www.worldometers.info/img/flags/small/tn_mu-flag.gif",
        correct: false,
      },
      {
        answerId: 3,
        imgURL: "https://www.worldometers.info/img/flags/small/tn_pm-flag.gif",
        correct: false,
      },
      {
        answerId: 4,
        imgURL: "https://www.worldometers.info/img/flags/small/tn_pk-flag.gif",
        correct: false,
      },
    ],
  },
  {
    id: 8,
    question: "Which Of the following is the flag Cambodia?",
    options: [
      {
        answerId: 1,
        imgURL: "https://www.worldometers.info/img/flags/cb-flag.gif",
        correct: true,
      },
      {
        answerId: 2,
        imgURL: "https://www.worldometers.info/img/flags/small/tn_mu-flag.gif",
        correct: false,
      },
      {
        answerId: 3,
        imgURL: "https://www.worldometers.info/img/flags/small/tn_pm-flag.gif",
        correct: false,
      },
      {
        answerId: 4,
        imgURL: "https://www.worldometers.info/img/flags/rw-flag.gif",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question: "Which Of the following is the flag Canada?",
    options: [
      {
        answerId: 1,
        imgURL: "https://www.worldometers.info/img/flags/ca-flag.gif",
        correct: true,
      },
      {
        answerId: 2,
        imgURL: "https://www.worldometers.info/img/flags/small/tn_pm-flag.gif",
        correct: false,
      },
      {
        answerId: 3,
        imgURL: "https://www.worldometers.info/img/flags/small/tn_po-flag.gif",
        correct: false,
      },
      {
        answerId: 4,
        imgURL: "https://www.worldometers.info/img/flags/rw-flag.gif",
        correct: false,
      },
    ],
  },
  {
    id: 10,
    question: "Which Of the following is the flag Japan ?",
    options: [
      {
        answerId: 1,
        imgURL: "https://www.worldometers.info/img/flags/ja-flag.gif",
        correct: true,
      },
      {
        answerId: 2,
        imgURL: "https://www.worldometers.info/img/flags/small/tn_pm-flag.gif",
        correct: false,
      },
      {
        answerId: 3,
        imgURL: "https://www.worldometers.info/img/flags/small/tn_po-flag.gif",
        correct: false,
      },
      {
        answerId: 4,
        imgURL: "https://www.worldometers.info/img/flags/rw-flag.gif",
        correct: false,
      },
    ],
  },
  {
    id: 11,
    question: "Which Of the following is the flag South Africa ?",
    options: [
      {
        answerId: 1,
        imgURL: "https://www.worldometers.info/img/flags/small/tn_sf-flag.gif",
        correct: true,
      },
      {
        answerId: 2,
        imgURL: "https://www.worldometers.info/img/flags/small/tn_pm-flag.gif",
        correct: false,
      },
      {
        answerId: 3,
        imgURL: "https://www.worldometers.info/img/flags/small/tn_po-flag.gif",
        correct: false,
      },
      {
        answerId: 4,
        imgURL: "https://www.worldometers.info/img/flags/rw-flag.gif",
        correct: false,
      },
    ],
  },
  {
    id: 12,
    question: "Which Of the following is the flag South Korea ?",
    options: [
      {
        answerId: 1,
        imgURL: "https://www.worldometers.info/img/flags/ks-flag.gif",
        correct: true,
      },
      {
        answerId: 2,
        imgURL: "https://www.worldometers.info/img/flags/small/tn_po-flag.gif",
        correct: false,
      },
      {
        answerId: 3,
        imgURL: "https://www.worldometers.info/img/flags/rw-flag.gif",
        correct: false,
      },
      {
        answerId: 4,
        imgURL: "https://www.worldometers.info/img/flags/sc-flag.gif",
        correct: false,
      },
    ],
  },
  {
    id: 13,
    question: "Which Of the following is the flag Spain ?",
    options: [
      {
        answerId: 1,
        imgURL: "https://www.worldometers.info/img/flags/sp-flag.gif",
        correct: true,
      },
      {
        answerId: 2,
        imgURL: "https://www.worldometers.info/img/flags/small/tn_po-flag.gif",
        correct: false,
      },
      {
        answerId: 3,
        imgURL: "https://www.worldometers.info/img/flags/rw-flag.gif",
        correct: false,
      },
      {
        answerId: 4,
        imgURL: "https://www.worldometers.info/img/flags/sc-flag.gif",
        correct: false,
      },
    ],
  },
  {
    id: 14,
    question: "Which Of the following is the flag United Kingdom?",
    options: [
      {
        answerId: 1,
        imgURL: "https://www.worldometers.info/img/flags/uk-flag.gif",
        correct: true,
      },
      {
        answerId: 2,
        imgURL: "https://www.worldometers.info/img/flags/sl-flag.gif",
        correct: false,
      },
      {
        answerId: 3,
        imgURL: "https://www.worldometers.info/img/flags/ym-flag.gif",
        correct: false,
      },
      {
        answerId: 4,
        imgURL: "https://www.worldometers.info/img/flags/nz-flag.gif",
        correct: false,
      },
    ],
  },
  {
    id: 15,
    question: "Which Of the following is the flag Yemen ",
    options: [
      {
        answerId: 1,
        imgURL: "https://www.worldometers.info/img/flags/ym-flag.gif",
        correct: true,
      },
      {
        answerId: 2,
        imgURL: "https://www.worldometers.info/img/flags/uk-flag.gif",
        correct: false,
      },
      {
        answerId: 3,
        imgURL: "https://www.worldometers.info/img/flags/sl-flag.gif",
        correct: false,
      },
      {
        answerId: 4,
        imgURL: "https://www.worldometers.info/img/flags/nz-flag.gif",
        correct: false,
      },
    ],
  },
  {
    id: 16,
    question: "Which Of the following is the flag New Zealand? ",
    options: [
      {
        answerId: 1,
        imgURL: "https://www.worldometers.info/img/flags/nz-flag.gif",
        correct: true,
      },
      {
        answerId: 2,
        imgURL: "https://www.worldometers.info/img/flags/sz-flag.gif",
        correct: false,
      },
      {
        answerId: 3,
        imgURL: "https://www.worldometers.info/img/flags/as-flag.gif",
        correct: false,
      },
      {
        answerId: 4,
        imgURL: "https://www.worldometers.info/img/flags/palestine-flag.gif",
        correct: false,
      },
    ],
  },
  {
    id: 17,
    question: "Which Of the following is the flag Switzerland ?",
    options: [
      {
        answerId: 1,
        imgURL: "https://www.worldometers.info/img/flags/sz-flag.gif",
        correct: true,
      },
      {
        answerId: 2,
        imgURL: "https://www.worldometers.info/img/flags/as-flag.gif",
        correct: false,
      },
      {
        answerId: 3,
        imgURL: "https://www.worldometers.info/img/flags/nz-flag.gif",
        correct: false,
      },
      {
        answerId: 4,
        imgURL: "https://www.worldometers.info/img/flags/palestine-flag.gif",
        correct: false,
      },
    ],
  },
  {
    id: 18,
    question: "Which Of the following is the flag Australia ?",
    options: [
      {
        answerId: 1,
        imgURL: "https://www.worldometers.info/img/flags/as-flag.gif",
        correct: true,
      },
      {
        answerId: 2,
        imgURL: "https://www.worldometers.info/img/flags/nz-flag.gif",
        correct: false,
      },
      {
        answerId: 3,
        imgURL: "https://www.worldometers.info/img/flags/sz-flag.gif",
        correct: false,
      },
      {
        answerId: 4,
        imgURL: "https://www.worldometers.info/img/flags/palestine-flag.gif",
        correct: false,
      },
    ],
  },
  {
    id: 19,
    question: "Which Of the following is the flag State Of Palestine ?",
    options: [
      {
        answerId: 1,
        imgURL: "https://www.worldometers.info/img/flags/palestine-flag.gif",
        correct: true,
      },
      {
        answerId: 2,
        imgURL: "https://www.worldometers.info/img/flags/sz-flag.gif",
        correct: false,
      },
      {
        answerId: 3,
        imgURL: "https://www.worldometers.info/img/flags/as-flag.gif",
        correct: false,
      },
      {
        answerId: 4,
        imgURL: "https://www.worldometers.info/img/flags/nz-flag.gif",
        correct: false,
      },
    ],
  },
  {
    id: 20,
    question: "Which Of the following is the flag Sudan ?",
    options: [
      {
        answerId: 1,
        imgURL: "https://www.worldometers.info/img/flags/su-flag.gif",
        correct: true,
      },
      {
        answerId: 2,
        imgURL: "https://www.worldometers.info/img/flags/nz-flag.gif",
        correct: false,
      },
      {
        answerId: 3,
        imgURL: "https://www.worldometers.info/img/flags/as-flag.gif",
        correct: false,
      },
      {
        answerId: 4,
        imgURL: "https://www.worldometers.info/img/flags/sz-flag.gif",
        correct: false,
      },
    ],
  },
];
//let sampleQuestions = questions.options.sort(() => Math.random() - 0.5);

export default questions;
