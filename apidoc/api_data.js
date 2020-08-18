define({ "api": [
  {
    "type": "get",
    "url": "budget/",
    "title": "예산서 목록 보기",
    "name": "GetBudgetList",
    "version": "0.1.0",
    "group": "Budget",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "filename": "routes/budget.js",
    "groupTitle": "Budget"
  },
  {
    "type": "post",
    "url": "budget/:budgetSeq",
    "title": "예산서 수정",
    "group": "Budget",
    "name": "ModifyBudget",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "budgetSeq",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "exchangeTime",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "price",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "projectSeq",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientName",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/budget.js",
    "groupTitle": "Budget"
  },
  {
    "name": "예산서_등록",
    "type": "post",
    "url": "budget/",
    "title": "예산서 등록",
    "version": "0.1.0",
    "group": "Budget",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "exchangeTime",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "price",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "projectSeq",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clientName",
            "description": ""
          }
        ]
      }
    },
    "filename": "routes/budget.js",
    "groupTitle": "Budget"
  },
  {
    "type": "get",
    "url": "budget/:budgetSeq",
    "title": "예산서 목록 보기",
    "version": "0.1.0",
    "group": "Budget",
    "name": "예산서_목록보기",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "budgetSeq",
            "description": ""
          }
        ]
      }
    },
    "filename": "routes/budget.js",
    "groupTitle": "Budget"
  },
  {
    "type": "post",
    "url": "budget/:budgetSeq",
    "title": "예산서 삭제",
    "version": "0.1.0",
    "group": "Budget",
    "name": "예산서_삭제",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "budgetSeq",
            "description": ""
          }
        ]
      }
    },
    "filename": "routes/budget.js",
    "groupTitle": "Budget"
  },
  {
    "type": "post",
    "url": "charity/",
    "title": "후원단체 등록",
    "version": "0.1.0",
    "group": "Charity",
    "name": "후원단체_등록",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "charityName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "intro",
            "description": ""
          }
        ]
      }
    },
    "filename": "routes/charity.js",
    "groupTitle": "Charity"
  },
  {
    "type": "get",
    "url": "charity/",
    "title": "후원단체 목록 보기",
    "version": "0.1.0",
    "group": "Charity",
    "name": "후원단체_목록보기",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "filename": "routes/charity.js",
    "groupTitle": "Charity"
  },
  {
    "type": "post",
    "url": "charity/:userSeq",
    "title": "후원단체 삭제",
    "version": "0.1.0",
    "group": "Charity",
    "name": "후원단체_삭제",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "filename": "routes/charity.js",
    "groupTitle": "Charity"
  },
  {
    "type": "post",
    "url": "charity/:userSeq",
    "title": "후원단체 수정",
    "version": "0.1.0",
    "group": "Charity",
    "name": "후원단체_수정",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "charityName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "intro",
            "description": ""
          }
        ]
      }
    },
    "filename": "routes/charity.js",
    "groupTitle": "Charity"
  },
  {
    "type": "get",
    "url": "charity/:userSeq",
    "title": "후원단체 목록 보기",
    "version": "0.1.0",
    "group": "Charity",
    "name": "후원단체목록보기",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "budgetSeq",
            "description": ""
          }
        ]
      }
    },
    "filename": "routes/charity.js",
    "groupTitle": "Charity"
  },
  {
    "type": "post",
    "url": "donation_list/",
    "title": "기부 목록 등록",
    "version": "0.1.0",
    "group": "DonationList",
    "name": "기부_목록_등록",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "donationTime",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "coin",
            "description": ""
          }
        ]
      }
    },
    "filename": "routes/donation_list.js",
    "groupTitle": "DonationList"
  },
  {
    "type": "post",
    "url": "donation_list/:donationSeq",
    "title": "기부 목록 삭제",
    "version": "0.1.0",
    "group": "DonationList",
    "name": "기부_목록_삭제",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "donationSeq",
            "description": ""
          }
        ]
      }
    },
    "filename": "routes/donation_list.js",
    "groupTitle": "DonationList"
  },
  {
    "type": "post",
    "url": "donation_list/:donationSeq",
    "title": "기부 목록 수정",
    "version": "0.1.0",
    "group": "DonationList",
    "name": "기부_목록_수정",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "donationTime",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "coin",
            "description": ""
          }
        ]
      }
    },
    "filename": "routes/donation_list.js",
    "groupTitle": "DonationList"
  },
  {
    "type": "get",
    "url": "donation_list/:donationSeq",
    "title": "기부 목록 보기",
    "version": "0.1.0",
    "group": "DonationList",
    "name": "기부_목록보기",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "donationSeq",
            "description": ""
          }
        ]
      }
    },
    "filename": "routes/donation_list.js",
    "groupTitle": "DonationList"
  },
  {
    "type": "get",
    "url": "donation_list/",
    "title": "기부 목록 보기",
    "version": "0.1.0",
    "group": "DonationList",
    "name": "기부목록_보기",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "filename": "routes/donation_list.js",
    "groupTitle": "DonationList"
  },
  {
    "type": "post",
    "url": "donor/",
    "title": "기부자 등록",
    "version": "0.1.0",
    "group": "Donor",
    "name": "기부자_등록",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": ""
          }
        ]
      }
    },
    "filename": "routes/donor.js",
    "groupTitle": "Donor"
  },
  {
    "type": "get",
    "url": "donor/",
    "title": "기부자 목록 보기",
    "version": "0.1.0",
    "group": "Donor",
    "name": "기부자_목록_보기",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "filename": "routes/donor.js",
    "groupTitle": "Donor"
  },
  {
    "type": "get",
    "url": "donor/:userSeq",
    "title": "기부자 목록 보기",
    "version": "0.1.0",
    "group": "Donor",
    "name": "기부자_목록_보기",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "filename": "routes/donor.js",
    "groupTitle": "Donor"
  },
  {
    "type": "post",
    "url": "donor/:userSeq",
    "title": "기부자 삭제",
    "version": "0.1.0",
    "group": "Donor",
    "name": "기부자_삭제",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "filename": "routes/donor.js",
    "groupTitle": "Donor"
  },
  {
    "type": "post",
    "url": "donor/:userSeq",
    "title": "기부자 수정",
    "version": "0.1.0",
    "group": "Donor",
    "name": "기부자_수정",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": ""
          }
        ]
      }
    },
    "filename": "routes/donor.js",
    "groupTitle": "Donor"
  },
  {
    "type": "post",
    "url": "exchange_list/",
    "title": "환전 목록 등록",
    "version": "0.1.0",
    "group": "ExchangeList",
    "name": "환전_목록_등록",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "date",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "price",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": ""
          }
        ]
      }
    },
    "filename": "routes/exchange_list.js",
    "groupTitle": "ExchangeList"
  },
  {
    "type": "get",
    "url": "exchange_list/",
    "title": "환전 목록 보기",
    "version": "0.1.0",
    "group": "ExchangeList",
    "name": "환전_목록_보기",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "filename": "routes/exchange_list.js",
    "groupTitle": "ExchangeList"
  },
  {
    "type": "get",
    "url": "exchange_list/:userSeq",
    "title": "환전 목록 보기",
    "version": "0.1.0",
    "group": "ExchangeList",
    "name": "환전_목록_보기",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "filename": "routes/exchange_list.js",
    "groupTitle": "ExchangeList"
  },
  {
    "type": "post",
    "url": "exchange_list/:userSeq",
    "title": "환전 목록 삭제",
    "version": "0.1.0",
    "group": "ExchangeList",
    "name": "환전_목록_삭제",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "filename": "routes/exchange_list.js",
    "groupTitle": "ExchangeList"
  },
  {
    "type": "post",
    "url": "exchange_list/:userSeq",
    "title": "환전 목록 수정",
    "version": "0.1.0",
    "group": "ExchangeList",
    "name": "환전_목록_수정",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "date",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "price",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": ""
          }
        ]
      }
    },
    "filename": "routes/exchange_list.js",
    "groupTitle": "ExchangeList"
  },
  {
    "type": "post",
    "url": "notice/",
    "title": "공지사항 등록",
    "version": "0.1.0",
    "group": "Notice",
    "name": "공지사항_등록",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "isImportance",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "views",
            "description": ""
          }
        ]
      }
    },
    "filename": "routes/notice.js",
    "groupTitle": "Notice"
  },
  {
    "type": "get",
    "url": "notice/",
    "title": "공지사항 목록 보기",
    "version": "0.1.0",
    "group": "Notice",
    "name": "공지사항_목록_보기",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "filename": "routes/notice.js",
    "groupTitle": "Notice"
  },
  {
    "type": "get",
    "url": "notice/:noticeSeq",
    "title": "공지사항 목록 보기",
    "version": "0.1.0",
    "group": "Notice",
    "name": "공지사항_목록_보기",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "noticeSeq",
            "description": ""
          }
        ]
      }
    },
    "filename": "routes/notice.js",
    "groupTitle": "Notice"
  },
  {
    "type": "post",
    "url": "notice/:noticeSeq",
    "title": "공지사항 삭제",
    "version": "0.1.0",
    "group": "Notice",
    "name": "공지사항_삭제",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "noticeSeq",
            "description": ""
          }
        ]
      }
    },
    "filename": "routes/notice.js",
    "groupTitle": "Notice"
  },
  {
    "type": "post",
    "url": "notice/:noticeSeq",
    "title": "공지사항 수정",
    "version": "0.1.0",
    "group": "Notice",
    "name": "공지사항_수정",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "noticeSeq",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "isImportance",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "views",
            "description": ""
          }
        ]
      }
    },
    "filename": "routes/notice.js",
    "groupTitle": "Notice"
  },
  {
    "type": "post",
    "url": "project/",
    "title": "프로젝트 등록",
    "version": "0.1.0",
    "group": "Project",
    "name": "프로젝트_등록",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projectCategory",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "charityName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "updateTime",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "views",
            "description": ""
          }
        ]
      }
    },
    "filename": "routes/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "project/",
    "title": "프로젝트 목록 보기",
    "version": "0.1.0",
    "group": "Project",
    "name": "프로젝트_목록보기",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "filename": "routes/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "project/:projectSeq",
    "title": "프로젝트 목록 보기",
    "version": "0.1.0",
    "group": "Project",
    "name": "프로젝트_목록보기",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "projectSeq",
            "description": ""
          }
        ]
      }
    },
    "filename": "routes/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "post",
    "url": "project/:projectSeq",
    "title": "프로젝트 삭제",
    "version": "0.1.0",
    "group": "Project",
    "name": "프로젝트_삭제",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "projectSeq",
            "description": ""
          }
        ]
      }
    },
    "filename": "routes/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "post",
    "url": "project/:projectSeq",
    "title": "프로젝트 수정",
    "version": "0.1.0",
    "group": "Project",
    "name": "프로젝트_수정",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "projectSeq",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projectCategory",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "charityName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "updateTime",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "views",
            "description": ""
          }
        ]
      }
    },
    "filename": "routes/project.js",
    "groupTitle": "Project"
  },
  {
    "type": "post",
    "url": "search_history/",
    "title": "검색기록 등록",
    "version": "0.1.0",
    "group": "SearchHistory",
    "name": "검색기록_등록",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "searchContent",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "searchTime",
            "description": ""
          }
        ]
      }
    },
    "filename": "routes/search_history.js",
    "groupTitle": "SearchHistory"
  },
  {
    "type": "get",
    "url": "search_history/",
    "title": "검색기록 목록 보기",
    "version": "0.1.0",
    "group": "SearchHistory",
    "name": "검색기록_목록보기",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "filename": "routes/search_history.js",
    "groupTitle": "SearchHistory"
  },
  {
    "type": "get",
    "url": "search_history/:userSeq",
    "title": "검색기록 목록 보기",
    "version": "0.1.0",
    "group": "SearchHistory",
    "name": "검색기록_목록보기",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "filename": "routes/search_history.js",
    "groupTitle": "SearchHistory"
  },
  {
    "type": "post",
    "url": "search_history/:userSeq",
    "title": "검색기록 삭제",
    "version": "0.1.0",
    "group": "SearchHistory",
    "name": "검색기록_삭제",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "filename": "routes/search_history.js",
    "groupTitle": "SearchHistory"
  },
  {
    "type": "post",
    "url": "search_history/:userSeq",
    "title": "검색기록 수정",
    "version": "0.1.0",
    "group": "SearchHistory",
    "name": "검색기록_수정",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users Login Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "searchContent",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "searchTime",
            "description": ""
          }
        ]
      }
    },
    "filename": "routes/search_history.js",
    "groupTitle": "SearchHistory"
  }
] });
