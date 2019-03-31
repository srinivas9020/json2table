import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {
  public convertedJson = null;
  public tileList = [];
  constructor() { }

  ngOnInit() {
    this.convertedJson = {
      "rss": {
        "channel": {
          "title": "TAJ (Jira)",
          "link": "https://jira.devnet.klm.com/issues/?filter=50423",
          "description": "",
          "language": "en-us",
          "issue": {
            "_start": "0",
            "_end": "18",
            "_total": "18"
          },
          "build-info": {
            "version": "7.12.3",
            "build-number": "712004",
            "build-date": "12-10-2018"
          },
          "item": [
            {
              "title": "[PREPANC-44] [BW]  AF ATreeForYou on the booking tool",
              "link": "https://jira.devnet.klm.com/browse/PREPANC-44",
              "project": {
                "_id": "26267",
                "_key": "PREPANC",
                "__text": "PREPANC"
              },
              "description": {
                "p": [
                  {
                    "b": {
                      "ins": "USER STORY",
                      "__text": ":"
                    }
                  },
                  {
                    "b": "As",
                    "__text": "a passenger visiting AF.com"
                  },
                  {
                    "b": "I want to",
                    "__text": "have the option to do donation for a Tree plantation during my booking per passenger"
                  },
                  {
                    "b": "In order",
                    "__text": "to contribute to a better planet"
                  },
                  "",
                  {
                    "b": {
                      "ins": "ACCEPTANCE CRITERIA",
                      "__text": ":"
                    }
                  },
                  "",
                  {
                    "b": "WHAT"
                  },
                  {
                    "b": [
                      {
                        "img": {
                          "_class": "emoticon",
                          "_src": "https://jira.devnet.klm.com/images/icons/emoticons/add.png",
                          "_height": "16",
                          "_width": "16",
                          "_align": "absmiddle",
                          "_alt": "",
                          "_border": "0"
                        }
                      },
                      "a donation to the planet",
                      {
                        "img": {
                          "_class": "emoticon",
                          "_src": "https://jira.devnet.klm.com/images/icons/emoticons/add.png",
                          "_height": "16",
                          "_width": "16",
                          "_align": "absmiddle",
                          "_alt": "",
                          "_border": "0"
                        }
                      }
                    ],
                    "__text": "Propose to Air France's customers \n through tree planting / forest protection directly as a paid option in the booking / MMB flow. \n It will then be necessary to provide a data flow to transfer the funds collected to \"A tree for you\" in case of non anonymous donation"
                  },
                  "",
                  {
                    "img": {
                      "_class": "emoticon",
                      "_src": "https://jira.devnet.klm.com/images/icons/emoticons/add.png",
                      "_height": "16",
                      "_width": "16",
                      "_align": "absmiddle",
                      "_alt": "",
                      "_border": "0"
                    },
                    "b": "Scope"
                  },
                  "",
                  {
                    "b": "STAKEHOLDERS"
                  },
                  {
                    "a": {
                      "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=M336234",
                      "_class": "user-hover",
                      "_rel": "M336234",
                      "__text": "Guennegues, Valerie (PSWB AV) - AF"
                    }
                  },
                  {
                    "a": {
                      "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=M341463",
                      "_class": "user-hover",
                      "_rel": "M341463",
                      "__text": "Martinez, Alexandre (PSWB AV) - AF"
                    }
                  },
                  ""
                ],
                "ul": {
                  "li": [
                    "Flexible price with default value at 1 euro",
                    "picture (ex: lanscape)",
                    "Logo (ATreeForYou by Airfrance)",
                    "Currency of the booking",
                    "Text Zone 1 (for product purpose description)",
                    "Text zone 2 (for project exemple)",
                    "Text zone 3",
                    "Text zone 4",
                    "Link1 toward More information",
                    "Link2 toward more information",
                    "Following data collection :"
                  ]
                },
                "ol": [
                  {
                    "li": [
                      "Gender",
                      "Last name",
                      "First name",
                      "email address",
                      "Language",
                      "Donation amount",
                      "Paiement date"
                    ]
                  },
                  {
                    "li": "Booking flow"
                  }
                ]
              },
              "environment": "",
              "key": {
                "_id": "870888",
                "__text": "PREPANC-44"
              },
              "summary": "[BW] AF ATreeForYou on the booking tool",
              "type": {
                "_id": "2",
                "_iconUrl": "https://jira.devnet.klm.com/secure/viewavatar?size=xsmallavatarId=13921avatarType=issuetype",
                "__text": "New Feature"
              },
              "priority": {
                "_id": "3",
                "_iconUrl": "https://jira.devnet.klm.com/images/icons/priorities/major.svg",
                "__text": "Major"
              },
              "status": {
                "_id": "5",
                "_iconUrl": "https://jira.devnet.klm.com/images/icons/statuses/resolved.png",
                "_description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
                "__text": "Resolved"
              },
              "statusCategory": {
                "_id": "3",
                "_key": "done",
                "_colorName": "green"
              },
              "resolution": {
                "_id": "6",
                "__text": "Done"
              },
              "assignee": {
                "_username": "M417297",
                "__text": "Lemert, Margot (AMSSE) - AF"
              },
              "reporter": {
                "_username": "x078782",
                "__text": "Chauderon, Arnaud (PCBN) - KLM"
              },
              "labels": {
                "label": [
                  "sprint10.1",
                  "sprint10.2",
                  "sprint9.1",
                  "sprint9.2",
                  "sprint9.4",
                  "sprint9.5",
                  "sprint9.6"
                ]
              },
              "created": "Tue, 1 May 2018 16:28:35 +0200",
              "updated": "Tue, 22 Jan 2019 10:47:16 +0100",
              "resolved": "Tue, 15 Jan 2019 11:07:58 +0100",
              "fixVersion": [
                "PI9",
                "PI10"
              ],
              "component": [
                "Ancillary Offer",
                "Blueweb Ancillaries",
                "CASA",
                "Order API",
                "Reservation API"
              ],
              "due": "",
              "votes": "0",
              "watches": "5",
              "comments": {
                "comment": [
                  {
                    "p": {
                      "a": {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=M336234",
                        "_class": "user-hover",
                        "_rel": "M336234",
                        "__text": "Guennegues, Valerie (PSWB AV) - AF"
                      },
                      "__text": "for your info"
                    },
                    "_id": "1741936",
                    "_author": "m417297",
                    "_created": "Fri, 17 Aug 2018 15:02:37 +0200"
                  },
                  {
                    "p": [
                      {
                        "em": "Comment from the Deleted SALES feature:",
                        "br": "",
                        "__text": "Chauderon, Arnaud (PCBN) - KLM added a comment - Yesterday"
                      },
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm10119",
                          "_class": "user-hover",
                          "_rel": "klm10119",
                          "__text": "Hamdouni, Thami (PSIM CM) - KLM"
                        },
                        "br": "",
                        "__text": "Can you link CRMPush user story to this feature ?"
                      },
                      "Thx"
                    ],
                    "_id": "1797226",
                    "_author": "klm47358",
                    "_created": "Thu, 20 Sep 2018 13:38:36 +0200"
                  },
                  {
                    "p": [
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x078782",
                          "_class": "user-hover",
                          "_rel": "x078782",
                          "__text": "Chauderon, Arnaud (PCBN) - KLM"
                        },
                        "img": {
                          "_class": "emoticon",
                          "_src": "https://jira.devnet.klm.com/images/icons/emoticons/smile.png",
                          "_height": "16",
                          "_width": "16",
                          "_align": "absmiddle",
                          "_alt": "",
                          "_border": "0"
                        },
                        "__text": "Hi \n, good news, we have added this US to the scope for PI9 as an extra US! \n So hopefully we will be able to deliver the RSA part as well this PI."
                      },
                      {
                        "a": [
                          {
                            "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm39616",
                            "_class": "user-hover",
                            "_rel": "klm39616",
                            "__text": "Knegt, Arjan de (ITCDEC) - KLM"
                          },
                          {
                            "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm27506",
                            "_class": "user-hover",
                            "_rel": "klm27506",
                            "__text": "Neijenhuizen, Pim (AMSSZ) - KLM"
                          }
                        ],
                        "__text": "CC \n,"
                      }
                    ],
                    "_id": "1885215",
                    "_author": "klm84429",
                    "_created": "Tue, 6 Nov 2018 16:23:21 +0100"
                  },
                  {
                    "p": "Great news",
                    "_id": "1898259",
                    "_author": "x078782",
                    "_created": "Tue, 13 Nov 2018 11:32:08 +0100"
                  },
                  {
                    "p": "Feature Reopen : issue, the amount requested for payment is not the amount of the donation",
                    "_id": "1999517",
                    "_author": "x078782",
                    "_created": "Mon, 14 Jan 2019 15:01:15 +0100"
                  }
                ]
              },
              "issuelinks": {
                "issuelinktype": [
                  {
                    "name": "Child-Issue",
                    "outwardlinks": {
                      "issuelink": [
                        {
                          "issuekey": {
                            "_id": "1007809",
                            "__text": "BWA-1217"
                          }
                        },
                        {
                          "issuekey": {
                            "_id": "1007814",
                            "__text": "BWA-1218"
                          }
                        },
                        {
                          "issuekey": {
                            "_id": "1007817",
                            "__text": "BWA-1220"
                          }
                        },
                        {
                          "issuekey": {
                            "_id": "1007819",
                            "__text": "BWA-1221"
                          }
                        },
                        {
                          "issuekey": {
                            "_id": "1016623",
                            "__text": "BWA-1373"
                          }
                        },
                        {
                          "issuekey": {
                            "_id": "930094",
                            "__text": "CHKOUT-11362"
                          }
                        },
                        {
                          "issuekey": {
                            "_id": "1006920",
                            "__text": "RSA-2831"
                          }
                        }
                      ],
                      "_description": "is parent task of"
                    },
                    "inwardlinks": {
                      "issuelink": {
                        "issuekey": {
                          "_id": "809328",
                          "__text": "DIGITAL-1389"
                        }
                      },
                      "_description": "is child task of"
                    },
                    "_id": "10040"
                  },
                  {
                    "name": "Depend",
                    "outwardlinks": {
                      "issuelink": [
                        {
                          "issuekey": {
                            "_id": "988398",
                            "__text": "CASA-4605"
                          }
                        },
                        {
                          "issuekey": {
                            "_id": "1008955",
                            "__text": "PRDS-7639"
                          }
                        },
                        {
                          "issuekey": {
                            "_id": "1008956",
                            "__text": "PRDS-7640"
                          }
                        }
                      ],
                      "_description": "depends on"
                    },
                    "_id": "10020"
                  }
                ]
              },
              "attachments": {
                "attachment": [
                  {
                    "_id": "604592",
                    "_name": "Content proposal for AF A Tree For You 1.1.pptx",
                    "_size": "731940",
                    "_author": "x078782",
                    "_created": "Fri, 7 Sep 2018 14:30:36 +0200"
                  },
                  {
                    "_id": "627070",
                    "_name": "Logo-TripAndTree-carre-vert.pdf",
                    "_size": "212244",
                    "_author": "x078782",
                    "_created": "Thu, 11 Oct 2018 15:02:26 +0200"
                  },
                  {
                    "_id": "627069",
                    "_name": "Logo-TripAndTree-carre-vert.png",
                    "_size": "59388",
                    "_author": "x078782",
                    "_created": "Thu, 11 Oct 2018 15:02:26 +0200"
                  }
                ]
              },
              "subtasks": "",
              "customfields": {
                "customfield": [
                  {
                    "customfieldname": "Approvals",
                    "customfieldvalues": "",
                    "_id": "customfield_12550",
                    "_key": "com.atlassian.servicedesk.approvals-plugin:sd-approvals"
                  },
                  {
                    "customfieldname": "Business Value",
                    "customfieldvalues": {
                      "customfieldvalue": "93.0"
                    },
                    "_id": "customfield_10083",
                    "_key": "com.atlassian.jira.plugin.system.customfieldtypes:float"
                  },
                  {
                    "customfieldname": "Date of First Response",
                    "customfieldvalues": {
                      "customfieldvalue": "Fri, 17 Aug 2018 15:02:37 +0200"
                    },
                    "_id": "customfield_10041",
                    "_key": "com.atlassian.jira.ext.charting:firstresponsedate"
                  },
                  {
                    "customfieldname": "Development",
                    "customfieldvalues": "",
                    "_id": "customfield_14350",
                    "_key": "com.atlassian.jira.plugins.jira-development-integration-plugin:devsummary"
                  },
                  {
                    "customfieldname": "Epic Link",
                    "customfieldvalues": {
                      "customfieldvalue": "DIGITAL-1389"
                    },
                    "_id": "customfield_10750",
                    "_key": "com.pyxis.greenhopper.jira:gh-epic-link"
                  },
                  {
                    "customfieldname": "Global Rank",
                    "customfieldvalues": {
                      "customfieldvalue": "1|i31run:"
                    },
                    "_id": "customfield_11051",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Global Rank (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10150",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Job size",
                    "customfieldvalues": {
                      "customfieldvalue": "2.0"
                    },
                    "_id": "customfield_12152",
                    "_key": "com.atlassian.jira.plugin.system.customfieldtypes:float"
                  },
                  {
                    "customfieldname": "Participants",
                    "customfieldvalues": {
                      "customfieldvalue": [
                        "x078782",
                        "klm84429",
                        "klm47358",
                        "M417297"
                      ]
                    },
                    "_id": "customfield_10020",
                    "_key": "com.atlassian.jira.toolkit:participants"
                  },
                  {
                    "customfieldname": "RROE",
                    "customfieldvalues": {
                      "customfieldvalue": "5.0"
                    },
                    "_id": "customfield_12153",
                    "_key": "com.atlassian.jira.plugin.system.customfieldtypes:float"
                  },
                  {
                    "customfieldname": "Rank",
                    "customfieldvalues": {
                      "customfieldvalue": "1|hzxs3r:"
                    },
                    "_id": "customfield_11050",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Rank (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10552",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Ranking",
                    "customfieldvalues": {
                      "customfieldvalue": "1|i31nkf:"
                    },
                    "_id": "customfield_11052",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Ranking (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10553",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Time Criticality",
                    "customfieldvalues": {
                      "customfieldvalue": "40.0"
                    },
                    "_id": "customfield_12154",
                    "_key": "com.atlassian.jira.plugin.system.customfieldtypes:float"
                  },
                  {
                    "customfieldname": "Time in Status",
                    "customfieldvalues": "",
                    "_id": "customfield_10042",
                    "_key": "com.atlassian.jira.ext.charting:timeinstatus"
                  },
                  {
                    "customfieldname": "WSJF",
                    "customfieldvalues": {
                      "customfieldvalue": "69.0"
                    },
                    "_id": "customfield_12160",
                    "_key": "com.innovalog.jmcf.jira-misc-custom-fields:calculated-number-field"
                  }
                ]
              }
            },
            {
              "title": "[PREPANC-152] Insurance requirements for specific markets in converged process",
              "link": "https://jira.devnet.klm.com/browse/PREPANC-152",
              "project": {
                "_id": "26267",
                "_key": "PREPANC",
                "__text": "PREPANC"
              },
              "description": {
                "p": [
                  "Some markets require specific developments before we can offer insurance in the converged booking flow.",
                  {
                    "b": "Requirements"
                  }
                ],
                "ul": {
                  "li": [
                    {
                      "ul": {
                        "li": [
                          "POS: IT",
                          "Legal requirement to ask pax to enter his fiscal code",
                          "Fiscal code needs to be asked as part of the offer, only when passenger selected the insurance product (see current behaviour on AF B2C)",
                          "Fiscal code does not need to be inserted in PNR",
                          "Fiscal code needs to be sent to Allianz (when subscribing?)"
                        ]
                      },
                      "__text": "Fiscal code"
                    },
                    {
                      "ul": {
                        "li": [
                          "POS: Nordics",
                          "DOB determines ADT, CHD or INF and hence the price",
                          "A fake DOB could be used. How to get DOB to CASA so CASA can use it when requesting offer at Allianz? -- gt; via Resource Store? Can CASA read the PNR to retrieve this data?"
                        ]
                      },
                      "__text": "Different pricing for Adult, Child and Infant"
                    },
                    {
                      "ul": {
                        "li": [
                          "POS: US/CA",
                          "Taxes could be different per state, hence the state is needed",
                          {
                            "ul": {
                              "li": [
                                "Do we want to ask all US/CA pax for the state info (knowing that only less than 10% will buy insurance)? Does this have impact on conversion?",
                                "What about other flows than BW, where the insurance offer could be before the ID page?"
                              ]
                            },
                            "__text": "'State' field should be asked before requesting the offer, hence it should be on the page"
                          }
                        ]
                      },
                      "__text": "State"
                    }
                  ]
                }
              },
              "environment": "",
              "key": {
                "_id": "1012371",
                "__text": "PREPANC-152"
              },
              "summary": "Insurance requirements for specific markets in converged process",
              "type": {
                "_id": "2",
                "_iconUrl": "https://jira.devnet.klm.com/secure/viewavatar?size=xsmall avatarId=13921 avatarType=issuetype",
                "__text": "New Feature"
              },
              "priority": {
                "_id": "3",
                "_iconUrl": "https://jira.devnet.klm.com/images/icons/priorities/major.svg",
                "__text": "Major"
              },
              "status": {
                "_id": "5",
                "_iconUrl": "https://jira.devnet.klm.com/images/icons/statuses/resolved.png",
                "_description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
                "__text": "Resolved"
              },
              "statusCategory": {
                "_id": "3",
                "_key": "done",
                "_colorName": "green"
              },
              "resolution": {
                "_id": "6",
                "__text": "Done"
              },
              "assignee": {
                "_username": "x078782",
                "__text": "Chauderon, Arnaud (PCBN) - KLM"
              },
              "reporter": {
                "_username": "x078782",
                "__text": "Chauderon, Arnaud (PCBN) - KLM"
              },
              "labels": {
                "label": [
                  "ANCILLARIES",
                  "sprint10.2",
                  "sprint10.3",
                  "sprint10.4"
                ]
              },
              "created": "Fri, 14 Sep 2018 15:40:08 +0200",
              "updated": "Fri, 8 Feb 2019 10:55:13 +0100",
              "resolved": "Fri, 8 Feb 2019 10:55:13 +0100",
              "fixVersion": "PI10",
              "component": [
                "Ancillary Offer",
                "Order API"
              ],
              "due": "",
              "votes": "0",
              "watches": "1",
              "issuelinks": {
                "issuelinktype": [
                  {
                    "name": "Child-Issue",
                    "outwardlinks": {
                      "issuelink": [
                        {
                          "issuekey": {
                            "_id": "1117785",
                            "__text": "PRDS-8038"
                          }
                        },
                        {
                          "issuekey": {
                            "_id": "1117789",
                            "__text": "PRDS-8039"
                          }
                        },
                        {
                          "issuekey": {
                            "_id": "1117791",
                            "__text": "PRDS-8040"
                          }
                        }
                      ],
                      "_description": "is parent task of"
                    },
                    "inwardlinks": {
                      "issuelink": {
                        "issuekey": {
                          "_id": "684422",
                          "__text": "DIGITAL-1107"
                        }
                      },
                      "_description": "is child task of"
                    },
                    "_id": "10040"
                  },
                  {
                    "name": "Epic",
                    "outwardlinks": {
                      "issuelink": {
                        "issuekey": {
                          "_id": "876080",
                          "__text": "SALES-766"
                        }
                      },
                      "_description": "relates to"
                    },
                    "_id": "10340"
                  },
                  {
                    "name": "Related",
                    "inwardlinks": {
                      "issuelink": {
                        "issuekey": {
                          "_id": "1120656",
                          "__text": "CHKOUT-12756"
                        }
                      },
                      "_description": "relates to"
                    },
                    "_id": "10031"
                  }
                ]
              },
              "attachments": "",
              "subtasks": "",
              "customfields": {
                "customfield": [
                  {
                    "customfieldname": "Approvals",
                    "customfieldvalues": "",
                    "_id": "customfield_12550",
                    "_key": "com.atlassian.servicedesk.approvals-plugin:sd-approvals"
                  },
                  {
                    "customfieldname": "Development",
                    "customfieldvalues": "",
                    "_id": "customfield_14350",
                    "_key": "com.atlassian.jira.plugins.jira-development-integration-plugin:devsummary"
                  },
                  {
                    "customfieldname": "Global Rank",
                    "customfieldvalues": {
                      "customfieldvalue": "1|i3pqdr:"
                    },
                    "_id": "customfield_11051",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Global Rank (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10150",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Participants",
                    "customfieldvalues": {
                      "customfieldvalue": "x078782"
                    },
                    "_id": "customfield_10020",
                    "_key": "com.atlassian.jira.toolkit:participants"
                  },
                  {
                    "customfieldname": "Rank",
                    "customfieldvalues": {
                      "customfieldvalue": "1|hwhmr0:"
                    },
                    "_id": "customfield_11050",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Rank (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10552",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Ranking",
                    "customfieldvalues": {
                      "customfieldvalue": "1|i3pm33:"
                    },
                    "_id": "customfield_11052",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Ranking (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10553",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Time in Status",
                    "customfieldvalues": "",
                    "_id": "customfield_10042",
                    "_key": "com.atlassian.jira.ext.charting:timeinstatus"
                  }
                ]
              }
            },
            {
              "title": "[PREPANC-264] [SEAT MAP] : Business class Middle block seats",
              "link": "https://jira.devnet.klm.com/browse/PREPANC-264",
              "project": {
                "_id": "26267",
                "_key": "PREPANC",
                "__text": "PREPANC"
              },
              "description": "",
              "environment": "",
              "key": {
                "_id": "1042633",
                "__text": "PREPANC-264"
              },
              "summary": "[SEAT MAP] : Business class Middle block seats",
              "type": {
                "_id": "2",
                "_iconUrl": "https://jira.devnet.klm.com/secure/viewavatar?size=xsmall avatarId=13921 avatarType=issuetype",
                "__text": "New Feature"
              },
              "priority": {
                "_id": "3",
                "_iconUrl": "https://jira.devnet.klm.com/images/icons/priorities/major.svg",
                "__text": "Major"
              },
              "status": {
                "_id": "5",
                "_iconUrl": "https://jira.devnet.klm.com/images/icons/statuses/resolved.png",
                "_description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
                "__text": "Resolved"
              },
              "statusCategory": {
                "_id": "3",
                "_key": "done",
                "_colorName": "green"
              },
              "resolution": {
                "_id": "6",
                "__text": "Done"
              },
              "assignee": {
                "_username": "x078782",
                "__text": "Chauderon, Arnaud (PCBN) - KLM"
              },
              "reporter": {
                "_username": "x078782",
                "__text": "Chauderon, Arnaud (PCBN) - KLM"
              },
              "labels": {
                "label": [
                  "sprint10.2",
                  "sprint10.3"
                ]
              },
              "created": "Thu, 11 Oct 2018 10:00:20 +0200",
              "updated": "Fri, 15 Feb 2019 15:25:08 +0100",
              "resolved": "Tue, 29 Jan 2019 13:47:39 +0100",
              "fixVersion": "PI10",
              "component": [
                "Ancillary Offer",
                "CASA"
              ],
              "due": "",
              "votes": "0",
              "watches": "1",
              "comments": {
                "comment": [
                  {
                    "p": [
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm62684",
                          "_class": "user-hover",
                          "_rel": "klm62684",
                          "__text": "Klein Douwel, Daan (AMSSZ) - KLM"
                        }
                      },
                      "",
                      "Hi Daan, buisness class middle seat has been fixed and delivered in test, can you check and let me know if it works as expected on Kiosk",
                      "",
                      "Thanks"
                    ],
                    "_id": "2052602",
                    "_author": "x078782",
                    "_created": "Fri, 8 Feb 2019 11:03:17 +0100"
                  },
                  {
                    "p": {
                      "a": {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x078782",
                        "_class": "user-hover",
                        "_rel": "x078782",
                        "__text": "Chauderon, Arnaud (PCBN) - KLM"
                      },
                      "__text": "Hi \n, we're finalizing testing, but results look good. Expect it will already be reflected in our demo that is shown this monday."
                    },
                    "_id": "2053507",
                    "_author": "klm62684",
                    "_created": "Fri, 8 Feb 2019 14:34:17 +0100"
                  }
                ]
              },
              "issuelinks": {
                "issuelinktype": [
                  {
                    "name": "Child-Issue",
                    "outwardlinks": {
                      "issuelink": [
                        {
                          "issuekey": {
                            "_id": "940436",
                            "__text": "CASA-4467"
                          }
                        },
                        {
                          "issuekey": {
                            "_id": "947096",
                            "__text": "CHECKIN-4604"
                          }
                        },
                        {
                          "issuekey": {
                            "_id": "934246",
                            "__text": "PRDS-7359"
                          }
                        }
                      ],
                      "_description": "is parent task of"
                    },
                    "inwardlinks": {
                      "issuelink": {
                        "issuekey": {
                          "_id": "1082024",
                          "__text": "DIGITAL-1993"
                        }
                      },
                      "_description": "is child task of"
                    },
                    "_id": "10040"
                  },
                  {
                    "name": "Related",
                    "inwardlinks": {
                      "issuelink": {
                        "issuekey": {
                          "_id": "1026371",
                          "__text": "BWA-1410"
                        }
                      },
                      "_description": "relates to"
                    },
                    "_id": "10031"
                  }
                ]
              },
              "attachments": "",
              "subtasks": "",
              "customfields": {
                "customfield": [
                  {
                    "customfieldname": "Approvals",
                    "customfieldvalues": "",
                    "_id": "customfield_12550",
                    "_key": "com.atlassian.servicedesk.approvals-plugin:sd-approvals"
                  },
                  {
                    "customfieldname": "Date of First Response",
                    "customfieldvalues": {
                      "customfieldvalue": "Fri, 8 Feb 2019 14:34:17 +0100"
                    },
                    "_id": "customfield_10041",
                    "_key": "com.atlassian.jira.ext.charting:firstresponsedate"
                  },
                  {
                    "customfieldname": "Development",
                    "customfieldvalues": "",
                    "_id": "customfield_14350",
                    "_key": "com.atlassian.jira.plugins.jira-development-integration-plugin:devsummary"
                  },
                  {
                    "customfieldname": "Global Rank",
                    "customfieldvalues": {
                      "customfieldvalue": "1|i3uw6v:"
                    },
                    "_id": "customfield_11051",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Global Rank (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10150",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Participants",
                    "customfieldvalues": {
                      "customfieldvalue": [
                        "x078782",
                        "klm62684"
                      ]
                    },
                    "_id": "customfield_10020",
                    "_key": "com.atlassian.jira.toolkit:participants"
                  },
                  {
                    "customfieldname": "Rank",
                    "customfieldvalues": {
                      "customfieldvalue": "1|zz1zxg:"
                    },
                    "_id": "customfield_11050",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Rank (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10552",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Ranking",
                    "customfieldvalues": {
                      "customfieldvalue": "1|i3usaf:"
                    },
                    "_id": "customfield_11052",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Ranking (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10553",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Time in Status",
                    "customfieldvalues": "",
                    "_id": "customfield_10042",
                    "_key": "com.atlassian.jira.ext.charting:timeinstatus"
                  }
                ]
              }
            },
            {
              "title": "[PREPANC-285] New seat remarks",
              "link": "https://jira.devnet.klm.com/browse/PREPANC-285",
              "project": {
                "_id": "26267",
                "_key": "PREPANC",
                "__text": "PREPANC"
              },
              "description": {
                "p": [
                  {
                    "b": "General explanation feature",
                    "br": [
                      "",
                      "",
                      ""
                    ],
                    "__text": "This feature is to include additional remarks on the AF and KL seatmap, configured in CASA.\n In CASA there is the possibility to map seatmap remarks (example: limited recline) to specific seats of aircraft type per operating carrier.\n Today we have 6 remarks for KL seatmaps. The request is to include 6 more remarks for both AF and KL aircrafts."
                  },
                  "The idea is that CASA receives the codes and the characteristics from Amadeus, for instance the code",
                  "E : Exit Row and seats 30HJ is sent to CASA. Casa will add a desription to this code and uses the information for the seatmap.",
                  "The change between the new and the old set-up is that CASA will only perform a mapping from the codes received from Amadeus.",
                  "CASA will only \"enrich\" the data from Amadeus with a description.",
                  "A shirt period of time current solution will be kept active on the background.",
                  "",
                  {
                    "b": "Impacted teams:",
                    "br": "",
                    "__text": "CASA, BLUEWEB, PRODUCTSHOP,KIOSK,MOBILE AF,MOBILE KL"
                  },
                  {
                    "b": "Dependencies",
                    "br": "",
                    "__text": "Content (trideon)"
                  },
                  {
                    "b": "Requirements and user stories:"
                  },
                  {
                    "a": {
                      "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm84235",
                      "_class": "user-hover",
                      "_rel": "klm84235",
                      "__text": "Langefeld, Linde (AMSSZ) - KLM"
                    },
                    "br": "",
                    "__text": "Feature owner: \n Solution owner: tbd"
                  }
                ],
                "div": {
                  "table": {
                    "tbody": {
                      "tr": [
                        {
                          "th": [
                            {
                              "_class": "confluenceTh",
                              "__text": "Team"
                            },
                            {
                              "_class": "confluenceTh",
                              "__text": "Productowner"
                            },
                            {
                              "_class": "confluenceTh",
                              "__text": "Requirement"
                            },
                            {
                              "_class": "confluenceTh",
                              "__text": "User story link"
                            }
                          ]
                        },
                        {
                          "td": [
                            {
                              "_class": "confluenceTd",
                              "__text": "CASA"
                            },
                            {
                              "a": {
                                "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x078782",
                                "_class": "user-hover",
                                "_rel": "x078782",
                                "__text": "Chauderon, Arnaud (PCBN) - KLM"
                              },
                              "_class": "confluenceTd"
                            },
                            {
                              "_class": "confluenceTd",
                              "__text": "Create mapping table seat characteristics"
                            },
                            {
                              "a": {
                                "del": "CASA-4751",
                                "_href": "https://jira.devnet.klm.com/browse/CASA-4751",
                                "_title": "Create mapping table seat characteristics",
                                "_class": "issue-link",
                                "_data-issue-key": "CASA-4751"
                              },
                              "_class": "confluenceTd"
                            }
                          ]
                        },
                        {
                          "td": [
                            {
                              "_class": "confluenceTd",
                              "__text": "CASA"
                            },
                            {
                              "a": {
                                "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x078782",
                                "_class": "user-hover",
                                "_rel": "x078782",
                                "__text": "Chauderon, Arnaud (PCBN) - KLM"
                              },
                              "_class": "confluenceTd"
                            },
                            {
                              "_class": "confluenceTd",
                              "__text": "Send seat map characteristics to AO API"
                            },
                            {
                              "a": {
                                "del": "CASA-4848",
                                "_href": "https://jira.devnet.klm.com/browse/CASA-4848",
                                "_title": "Send seat characteristics to AO API",
                                "_class": "issue-link",
                                "_data-issue-key": "CASA-4848"
                              },
                              "_class": "confluenceTd"
                            },
                            {
                              "_class": "confluenceTd"
                            }
                          ]
                        },
                        {
                          "td": [
                            {
                              "_class": "confluenceTd",
                              "__text": "Productshop"
                            },
                            {
                              "a": {
                                "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x078782",
                                "_class": "user-hover",
                                "_rel": "x078782",
                                "__text": "Chauderon, Arnaud (PCBN) - KLM"
                              },
                              "_class": "confluenceTd"
                            },
                            {
                              "_class": "confluenceTd",
                              "__text": "Align with content regarding description on touchpoint"
                            },
                            {
                              "a": {
                                "del": "PRDS-7817",
                                "_href": "https://jira.devnet.klm.com/browse/PRDS-7817",
                                "_title": "New seat remarks - Content publish",
                                "_class": "issue-link",
                                "_data-issue-key": "PRDS-7817"
                              },
                              "_class": "confluenceTd"
                            }
                          ]
                        },
                        {
                          "td": [
                            {
                              "_class": "confluenceTd",
                              "__text": "Blueweb ancillaries"
                            },
                            {
                              "a": {
                                "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=M417297",
                                "_class": "user-hover",
                                "_rel": "M417297",
                                "__text": "Lemert, Margot (AMSSE) - AF"
                              },
                              "_class": "confluenceTd"
                            },
                            {
                              "_class": "confluenceTd",
                              "__text": "Show seatmap remarks"
                            },
                            {
                              "a": {
                                "del": "BWA-1639",
                                "_href": "https://jira.devnet.klm.com/browse/BWA-1639",
                                "_title": "Display the seat remarks on the seatmap popup",
                                "_class": "issue-link",
                                "_data-issue-key": "BWA-1639"
                              },
                              "_class": "confluenceTd"
                            }
                          ]
                        },
                        {
                          "td": [
                            {
                              "_class": "confluenceTd",
                              "__text": "Kiosk"
                            },
                            {
                              "a": {
                                "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm62684",
                                "_class": "user-hover",
                                "_rel": "klm62684",
                                "__text": "Klein Douwel, Daan (AMSSZ) - KLM"
                              },
                              "_class": "confluenceTd"
                            },
                            {
                              "_class": "confluenceTd",
                              "__text": "Show seatmap remarks"
                            },
                            {
                              "_class": "confluenceTd"
                            }
                          ]
                        },
                        {
                          "td": [
                            {
                              "_class": "confluenceTd",
                              "__text": "Mobile AF"
                            },
                            {
                              "a": {
                                "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=T225510",
                                "_class": "user-hover",
                                "_rel": "T225510",
                                "__text": "Nguyen, Thi Thu (PSIM MO) - AF (ext)"
                              },
                              "_class": "confluenceTd"
                            },
                            {
                              "_class": "confluenceTd",
                              "__text": "Show seatmap remarks"
                            },
                            {
                              "_class": "confluenceTd"
                            }
                          ]
                        },
                        {
                          "td": [
                            {
                              "_class": "confluenceTd",
                              "__text": "Mobile KL"
                            },
                            {
                              "a": {
                                "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x087145",
                                "_class": "user-hover",
                                "_rel": "x087145",
                                "__text": "Pachisia, Savita (ITCDEC) - KLM"
                              },
                              "_class": "confluenceTd"
                            },
                            {
                              "_class": "confluenceTd",
                              "__text": "Show seatmap remarks"
                            },
                            {
                              "_class": "confluenceTd"
                            }
                          ]
                        }
                      ]
                    },
                    "_class": "confluenceTable"
                  },
                  "_class": "table-wrap"
                }
              },
              "environment": "",
              "key": {
                "_id": "1056461",
                "__text": "PREPANC-285"
              },
              "summary": "New seat remarks",
              "type": {
                "_id": "2",
                "_iconUrl": "https://jira.devnet.klm.com/secure/viewavatar?size=xsmall avatarId=13921 avatarType=issuetype",
                "__text": "New Feature"
              },
              "priority": {
                "_id": "3",
                "_iconUrl": "https://jira.devnet.klm.com/images/icons/priorities/major.svg",
                "__text": "Major"
              },
              "status": {
                "_id": "5",
                "_iconUrl": "https://jira.devnet.klm.com/images/icons/statuses/resolved.png",
                "_description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
                "__text": "Resolved"
              },
              "statusCategory": {
                "_id": "3",
                "_key": "done",
                "_colorName": "green"
              },
              "resolution": {
                "_id": "6",
                "__text": "Done"
              },
              "assignee": {
                "_username": "x078782",
                "__text": "Chauderon, Arnaud (PCBN) - KLM"
              },
              "reporter": {
                "_username": "klm62229",
                "__text": "Lans, Angelo van der (PSIM EC) - KLM"
              },
              "labels": {
                "label": [
                  "ANCILLARIES",
                  "Attractiveness",
                  "sprint10.6",
                  "sprint10.7",
                  "stretch"
                ]
              },
              "created": "Tue, 23 Oct 2018 12:21:04 +0200",
              "updated": "Mon, 18 Mar 2019 09:24:26 +0100",
              "resolved": "Mon, 18 Mar 2019 09:24:19 +0100",
              "fixVersion": "PI10",
              "component": [
                "Ancillary Offer",
                "Blueweb Ancillaries",
                "CASA",
                "Mobile AF",
                "Mobile KL",
                "NGKA"
              ],
              "due": "",
              "votes": "0",
              "watches": "7",
              "comments": {
                "comment": [
                  {
                    "p": [
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm50041",
                          "_class": "user-hover",
                          "_rel": "klm50041",
                          "__text": "Helm, Joost van der (PSIM EC) - KLM"
                        }
                      },
                      "Not ready, Refinement to be planned = gt; Joost"
                    ],
                    "_id": "2002844",
                    "_author": "x078782",
                    "_created": "Tue, 15 Jan 2019 16:14:55 +0100"
                  },
                  {
                    "p": [
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm50041",
                          "_class": "user-hover",
                          "_rel": "klm50041",
                          "__text": "Helm, Joost van der (PSIM EC) - KLM"
                        }
                      },
                      "Refinement requiered to clarify pending questions"
                    ],
                    "_id": "2030265",
                    "_author": "x078782",
                    "_created": "Tue, 29 Jan 2019 13:43:50 +0100"
                  },
                  {
                    "p": "Feature not ready to be planned in Sprint10.5",
                    "_id": "2053027",
                    "_author": "x078782",
                    "_created": "Fri, 8 Feb 2019 12:26:01 +0100"
                  },
                  {
                    "p": [
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm50041",
                          "_class": "user-hover",
                          "_rel": "klm50041",
                          "__text": "Helm, Joost van der (PSIM EC) - KLM"
                        }
                      },
                      "Already post poned, this feature is in now in critical path to be embarked in sprint10.6",
                      "Can you complete the requirement with missing details and plan a refinement session with product team once ready to be discussed.",
                      "Thx"
                    ],
                    "_id": "2065965",
                    "_author": "x078782",
                    "_created": "Thu, 14 Feb 2019 15:20:01 +0100"
                  },
                  {
                    "p": [
                      "Netxt week I have the update for the tables.",
                      "It is likely that we go live with the current codes and not the new ones. I have to wait for the info from Amadeus."
                    ],
                    "_id": "2069111",
                    "_author": "klm50041",
                    "_created": "Fri, 15 Feb 2019 15:57:20 +0100"
                  },
                  {
                    "p": {
                      "a": {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm50041",
                        "_class": "user-hover",
                        "_rel": "klm50041",
                        "__text": "Helm, Joost van der (PSIM EC) - KLM"
                      },
                      "__text": "Hi \n, can you please provide some flights where we can get the below characteristics. We can use this for testing."
                    },
                    "div": {
                      "table": {
                        "tbody": {
                          "tr": [
                            {
                              "th": [
                                {
                                  "_class": "confluenceTh",
                                  "__text": "Airline"
                                },
                                {
                                  "_class": "confluenceTh",
                                  "__text": "Category"
                                },
                                {
                                  "_class": "confluenceTh",
                                  "__text": "Description"
                                }
                              ]
                            },
                            {
                              "td": [
                                {
                                  "_class": "confluenceTd",
                                  "__text": "KL"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "NO_RECLINE"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "Restricted Recline"
                                }
                              ]
                            },
                            {
                              "td": [
                                {
                                  "_class": "confluenceTd",
                                  "__text": "AF"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "LIMITED_RECLINE"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "Restricted Recline"
                                }
                              ]
                            },
                            {
                              "td": [
                                {
                                  "_class": "confluenceTd",
                                  "__text": "AF"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "NO_WINDOW_SEAT"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "Window seat Without Window"
                                }
                              ]
                            },
                            {
                              "td": [
                                {
                                  "_class": "confluenceTd",
                                  "__text": "KL"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "NO_WINDOW_SEAT"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "Window seat Without Window"
                                }
                              ]
                            },
                            {
                              "td": [
                                {
                                  "_class": "confluenceTd",
                                  "__text": "KL"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "BUSINESSS_SEPERATE"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "Seat behind galley"
                                }
                              ]
                            },
                            {
                              "td": [
                                {
                                  "_class": "confluenceTd",
                                  "__text": "AF"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "EXIT_ROW"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "Exit Row Seat"
                                }
                              ]
                            },
                            {
                              "td": [
                                {
                                  "_class": "confluenceTd",
                                  "__text": "AF"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "BULKHEAD"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "Bulkhead Seat"
                                }
                              ]
                            },
                            {
                              "td": [
                                {
                                  "_class": "confluenceTd",
                                  "__text": "AF"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "FIXED_ARM"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "Seat not allowed for medical"
                                }
                              ]
                            },
                            {
                              "td": [
                                {
                                  "_class": "confluenceTd",
                                  "__text": "AF"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "SMALL_TABLET"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "Individual video screen-service unspecified"
                                }
                              ]
                            },
                            {
                              "td": [
                                {
                                  "_class": "confluenceTd",
                                  "__text": "AF"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "USB_PLUG"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "Electronic connection for laptop"
                                }
                              ]
                            },
                            {
                              "td": [
                                {
                                  "_class": "confluenceTd",
                                  "__text": "AF"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "BASSINET"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "Seat with bassinet facility"
                                }
                              ]
                            },
                            {
                              "td": [
                                {
                                  "_class": "confluenceTd",
                                  "__text": "AF"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "FAMILY_WITH_INFANT"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "Seat suitable for adult with infant"
                                }
                              ]
                            },
                            {
                              "td": [
                                {
                                  "_class": "confluenceTd",
                                  "__text": "AF"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "NEAR_TOILET_GALLERY"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "Seat adjacent to lavatory"
                                }
                              ]
                            }
                          ]
                        },
                        "_class": "confluenceTable"
                      },
                      "_class": "table-wrap"
                    },
                    "_id": "2090871",
                    "_author": "x008229",
                    "_created": "Wed, 27 Feb 2019 08:43:42 +0100"
                  },
                  {
                    "p": [
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x008229",
                          "_class": "user-hover",
                          "_rel": "x008229",
                          "__text": "Chinnachami, Naveen (ITCDEC) - KLM"
                        },
                        "__text": "Dear \n,"
                      },
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm11423",
                          "_class": "user-hover",
                          "_rel": "klm11423",
                          "__text": "Marcic, Jovanka (PSIM DI) - KLM"
                        },
                        "__text": "I spoke to \n today. She will create a seatmap for an aircraft next week."
                      },
                      "She will communicate the flights next week.",
                      "Regards,",
                      "Joost"
                    ],
                    "_id": "2096264",
                    "_author": "klm50041",
                    "_created": "Thu, 28 Feb 2019 16:43:30 +0100"
                  },
                  {
                    "p": [
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x008229",
                          "_class": "user-hover",
                          "_rel": "x008229",
                          "__text": "Chinnachami, Naveen (ITCDEC) - KLM"
                        },
                        "__text": "Dear"
                      },
                      "",
                      "",
                      "Dear Joost,",
                      "",
                      "I created 2 flight for your test scenario. One for KL and one for AF:",
                      "",
                      "",
                      "",
                      "For KL- Seat map you can use the B777-200:",
                      "KL 597 AMS-CPT  27jun, 22 JUN, 24,jun, 4 jul, 6 jul, 11 jul",
                      "",
                      "For AF you can use the following flight: CDG-LIM AF480 9,16,23,30 aug",
                      "",
                      "For KL- Seat map you can use the B777-200:",
                      "KL 597 AMS-CPT  27jun, 22 JUN, 24,jun, 4 jul, 6 jul, 11 jul",
                      "",
                      "",
                      "For AF you can use the following flight: CDG-LIM AF480 9,16,23,30 aug",
                      "",
                      "",
                      "Let me know if any issue.",
                      "",
                      "",
                      "Regards,",
                      {
                        "b": "Jovanka Marcic"
                      }
                    ],
                    "div": {
                      "table": {
                        "tbody": {
                          "tr": [
                            {
                              "td": [
                                {
                                  "_class": "confluenceTd",
                                  "__text": "KL"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "1D"
                                },
                                {
                                  "b": "26ABC",
                                  "_class": "confluenceTd",
                                  "__text": "NO_RECLINE—"
                                }
                              ]
                            },
                            {
                              "td": [
                                {
                                  "_class": "confluenceTd",
                                  "__text": "AF"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "1D"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "LIMITED_RECLINE- 37 EFGH, 38ABC"
                                }
                              ]
                            },
                            {
                              "td": [
                                {
                                  "_class": "confluenceTd",
                                  "__text": "AF"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "1W"
                                },
                                {
                                  "b": "31AL, 47AL, 51 AL",
                                  "_class": "confluenceTd",
                                  "__text": "NO_WINDOW_SEAT"
                                }
                              ]
                            },
                            {
                              "td": [
                                {
                                  "_class": "confluenceTd",
                                  "__text": "KL"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "1W"
                                },
                                {
                                  "b": "33AK, 38AK",
                                  "_class": "confluenceTd",
                                  "__text": "NO_WINDOW_SEAT-"
                                }
                              ]
                            },
                            {
                              "td": [
                                {
                                  "_class": "confluenceTd",
                                  "__text": "KL"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "6B"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "BUSINESSS_SEPERATE*15abcdefghjk*"
                                }
                              ]
                            },
                            {
                              "td": [
                                {
                                  "_class": "confluenceTd",
                                  "__text": "AF"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "E"
                                },
                                {
                                  "b": "already exist 26ABCJKL,",
                                  "_class": "confluenceTd",
                                  "__text": "EXIT_ROW- \n 41ABCJKL"
                                }
                              ]
                            },
                            {
                              "td": [
                                {
                                  "_class": "confluenceTd",
                                  "__text": "AF"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "K"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "BULKHEAD*- row 18, 14, 26EFGH,43efgh*"
                                }
                              ]
                            },
                            {
                              "td": [
                                {
                                  "b": "AF",
                                  "_class": "confluenceTd"
                                },
                                {
                                  "b": "1B",
                                  "_class": "confluenceTd"
                                },
                                {
                                  "b": "FIXED_ARM- 26ABCEHJKL, 41ABCJKL 42EH, 18BEHK,19CJ",
                                  "_class": "confluenceTd"
                                }
                              ]
                            },
                            {
                              "td": [
                                {
                                  "_class": "confluenceTd",
                                  "__text": "AF"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "70"
                                },
                                {
                                  "b": "ROW 34",
                                  "_class": "confluenceTd",
                                  "__text": "SMALL_TABLET"
                                }
                              ]
                            },
                            {
                              "td": [
                                {
                                  "_class": "confluenceTd",
                                  "__text": "AF"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "EC"
                                },
                                {
                                  "b": "Row 21",
                                  "_class": "confluenceTd",
                                  "__text": "USB_PLUG-"
                                }
                              ]
                            },
                            {
                              "td": [
                                {
                                  "_class": "confluenceTd",
                                  "__text": "AF"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "B"
                                },
                                {
                                  "b": "18A, 26 FG, 43FG, 14F",
                                  "_class": "confluenceTd",
                                  "__text": "BASSINET-"
                                }
                              ]
                            },
                            {
                              "td": [
                                {
                                  "_class": "confluenceTd",
                                  "__text": "AF"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "I"
                                },
                                {
                                  "b": "row14, 18ab,26-27 EFGH",
                                  "_class": "confluenceTd",
                                  "__text": "FAMILY_WITH_INFANT"
                                }
                              ]
                            },
                            {
                              "td": [
                                {
                                  "_class": "confluenceTd",
                                  "__text": "AF"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "AL"
                                },
                                {
                                  "b": "24EFGHJKL",
                                  "_class": "confluenceTd",
                                  "__text": "NEAR_TOILET_GALLERY"
                                }
                              ]
                            }
                          ]
                        },
                        "_class": "confluenceTable"
                      },
                      "_class": "table-wrap"
                    },
                    "_id": "2110339",
                    "_author": "klm50041",
                    "_created": "Thu, 7 Mar 2019 14:45:13 +0100"
                  },
                  {
                    "p": [
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x008229",
                          "_class": "user-hover",
                          "_rel": "x008229",
                          "__text": "Chinnachami, Naveen (ITCDEC) - KLM"
                        },
                        "__text": "Dear \n,"
                      },
                      "I received an advice from the Dsitribution team to use the AF flight AF128 because that flight is flown on a daily basis.",
                      "And we received the codes newly created by Amadeus. I will add to the feature",
                      "Regards,",
                      "Joost"
                    ],
                    "_id": "2121346",
                    "_author": "klm50041",
                    "_created": "Wed, 13 Mar 2019 13:14:17 +0100"
                  }
                ]
              },
              "issuelinks": {
                "issuelinktype": {
                  "name": "Child-Issue",
                  "outwardlinks": {
                    "issuelink": [
                      {
                        "issuekey": {
                          "_id": "1052814",
                          "__text": "BWA-1639"
                        }
                      },
                      {
                        "issuekey": {
                          "_id": "1056498",
                          "__text": "CASA-4751"
                        }
                      },
                      {
                        "issuekey": {
                          "_id": "1118005",
                          "__text": "CASA-4848"
                        }
                      },
                      {
                        "issuekey": {
                          "_id": "1056505",
                          "__text": "PRDS-7817"
                        }
                      }
                    ],
                    "_description": "is parent task of"
                  },
                  "inwardlinks": {
                    "issuelink": {
                      "issuekey": {
                        "_id": "1082024",
                        "__text": "DIGITAL-1993"
                      }
                    },
                    "_description": "is child task of"
                  },
                  "_id": "10040"
                }
              },
              "attachments": {
                "attachment": [
                  {
                    "_id": "664197",
                    "_name": "Seat Maps Characteristics.pptx",
                    "_size": "46792",
                    "_author": "klm50041",
                    "_created": "Fri, 30 Nov 2018 16:23:11 +0100"
                  },
                  {
                    "_id": "649670",
                    "_name": "Seatmap remarks.JPG",
                    "_size": "60780",
                    "_author": "klm62229",
                    "_created": "Tue, 13 Nov 2018 13:03:20 +0100"
                  },
                  {
                    "_id": "649682",
                    "_name": "example.JPG",
                    "_size": "78168",
                    "_author": "klm62229",
                    "_created": "Tue, 13 Nov 2018 13:18:13 +0100"
                  },
                  {
                    "_id": "657024",
                    "_name": "seat characteristics draft.xlsx",
                    "_size": "12685",
                    "_author": "klm50041",
                    "_created": "Thu, 22 Nov 2018 11:05:56 +0100"
                  }
                ]
              },
              "subtasks": "",
              "customfields": {
                "customfield": [
                  {
                    "customfieldname": "Approvals",
                    "customfieldvalues": "",
                    "_id": "customfield_12550",
                    "_key": "com.atlassian.servicedesk.approvals-plugin:sd-approvals"
                  },
                  {
                    "customfieldname": "Date of First Response",
                    "customfieldvalues": {
                      "customfieldvalue": "Tue, 15 Jan 2019 16:14:55 +0100"
                    },
                    "_id": "customfield_10041",
                    "_key": "com.atlassian.jira.ext.charting:firstresponsedate"
                  },
                  {
                    "customfieldname": "Development",
                    "customfieldvalues": "",
                    "_id": "customfield_14350",
                    "_key": "com.atlassian.jira.plugins.jira-development-integration-plugin:devsummary"
                  },
                  {
                    "customfieldname": "Global Rank",
                    "customfieldvalues": {
                      "customfieldvalue": "1|i3x95b:"
                    },
                    "_id": "customfield_11051",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Global Rank (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10150",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Participants",
                    "customfieldvalues": {
                      "customfieldvalue": [
                        "x078782",
                        "x008229",
                        "klm50041",
                        "klm62229"
                      ]
                    },
                    "_id": "customfield_10020",
                    "_key": "com.atlassian.jira.toolkit:participants"
                  },
                  {
                    "customfieldname": "Rank",
                    "customfieldvalues": {
                      "customfieldvalue": "1|zz44z8:"
                    },
                    "_id": "customfield_11050",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Rank (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10552",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Ranking",
                    "customfieldvalues": {
                      "customfieldvalue": "1|i3x4tz:"
                    },
                    "_id": "customfield_11052",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Ranking (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10553",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Time in Status",
                    "customfieldvalues": "",
                    "_id": "customfield_10042",
                    "_key": "com.atlassian.jira.ext.charting:timeinstatus"
                  }
                ]
              }
            },
            {
              "title": "[PREPANC-345] Paid Lounge improvements",
              "link": "https://jira.devnet.klm.com/browse/PREPANC-345",
              "project": {
                "_id": "26267",
                "_key": "PREPANC",
                "__text": "PREPANC"
              },
              "description": {
                "p": [
                  {
                    "b": "What",
                    "br": [
                      "",
                      ""
                    ],
                    "__text": "Improve the Paid Lounge product, for all touchpoints."
                  },
                  {
                    "b": "Scope  amp; details",
                    "br": [
                      "",
                      "",
                      "",
                      "",
                      "",
                      ""
                    ],
                    "img": [
                      {
                        "_class": "emoticon",
                        "_src": "https://jira.devnet.klm.com/images/icons/emoticons/add.png",
                        "_height": "16",
                        "_width": "16",
                        "_align": "absmiddle",
                        "_alt": "",
                        "_border": "0"
                      },
                      {
                        "_class": "emoticon",
                        "_src": "https://jira.devnet.klm.com/images/icons/emoticons/add.png",
                        "_height": "16",
                        "_width": "16",
                        "_align": "absmiddle",
                        "_alt": "",
                        "_border": "0"
                      },
                      {
                        "_class": "emoticon",
                        "_src": "https://jira.devnet.klm.com/images/icons/emoticons/add.png",
                        "_height": "16",
                        "_width": "16",
                        "_align": "absmiddle",
                        "_alt": "",
                        "_border": "0"
                      },
                      {
                        "_class": "emoticon",
                        "_src": "https://jira.devnet.klm.com/images/icons/emoticons/add.png",
                        "_height": "16",
                        "_width": "16",
                        "_align": "absmiddle",
                        "_alt": "",
                        "_border": "0"
                      },
                      {
                        "_class": "emoticon",
                        "_src": "https://jira.devnet.klm.com/images/icons/emoticons/add.png",
                        "_height": "16",
                        "_width": "16",
                        "_align": "absmiddle",
                        "_alt": "",
                        "_border": "0"
                      },
                      {
                        "_class": "emoticon",
                        "_src": "https://jira.devnet.klm.com/images/icons/emoticons/add.png",
                        "_height": "16",
                        "_width": "16",
                        "_align": "absmiddle",
                        "_alt": "",
                        "_border": "0"
                      }
                    ],
                    "__text": "Show FB Gold/Platinum/C2000/Ultimate/Skipper with green check mark\n \n Show copy \"Elite Plus benefit\" in 'Price' column for FB Platinum/Gold/C2000 \n \n offer Silver discount to all other passengers in PNR next to FB Platinum/Gold/C2000/Ultimate/Skipper (take all Silver prices; discounted price, FB miles price, and airport price); \n \n Show \"Invite Guest\" warning for FB Gold/Platinum/C2000/Ultimate/Skipper, for touchpoints without \"Invite Guest\" functionality;\n \n Show \"Invite Guest\" warning for FB Platinum/C2000/Ultimate/Skipper (when not-logged-in), for touchpoints with \"Invite Guest\" functionality;\n \n Show \"Children\" warning for FB Platinum/C2000/Ultimate/Skipper;"
                  },
                  {
                    "img": [
                      {
                        "_class": "emoticon",
                        "_src": "https://jira.devnet.klm.com/images/icons/emoticons/forbidden.png",
                        "_height": "16",
                        "_width": "16",
                        "_align": "absmiddle",
                        "_alt": "",
                        "_border": "0"
                      },
                      {
                        "_class": "emoticon",
                        "_src": "https://jira.devnet.klm.com/images/icons/emoticons/forbidden.png",
                        "_height": "16",
                        "_width": "16",
                        "_align": "absmiddle",
                        "_alt": "",
                        "_border": "0"
                      }
                    ],
                    "em": {
                      "b": "In the mean time make use of \"Invite Guest\" FB Gold/Platinum/C2000 warning for FB Ultimate/Skipper."
                    },
                    "br": "",
                    "__text": "Cannot distuingish warning for FB Ultimate/Skipper, because CASA does not get these attributes. Res API and Checkin API need to pass this info via Resource Store. \n \n Silver discount price will NOT come from Amadeus, must be developed in CASA/Anc Offer API"
                  },
                  {
                    "b": "Why"
                  },
                  "",
                  {
                    "b": "Copy (for touchpoints without \"Invite Guest\" functionality: ICI ):",
                    "br": "",
                    "ins": "In case of FB Gold/Platinum/C2000 (copy01a):"
                  },
                  {
                    "em": {
                      "a": {
                        "_href": "https://www.flyingblue.nl/en/programme/(popin:full-tier-benefits)?country=NL",
                        "_class": "external-link",
                        "_rel": "nofollow",
                        "__text": "conditions"
                      },
                      "__text": "As a Flying Blue Elite Plus member you’re welcome to invite a guest to join you in the KLM Crown Lounge (\n apply)."
                    },
                    "__text": "English:"
                  },
                  {
                    "em": {
                      "font": {
                        "ins": "voorwaarden",
                        "_color": "#0747a6"
                      },
                      "__text": "Als Flying Blue Elite Plus-deelnemer, mag u een gast meenemen in de KLM Crown Lounge (aan \n onderhevig)."
                    },
                    "__text": "Dutch:"
                  },
                  {
                    "del": {
                      "ins": "In case of FB Ultimate/Skipper (copy01b)",
                      "__text": ":"
                    }
                  },
                  {
                    "del": {
                      "em": {
                        "a": {
                          "_href": "https://www.flyingblue.nl/en/programme/(popin:full-tier-benefits)?country=NL",
                          "_class": "external-link",
                          "_rel": "nofollow",
                          "__text": "conditions"
                        },
                        "__text": "As a Flying Blue Ultimate or Skipper member, you’re welcome to invite multiple guests to join you in the KLM Crown Lounge (\n apply)."
                      },
                      "__text": "English:"
                    }
                  },
                  {
                    "del": {
                      "em": [
                        "Als Flying Blue Ultimate",
                        {
                          "font": {
                            "ins": "voorwaarden",
                            "_color": "#0747a6"
                          },
                          "__text": "of Skipper-deelnemer, mag u meerdere gasten meenemen in de KLM Crown Lounge (aan \n onderhevig)."
                        }
                      ],
                      "__text": "Dutch:"
                    }
                  },
                  "",
                  {
                    "b": "Copy (for touchpoints WITH 'Invite Guest' functionality: KL Mobile App):"
                  },
                  {
                    "ins": "In case of FB Gold/Platinum/C2000 (copy02a)",
                    "__text": ":"
                  },
                  {
                    "em": [
                      {
                        "a": {
                          "_href": "https://www.flyingblue.nl/en/programme/(popin:full-tier-benefits)?country=NL",
                          "_class": "external-link",
                          "_rel": "nofollow",
                          "__text": "conditions"
                        },
                        "__text": "a Flying Blue Elite Plus member, you’re welcome to invite a guest to join you in the KLM Crown Lounge (\n apply)."
                      },
                      "Please log-in to be able to use the invitation."
                    ],
                    "__text": "English: As"
                  },
                  {
                    "em": {
                      "font": {
                        "ins": "voorwaarden",
                        "_color": "#0747a6"
                      },
                      "__text": "Als Flying Blue Elite Plus-deelnemer, mag u een gast meenemen in de KLM Crown Lounge (aan \n onderhevig). Log in om uw gast uit te nodigen."
                    },
                    "__text": "Dutch:"
                  },
                  {
                    "del": {
                      "ins": "In case of FB Ultimate/Skipper (copy02b)",
                      "__text": ":"
                    }
                  },
                  {
                    "del": {
                      "em": [
                        {
                          "a": {
                            "_href": "https://www.flyingblue.nl/en/programme/(popin:full-tier-benefits)?country=NL",
                            "_class": "external-link",
                            "_rel": "nofollow",
                            "__text": "conditions"
                          },
                          "__text": "As a Flying Blue Ultimate or Skipper member, you’re welcome to invite multiple guests to join you in the KLM Crown Lounge (\n apply)."
                        },
                        "Please log-in to be able to use the invitations."
                      ],
                      "__text": "English:"
                    }
                  },
                  {
                    "del": {
                      "em": [
                        "Als Flying Blue Ultimate",
                        {
                          "font": {
                            "ins": "voorwaarden",
                            "_color": "#0747a6"
                          },
                          "__text": "of Skipper-deelnemenr, mag u meerdere gasten meenemen in de KLM Crown Lounge (aan \n onderhevig). Log in om uw gasten uit te nodigen."
                        }
                      ],
                      "__text": "Dutch:"
                    }
                  },
                  "",
                  {
                    "b": "Link in copy",
                    "__text": "(provide link based on language)"
                  },
                  {
                    "a": {
                      "_href": "https://www.klm.com/travel/nl_nl/prepare_for_travel/at_the_airport/lounges/lounge_access_policy.htm",
                      "_class": "external-link",
                      "_rel": "nofollow",
                      "__text": "https://www.klm.com/travel/nl_nl/prepare_for_travel/at_the_airport/lounges/lounge_access_policy.htm"
                    }
                  },
                  "",
                  "",
                  {
                    "b": "Copy 'Children' warning",
                    "del": "Skipper/Ultimate",
                    "__text": "(only for FB Platinum/C2000/\n):"
                  },
                  {
                    "font": {
                      "em": "Special discounted access passes for children can be arranged at the entrance of the KLM Crown Lounge",
                      "_color": "#000000",
                      "__text": "."
                    },
                    "__text": "English:"
                  },
                  {
                    "em": {
                      "font": {
                        "_color": "#000000",
                        "__text": "Voor kinderen zijn er in prijs verlaagde loungetoegangspassen verkrijgbaar bij de ingang van de KLM Crown-lounge."
                      }
                    },
                    "__text": "Dutch:"
                  },
                  {
                    "br": [
                      "",
                      "",
                      ""
                    ],
                    "b": "Design:",
                    "a": {
                      "_href": "https://app.zeplin.io/project/5a6ee45147cd16b8b44e65b9?seid=5c35ea93eddc504bd222e7f4",
                      "_class": "external-link",
                      "_rel": "nofollow",
                      "__text": "https://app.zeplin.io/project/5a6ee45147cd16b8b44e65b9?seid=5c35ea93eddc504bd222e7f4"
                    }
                  },
                  {
                    "b": "Stakeholders",
                    "br": [
                      "",
                      "",
                      "",
                      "",
                      ""
                    ],
                    "a": [
                      {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x078782",
                        "_class": "user-hover",
                        "_rel": "x078782",
                        "__text": "Chauderon, Arnaud (PCBN) - KLM"
                      },
                      {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm68717",
                        "_class": "user-hover",
                        "_rel": "klm68717",
                        "__text": "Oorsprong, Pieter (AMSSZ) - KLM"
                      },
                      {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm73533",
                        "_class": "user-hover",
                        "_rel": "klm73533",
                        "__text": "Ritter, Silke (PSFB DP) - KLM"
                      },
                      {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm83619",
                        "_class": "user-hover",
                        "_rel": "klm83619",
                        "__text": "Abdel-Sadek Abdel-Ghani Mohamed, Nurah (AMSSZ) - KLM"
                      }
                    ]
                  },
                  {
                    "b": "Impacted Teams  amp; Dependencies"
                  },
                  {
                    "em": "Impacted teams"
                  },
                  ""
                ],
                "ul": {
                  "li": [
                    "passengers in PNR with FB Gold/Platinum/C2000 should get FB Silver price for Paid Lounge product;",
                    "FB Gold/Platinum/C2000 can bring one/more guest for free to the lounge. We want to make the customer aware of this, so that not all passengers buy lounge access.",
                    "not all children can be reconginized online, because date of birth is not always mandatory to provide. FB Plat/C2000/Ultimate/Skipper have different prices for children, which we cannot guarantee online. Until we have a complete solution for this a warning should be displayed that access for children can be arranged at the lounge."
                  ],
                  "_class": "alternate",
                  "_type": "square"
                },
                "div": {
                  "table": {
                    "tbody": {
                      "tr": [
                        {
                          "th": [
                            {
                              "_class": "confluenceTh",
                              "__text": "Team"
                            },
                            {
                              "_class": "confluenceTh",
                              "__text": "Plane"
                            },
                            {
                              "_class": "confluenceTh",
                              "__text": "Impact"
                            },
                            {
                              "_class": "confluenceTh",
                              "__text": "Stakeholder"
                            },
                            {
                              "_class": "confluenceTh",
                              "__text": "Effort estimation"
                            }
                          ]
                        },
                        {
                          "td": [
                            {
                              "_class": "confluenceTd",
                              "__text": "Ancillary Offer"
                            },
                            {
                              "_class": "confluenceTd",
                              "__text": "Preparation  amp; Ancillaries"
                            },
                            {
                              "_class": "confluenceTd"
                            },
                            {
                              "a": {
                                "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x078782",
                                "_class": "user-hover",
                                "_rel": "x078782",
                                "__text": "Chauderon, Arnaud (PCBN) - KLM"
                              },
                              "_class": "confluenceTd"
                            },
                            {
                              "_class": "confluenceTd"
                            }
                          ]
                        },
                        {
                          "td": [
                            {
                              "_class": "confluenceTd",
                              "__text": "CASA"
                            },
                            {
                              "_class": "confluenceTd",
                              "__text": "Preparation  amp; Ancillaries"
                            },
                            {
                              "_class": "confluenceTd",
                              "__text": "Create rules for pricing and warnings"
                            },
                            {
                              "a": {
                                "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x078782",
                                "_class": "user-hover",
                                "_rel": "x078782",
                                "__text": "Chauderon, Arnaud (PCBN) - KLM"
                              },
                              "_class": "confluenceTd"
                            },
                            {
                              "_class": "confluenceTd"
                            }
                          ]
                        },
                        {
                          "td": [
                            {
                              "_class": "confluenceTd",
                              "__text": "Productshop"
                            },
                            {
                              "_class": "confluenceTd",
                              "__text": "Preparation  amp; Ancillaries"
                            },
                            {
                              "_class": "confluenceTd",
                              "__text": "Display warning on KLM.com ICI"
                            },
                            {
                              "a": {
                                "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x078782",
                                "_class": "user-hover",
                                "_rel": "x078782",
                                "__text": "Chauderon, Arnaud (PCBN) - KLM"
                              },
                              "_class": "confluenceTd"
                            },
                            {
                              "_class": "confluenceTd"
                            }
                          ]
                        },
                        {
                          "td": [
                            {
                              "_class": "confluenceTd",
                              "__text": "Checkin API"
                            },
                            {
                              "_class": "confluenceTd"
                            },
                            {
                              "_class": "confluenceTd",
                              "__text": "Pass Ultimate/Skipper into resource store"
                            },
                            {
                              "_class": "confluenceTd"
                            },
                            {
                              "_class": "confluenceTd"
                            }
                          ]
                        },
                        {
                          "td": [
                            {
                              "_class": "confluenceTd",
                              "__text": "Res API"
                            },
                            {
                              "_class": "confluenceTd"
                            },
                            {
                              "_class": "confluenceTd",
                              "__text": "Pass Ultimate/Skipper into resource store"
                            },
                            {
                              "_class": "confluenceTd"
                            },
                            {
                              "_class": "confluenceTd"
                            }
                          ]
                        }
                      ]
                    },
                    "_class": "confluenceTable"
                  },
                  "_class": "table-wrap"
                }
              },
              "environment": "",
              "key": {
                "_id": "1099753",
                "__text": "PREPANC-345"
              },
              "summary": "Paid Lounge improvements",
              "type": {
                "_id": "2",
                "_iconUrl": "https://jira.devnet.klm.com/secure/viewavatar?size=xsmall avatarId=13921 avatarType=issuetype",
                "__text": "New Feature"
              },
              "priority": {
                "_id": "3",
                "_iconUrl": "https://jira.devnet.klm.com/images/icons/priorities/major.svg",
                "__text": "Major"
              },
              "status": {
                "_id": "5",
                "_iconUrl": "https://jira.devnet.klm.com/images/icons/statuses/resolved.png",
                "_description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
                "__text": "Resolved"
              },
              "statusCategory": {
                "_id": "3",
                "_key": "done",
                "_colorName": "green"
              },
              "resolution": {
                "_id": "6",
                "__text": "Done"
              },
              "assignee": {
                "_username": "x078782",
                "__text": "Chauderon, Arnaud (PCBN) - KLM"
              },
              "reporter": {
                "_username": "klm62414",
                "__text": "Horst, Boyke van der (PSIM EC) - KLM"
              },
              "labels": {
                "label": [
                  "sprint10.2",
                  "sprint10.3",
                  "sprint10.4",
                  "stretch"
                ]
              },
              "created": "Tue, 27 Nov 2018 15:24:42 +0100",
              "updated": "Fri, 8 Feb 2019 11:00:10 +0100",
              "resolved": "Fri, 8 Feb 2019 11:00:10 +0100",
              "fixVersion": "PI10",
              "component": [
                "Ancillary Offer",
                "CASA"
              ],
              "due": "",
              "votes": "0",
              "watches": "3",
              "comments": {
                "comment": [
                  {
                    "p": {
                      "a": {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x078782",
                        "_class": "user-hover",
                        "_rel": "x078782",
                        "__text": "Chauderon, Arnaud (PCBN) - KLM"
                      },
                      "__text": ", I would like to have this developed in PI10. Can you put this on the list. I planned refinement next week."
                    },
                    "_id": "1928658",
                    "_author": "klm62414",
                    "_created": "Tue, 27 Nov 2018 15:26:21 +0100"
                  },
                  {
                    "p": "Yes is on",
                    "_id": "1930790",
                    "_author": "x078782",
                    "_created": "Wed, 28 Nov 2018 13:08:11 +0100"
                  },
                  {
                    "p": {
                      "a": [
                        {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x008229",
                          "_class": "user-hover",
                          "_rel": "x008229",
                          "__text": "Chinnachami, Naveen (ITCDEC) - KLM"
                        },
                        {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x001150",
                          "_class": "user-hover",
                          "_rel": "x001150",
                          "__text": "Sinha, Kuns (ITCDEC) - KLM"
                        },
                        {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x078782",
                          "_class": "user-hover",
                          "_rel": "x078782",
                          "__text": "Chauderon, Arnaud (PCBN) - KLM"
                        }
                      ],
                      "__text": "Hi \n, \n, \n, I have checked with Roxana about Silver discount for pax in PNR with FB Gold/Platinum/C2000 and it is not possible to create this logic in Amadeus. So, this needs to be in CASA/Ancillary offer API."
                    },
                    "_id": "1959076",
                    "_author": "klm62414",
                    "_created": "Wed, 12 Dec 2018 08:50:43 +0100"
                  },
                  {
                    "p": [
                      {
                        "a": [
                          {
                            "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x008229",
                            "_class": "user-hover",
                            "_rel": "x008229",
                            "__text": "Chinnachami, Naveen (ITCDEC) - KLM"
                          },
                          {
                            "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x001150",
                            "_class": "user-hover",
                            "_rel": "x001150",
                            "__text": "Sinha, Kuns (ITCDEC) - KLM"
                          },
                          {
                            "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm01121",
                            "_class": "user-hover",
                            "_rel": "klm01121",
                            "__text": "Maas, Theo (ITCDMO) - KLM"
                          }
                        ],
                        "__text": "Hi \n, \n, I talked to \n and he told me it is possible to give a different message per API consumer. Therefore I added that requirement again."
                      },
                      {
                        "a": [
                          {
                            "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x078782",
                            "_class": "user-hover",
                            "_rel": "x078782",
                            "__text": "Chauderon, Arnaud (PCBN) - KLM"
                          },
                          {
                            "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm42475",
                            "_class": "user-hover",
                            "_rel": "klm42475",
                            "__text": "Avezaat, Floris (ITCDEC) - KLM"
                          }
                        ],
                        "__text": "fyi \n,"
                      }
                    ],
                    "_id": "1959921",
                    "_author": "klm62414",
                    "_created": "Wed, 12 Dec 2018 11:55:51 +0100"
                  },
                  {
                    "p": [
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm62414",
                          "_class": "user-hover",
                          "_rel": "klm62414",
                          "__text": "Horst, Boyke van der (PSIM EC) - KLM"
                        },
                        "__text": "Hi \n, can you please plan a final refinement to discuss on the last minute new requirements like CASA to build the Silver discount logic and FB message for Children."
                      },
                      {
                        "a": [
                          {
                            "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x078782",
                            "_class": "user-hover",
                            "_rel": "x078782",
                            "__text": "Chauderon, Arnaud (PCBN) - KLM"
                          },
                          {
                            "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x073618",
                            "_class": "user-hover",
                            "_rel": "x073618",
                            "__text": "Pallanti, Ravitej (ITCDEC) - KLM"
                          }
                        ],
                        "__text": "FYI"
                      }
                    ],
                    "_id": "1965237",
                    "_author": "x008229",
                    "_created": "Fri, 14 Dec 2018 12:27:18 +0100"
                  },
                  {
                    "p": "Planned next tuesday",
                    "_id": "1965557",
                    "_author": "klm62414",
                    "_created": "Fri, 14 Dec 2018 14:17:02 +0100"
                  },
                  {
                    "p": [
                      {
                        "a": [
                          {
                            "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x008229",
                            "_class": "user-hover",
                            "_rel": "x008229",
                            "__text": "Chinnachami, Naveen (ITCDEC) - KLM"
                          },
                          {
                            "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x073618",
                            "_class": "user-hover",
                            "_rel": "x073618",
                            "__text": "Pallanti, Ravitej (ITCDEC) - KLM"
                          }
                        ],
                        "__text": "amp; \n, how are you going to code the messages (for children  amp; guests)? Is that something like?:"
                      },
                      "",
                      "",
                      "In other words, is the code flexible to remove/add a tier level? I ask this because for FB Gold currently the online children prices are incorrect (children warning applies), but we want to correct them asap and then the children online prices for FB Gold are correct (children warning no longer needed)."
                    ],
                    "div": {
                      "table": {
                        "tbody": {
                          "tr": [
                            {
                              "td": {
                                "pre": {
                                  "span": {
                                    "_style": "color: black; font-family: 'Consolas', 'Bitstream Vera Sans Mono', 'Courier New', Courier, monospace !important;",
                                    "__text": "If (tierLevel = GOLD or tierLevel = Platinum)"
                                  },
                                  "_style": "font-size: 1em; margin: 0 10px; margin-top: 10px; width: auto; padding: 0;"
                                },
                                "_style": " line-height: 1.4em !important; padding: 0em; vertical-align: top;"
                              },
                              "_id": "syntaxplugin_code_and_gutter"
                            },
                            {
                              "td": {
                                "pre": {
                                  "span": {
                                    "_style": "color: black; font-family: 'Consolas', 'Bitstream Vera Sans Mono', 'Courier New', Courier, monospace !important;",
                                    "__text": "Then Message=kids"
                                  },
                                  "_style": "font-size: 1em; margin: 0 10px; margin-bottom: 10px; width: auto; padding: 0;"
                                },
                                "_style": " line-height: 1.4em !important; padding: 0em; vertical-align: top;"
                              },
                              "_id": "syntaxplugin_code_and_gutter"
                            }
                          ]
                        },
                        "_cellspacing": "0",
                        "_cellpadding": "0",
                        "_border": "0",
                        "_width": "100%",
                        "_style": "font-size: 1em; line-height: 1.4em !important; font-weight: normal; font-style: normal; color: black;"
                      },
                      "_id": "syntaxplugin",
                      "_class": "syntaxplugin",
                      "_style": "border: 1px dashed #bbb; border-radius: 5px !important; overflow: auto; max-height: 30em;"
                    },
                    "_id": "1982506",
                    "_author": "klm62414",
                    "_created": "Thu, 3 Jan 2019 11:43:18 +0100"
                  },
                  {
                    "p": [
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm62414",
                          "_class": "user-hover",
                          "_rel": "klm62414",
                          "__text": "Horst, Boyke van der (PSIM EC) - KLM"
                        },
                        "__text": "Hi \n, as already discussed the message for Ultimate/Skipper needs to be de scoped, because we dont able to identify Ulitmate/Skipper."
                      },
                      {
                        "b": "for touchpoints WITHOUT AND  WITH \"Invite Guest\"",
                        "__text": "Also as discussed in PI can you provide a final complete text that include children message also for"
                      }
                    ],
                    "_id": "1982738",
                    "_author": "x008229",
                    "_created": "Thu, 3 Jan 2019 13:45:08 +0100"
                  },
                  {
                    "p": [
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x008229",
                          "_class": "user-hover",
                          "_rel": "x008229",
                          "__text": "Chinnachami, Naveen (ITCDEC) - KLM"
                        },
                        "__text": ", yes I know that you cannot distuingish Ultimate/Skipper. The final copies are now in the description. Final design example is in the making. I will add that once it is ready."
                      },
                      "But, that was not my question. My question is: are you flexible in removing a certain tier level (e.g. Gold) for a message?"
                    ],
                    "_id": "1982766",
                    "_author": "klm62414",
                    "_created": "Thu, 3 Jan 2019 13:52:24 +0100"
                  },
                  {
                    "p": {
                      "a": {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm62414",
                        "_class": "user-hover",
                        "_rel": "klm62414",
                        "__text": "Horst, Boyke van der (PSIM EC) - KLM"
                      },
                      "__text": "Hi \n, so you mean to say right now the messages need to shown only for the Platinum/C2000?"
                    },
                    "_id": "1983104",
                    "_author": "x008229",
                    "_created": "Thu, 3 Jan 2019 15:28:57 +0100"
                  },
                  {
                    "p": [
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x008229",
                          "_class": "user-hover",
                          "_rel": "x008229",
                          "__text": "Chinnachami, Naveen (ITCDEC) - KLM"
                        },
                        "__text": "Hi \n, not exactly. We have two different messages:"
                      },
                      "There is still some discussion going on for the Child message. Currently child prices for Gold are also not correct, that we want to change asap. So the question is, is it possible to start with:",
                      "And once the prices for Gold children are correct, then change it to (remove Gold):",
                      "Is that technically possible?"
                    ],
                    "ul": [
                      {
                        "li": [
                          "Guest -- gt; applicable for Gold/Platinum/C2000",
                          "Child -- gt; applicable for Platinum/C2000"
                        ]
                      },
                      {
                        "li": "Child -- gt; applicable for Gold/Platinum/C2000"
                      },
                      {
                        "li": "Child -- gt; applicable for Platinum/C2000"
                      }
                    ],
                    "_id": "1983190",
                    "_author": "klm62414",
                    "_created": "Thu, 3 Jan 2019 15:48:00 +0100"
                  },
                  {
                    "p": {
                      "a": {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x008229",
                        "_class": "user-hover",
                        "_rel": "x008229",
                        "__text": "Chinnachami, Naveen (ITCDEC) - KLM"
                      },
                      "__text": "Hi \n, copy for 'Price' column for eligible customers is known. We want to have a seperate copy per tier level (see last 3 acceptance criterias). If you have any questions about this, please let me know."
                    },
                    "_id": "1983886",
                    "_author": "klm62414",
                    "_created": "Fri, 4 Jan 2019 09:58:34 +0100"
                  },
                  {
                    "p": {
                      "a": {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x008229",
                        "_class": "user-hover",
                        "_rel": "x008229",
                        "__text": "Chinnachami, Naveen (ITCDEC) - KLM"
                      },
                      "__text": "Hi \n, I just discussed the 'child warning'. We keep it like it is; exclude FB Gold for this warning."
                    },
                    "_id": "1984187",
                    "_author": "klm62414",
                    "_created": "Fri, 4 Jan 2019 11:16:49 +0100"
                  },
                  {
                    "p": {
                      "a": {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm62414",
                        "_class": "user-hover",
                        "_rel": "klm62414",
                        "__text": "Horst, Boyke van der (PSIM EC) - KLM"
                      },
                      "__text": "Hi \n, currently we don't receive any of these messages from CASA. \"Platinum benefit\"  amp; \"Gold benefit\"   amp; \"Club 2000 benefit\".We just receive as 0 price offer."
                    },
                    "_id": "1984209",
                    "_author": "x008229",
                    "_created": "Fri, 4 Jan 2019 11:24:12 +0100"
                  },
                  {
                    "p": [
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x008229",
                          "_class": "user-hover",
                          "_rel": "x008229",
                          "__text": "Chinnachami, Naveen (ITCDEC) - KLM"
                        },
                        "__text": "Hi \n, yes I know. Part of this feature is to change the 0 to text. Now the copy is known. Can you check with CASA?"
                      },
                      "Change of plans: it will be \"Elite Plus benefit\" for all, because we cannot distuingish Ultimate  amp; Skipper yet."
                    ],
                    "_id": "1984223",
                    "_author": "klm62414",
                    "_created": "Fri, 4 Jan 2019 11:27:40 +0100"
                  },
                  {
                    "p": [
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm62414",
                          "_class": "user-hover",
                          "_rel": "klm62414",
                          "__text": "Horst, Boyke van der (PSIM EC) - KLM"
                        },
                        "__text": "Hi \n, just checked with CASA team, for all the products CASA can only deliver price  details and not any messages like the one you have stated above. Also it is not the CASA responsibility to deliver such messages."
                      },
                      "Also from FE perspective, PRDS can make some changes like this but again when BW or any other consumer expects, then it is difficult to give them in AO API.",
                      "",
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x073618",
                          "_class": "user-hover",
                          "_rel": "x073618",
                          "__text": "Pallanti, Ravitej (ITCDEC) - KLM"
                        },
                        "__text": "FYI"
                      }
                    ],
                    "_id": "1984845",
                    "_author": "x008229",
                    "_created": "Fri, 4 Jan 2019 15:46:11 +0100"
                  },
                  {
                    "p": {
                      "a": [
                        {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x008229",
                          "_class": "user-hover",
                          "_rel": "x008229",
                          "__text": "Chinnachami, Naveen (ITCDEC) - KLM"
                        },
                        {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x073618",
                          "_class": "user-hover",
                          "_rel": "x073618",
                          "__text": "Pallanti, Ravitej (ITCDEC) - KLM"
                        }
                      ],
                      "__text": "Hi \n, \n, we discussed this during the last refinement. It was possible, only I had to check which copy we want to display. I think this must be done in AO API."
                    },
                    "_id": "1984864",
                    "_author": "klm62414",
                    "_created": "Fri, 4 Jan 2019 15:54:06 +0100"
                  },
                  {
                    "p": {
                      "a": {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm62414",
                        "_class": "user-hover",
                        "_rel": "klm62414",
                        "__text": "Horst, Boyke van der (PSIM EC) - KLM"
                      },
                      "__text": "Hi \n, this needs to be discussed again as i see no source to get these copy to provide in AO API."
                    },
                    "_id": "1984971",
                    "_author": "x008229",
                    "_created": "Fri, 4 Jan 2019 16:30:00 +0100"
                  },
                  {
                    "p": {
                      "a": {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x008229",
                        "_class": "user-hover",
                        "_rel": "x008229",
                        "__text": "Chinnachami, Naveen (ITCDEC) - KLM"
                      },
                      "__text": "Hi \n, when can we discuss this?"
                    },
                    "_id": "1988546",
                    "_author": "klm62414",
                    "_created": "Tue, 8 Jan 2019 11:18:19 +0100"
                  },
                  {
                    "p": {
                      "a": {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm62414",
                        "_class": "user-hover",
                        "_rel": "klm62414",
                        "__text": "Horst, Boyke van der (PSIM EC) - KLM"
                      },
                      "__text": "Hi \n, i have scheduled a meeting for tomorrow."
                    },
                    "_id": "1988741",
                    "_author": "x008229",
                    "_created": "Tue, 8 Jan 2019 11:52:44 +0100"
                  },
                  {
                    "p": [
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm62414",
                          "_class": "user-hover",
                          "_rel": "klm62414",
                          "__text": "Horst, Boyke van der (PSIM EC) - KLM"
                        },
                        "__text": "Hi \n, we have the lounge improvements Jira in 10.3. Both frontend and backend."
                      },
                      "We are yet to receive the final copy of the final design from you to build the FE jira.",
                      "In 10.3 we will be taking the scope defined in PI.",
                      {
                        "br": [
                          "",
                          "",
                          "",
                          ""
                        ],
                        "__text": "- gt;Show FB Gold/Platinum/C2000/Ultimate/Skipper with green check mark\n - gt; offer Silver discount to all other passengers in PNR next to FB Platinum/Gold/C2000/Ultimate/Skipper;\n - gt; Show \"Invite Guest\" warning for FB Gold/Platinum/C2000/Ultimate/Skipper, for touchpoints without \"Invite Guest\" functionality;\n - gt; Show \"Invite Guest\" warning for FB Platinum/C2000/Ultimate/Skipper (when not-logged-in), for touchpoints with \"Invite Guest\" functionality;\n - gt; Show \"Children\" warning for FB Platinum/C2000/Ultimate/Skipper;"
                      },
                      "",
                      "We will create a new Jira for the below new scope. In today's meeting we will discuss on the below requirement.",
                      "- gt; Show copy \"Elite Plus benefit\" in 'Price' column for FB Platinum/Gold/C2000",
                      {
                        "a": [
                          {
                            "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x078782",
                            "_class": "user-hover",
                            "_rel": "x078782",
                            "__text": "Chauderon, Arnaud (PCBN) - KLM"
                          },
                          {
                            "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x073618",
                            "_class": "user-hover",
                            "_rel": "x073618",
                            "__text": "Pallanti, Ravitej (ITCDEC) - KLM"
                          }
                        ],
                        "__text": "FYI \n,"
                      }
                    ],
                    "_id": "1990631",
                    "_author": "x008229",
                    "_created": "Wed, 9 Jan 2019 09:45:36 +0100"
                  },
                  {
                    "p": [
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x008229",
                          "_class": "user-hover",
                          "_rel": "x008229",
                          "__text": "Chinnachami, Naveen (ITCDEC) - KLM"
                        },
                        "__text": "Hi \n, the copy is final and is written in the description. I am chasing a designer to create new designs based on the new requirements, but that is difficult because our designer is already full with other work. Does design needs to be created in Sketch? Do you have a (dedicated) designer for Productshop?"
                      },
                      "Will \"Elite Plus benefit\" also be part of Sprint 10.3?"
                    ],
                    "_id": "1990764",
                    "_author": "klm62414",
                    "_created": "Wed, 9 Jan 2019 10:16:27 +0100"
                  },
                  {
                    "p": [
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm62414",
                          "_class": "user-hover",
                          "_rel": "klm62414",
                          "__text": "Horst, Boyke van der (PSIM EC) - KLM"
                        },
                        "__text": "Hi \n, i was requesting for the final mock screens and not the messages. As a stake holder we want this from you to see how exactly it should be shown."
                      },
                      "\"Elite Plus benefit\" will not be covered as we need to discuss further on this topic. Right now there is no source to get this information."
                    ],
                    "_id": "1991410",
                    "_author": "x008229",
                    "_created": "Wed, 9 Jan 2019 12:19:31 +0100"
                  },
                  {
                    "p": {
                      "a": {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x008229",
                        "_class": "user-hover",
                        "_rel": "x008229",
                        "__text": "Chinnachami, Naveen (ITCDEC) - KLM"
                      },
                      "__text": "Hi \n, I added the mock screens I created. This is not validated by a designer yet. I am now looking for a designer to finalize it. But with these screens you already have an idea how it would look like."
                    },
                    "_id": "1991512",
                    "_author": "klm62414",
                    "_created": "Wed, 9 Jan 2019 13:07:11 +0100"
                  },
                  {
                    "p": {
                      "a": {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm62414",
                        "_class": "user-hover",
                        "_rel": "klm62414",
                        "__text": "Horst, Boyke van der (PSIM EC) - KLM"
                      },
                      "__text": "Hi \n, can you please add the final screen shot that we discussed in the meeting."
                    },
                    "_id": "1992784",
                    "_author": "x008229",
                    "_created": "Thu, 10 Jan 2019 02:07:31 +0100"
                  },
                  {
                    "p": "Just added the design made by Teun",
                    "_id": "1993087",
                    "_author": "klm62414",
                    "_created": "Thu, 10 Jan 2019 09:36:45 +0100"
                  },
                  {
                    "p": {
                      "a": {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x008229",
                        "_class": "user-hover",
                        "_rel": "x008229",
                        "__text": "Chinnachami, Naveen (ITCDEC) - KLM"
                      },
                      "__text": "Hi \n, I just checked the \"Elite plus benefit\" copy with Theo. He mentioned that this should come from CLE. I will create a user story for Lounge API team to pick this up. After that you can pick it up. In the mean time please do not show the 0 price, just keep the column empty."
                    },
                    "_id": "1995658",
                    "_author": "klm62414",
                    "_created": "Fri, 11 Jan 2019 09:48:48 +0100"
                  },
                  {
                    "p": [
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm62414",
                          "_class": "user-hover",
                          "_rel": "klm62414",
                          "__text": "Horst, Boyke van der (PSIM EC) - KLM"
                        }
                      },
                      "I move this feature as stretch due to additionnal requirements not discussed during PIPE10"
                    ],
                    "_id": "1995972",
                    "_author": "x078782",
                    "_created": "Fri, 11 Jan 2019 10:50:05 +0100"
                  },
                  {
                    "p": {
                      "a": {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x078782",
                        "_class": "user-hover",
                        "_rel": "x078782",
                        "__text": "Chauderon, Arnaud (PCBN) - KLM"
                      },
                      "__text": "Hi \n, only showing the copy \"Elite plus benefit\" is not clear yet. The rest is. So I assume only the possible development for \"Elite plus benefit\" is moved to stretch......? The other things (which are clear) will still be picked up in next Sprint (3)...?"
                    },
                    "_id": "1996241",
                    "_author": "klm62414",
                    "_created": "Fri, 11 Jan 2019 11:41:12 +0100"
                  },
                  {
                    "p": [
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm62414",
                          "_class": "user-hover",
                          "_rel": "klm62414",
                          "__text": "Horst, Boyke van der (PSIM EC) - KLM"
                        },
                        "__text": "Hi \n, currently the Guest and Child message in AO API response are handled at the offer level. When it comes to a bought lounge product, the lounge is not offered from CASA and there are no offers in AO API."
                      },
                      "On these scenario there will be no Guest or Child message."
                    ],
                    "_id": "2019270",
                    "_author": "x008229",
                    "_created": "Wed, 23 Jan 2019 17:16:14 +0100"
                  },
                  {
                    "p": [
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x008229",
                          "_class": "user-hover",
                          "_rel": "x008229",
                          "__text": "Chinnachami, Naveen (ITCDEC) - KLM"
                        },
                        "__text": ", so when still one pax (in PNR) is eligible to buy access the messages are returned? Like in this situation:"
                      },
                      "Will the Guest and Child message returned in this case?"
                    ],
                    "ul": {
                      "li": [
                        "FB Platinum = has access (no offer)",
                        "FB Silver = bought access (no offer)",
                        "FB Explorer = bought access (no offer)",
                        "non-FB = did not buy access (offer)"
                      ]
                    },
                    "_id": "2019746",
                    "_author": "klm62414",
                    "_created": "Thu, 24 Jan 2019 09:05:11 +0100"
                  },
                  {
                    "p": {
                      "a": {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm62414",
                        "_class": "user-hover",
                        "_rel": "klm62414",
                        "__text": "Horst, Boyke van der (PSIM EC) - KLM"
                      },
                      "__text": "Hi \n, when the offer is just for non fb then there are no messages to him. It will be available only when there is GOLD/PLATINUM/C2000 that has an offer"
                    },
                    "_id": "2020104",
                    "_author": "x008229",
                    "_created": "Thu, 24 Jan 2019 10:13:57 +0100"
                  },
                  {
                    "p": {
                      "a": {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x008229",
                        "_class": "user-hover",
                        "_rel": "x008229",
                        "__text": "Chinnachami, Naveen (ITCDEC) - KLM"
                      },
                      "__text": "Hi \n, but Gold/Platinum/C2000 will never have an offer, right? They are already eligible........"
                    },
                    "_id": "2020467",
                    "_author": "klm62414",
                    "_created": "Thu, 24 Jan 2019 11:08:15 +0100"
                  },
                  {
                    "p": {
                      "a": {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm62414",
                        "_class": "user-hover",
                        "_rel": "klm62414",
                        "__text": "Horst, Boyke van der (PSIM EC) - KLM"
                      },
                      "__text": "Hi \n, no for GOLD/PLATINUM/C2000 we get the offer from CASA but with 0 price."
                    },
                    "_id": "2021737",
                    "_author": "x008229",
                    "_created": "Thu, 24 Jan 2019 15:23:31 +0100"
                  },
                  {
                    "p": {
                      "a": {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x008229",
                        "_class": "user-hover",
                        "_rel": "x008229",
                        "__text": "Chinnachami, Naveen (ITCDEC) - KLM"
                      },
                      "__text": "Hi \n, so then there is always an offer returned from CASA for Gold/plat/c2000, right? And in this response you will get the messages...."
                    },
                    "_id": "2021904",
                    "_author": "klm62414",
                    "_created": "Thu, 24 Jan 2019 15:50:08 +0100"
                  },
                  {
                    "p": {
                      "a": {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm62414",
                        "_class": "user-hover",
                        "_rel": "klm62414",
                        "__text": "Horst, Boyke van der (PSIM EC) - KLM"
                      },
                      "__text": "Hi \n, Yes as far the offer is returned from CASA, the messages will be shown in the API  amp; PRDS."
                    },
                    "_id": "2022717",
                    "_author": "x008229",
                    "_created": "Fri, 25 Jan 2019 01:39:27 +0100"
                  }
                ]
              },
              "issuelinks": {
                "issuelinktype": {
                  "name": "Child-Issue",
                  "outwardlinks": {
                    "issuelink": [
                      {
                        "issuekey": {
                          "_id": "1126062",
                          "__text": "CASA-4861"
                        }
                      },
                      {
                        "issuekey": {
                          "_id": "1117645",
                          "__text": "PRDS-8033"
                        }
                      },
                      {
                        "issuekey": {
                          "_id": "1117651",
                          "__text": "PRDS-8034"
                        }
                      },
                      {
                        "issuekey": {
                          "_id": "1117672",
                          "__text": "PRDS-8035"
                        }
                      },
                      {
                        "issuekey": {
                          "_id": "1117675",
                          "__text": "PRDS-8036"
                        }
                      }
                    ],
                    "_description": "is parent task of"
                  },
                  "_id": "10040"
                }
              },
              "attachments": {
                "attachment": [
                  {
                    "_id": "684262",
                    "_name": "Lounge access PAX overview web.png",
                    "_size": "669394",
                    "_author": "klm62414",
                    "_created": "Thu, 10 Jan 2019 09:33:45 +0100"
                  },
                  {
                    "_id": "683615",
                    "_name": "Lounge access notification 5b-example.jpg",
                    "_size": "139675",
                    "_author": "klm62414",
                    "_created": "Wed, 9 Jan 2019 13:05:55 +0100"
                  },
                  {
                    "_id": "675751",
                    "_name": "Paid lounge prices_cash-miles.png",
                    "_size": "27172",
                    "_author": "klm62414",
                    "_created": "Tue, 18 Dec 2018 15:05:33 +0100"
                  }
                ]
              },
              "subtasks": "",
              "customfields": {
                "customfield": [
                  {
                    "customfieldname": "Acceptance Criteria",
                    "customfieldvalues": {
                      "customfieldvalue": {
                        "div": [
                          {
                            "div": [
                              {
                                "b": "FB Gold/Platinum/C2000 already access",
                                "_class": "panelHeader",
                                "_style": "border-bottom-width: 1px;"
                              },
                              {
                                "p": {
                                  "font": [
                                    {
                                      "b": "Given:",
                                      "_color": "#205081"
                                    },
                                    {
                                      "b": "When:",
                                      "_color": "#205081"
                                    },
                                    {
                                      "b": "Then:",
                                      "_color": "#205081"
                                    },
                                    {
                                      "b": "And:",
                                      "_color": "#205081"
                                    },
                                    {
                                      "b": "And:",
                                      "_color": "#205081"
                                    }
                                  ],
                                  "br": [
                                    "",
                                    "",
                                    "",
                                    ""
                                  ],
                                  "__text": "customer is on Seat  amp; Baggage page\n \n there is/are a FB Gold/Platinum/C2000 in the PNR\n \n display this/these passengers in 'Lounge access'\n \n show a green check mark\n \n show \"Elite Plus benefit\" in column 'Price'."
                                },
                                "_class": "panelContent"
                              }
                            ],
                            "_class": "panel",
                            "_style": "border-width: 1px;"
                          },
                          {
                            "div": [
                              {
                                "b": "Silver discount for all pax in PNR with FB Gold/Platinum/C2000",
                                "_class": "panelHeader",
                                "_style": "border-bottom-width: 1px;"
                              },
                              {
                                "p": {
                                  "font": [
                                    {
                                      "b": "Given:",
                                      "_color": "#205081"
                                    },
                                    {
                                      "b": "When:",
                                      "_color": "#205081"
                                    },
                                    {
                                      "b": "Then:",
                                      "_color": "#205081"
                                    },
                                    {
                                      "b": "And:",
                                      "_color": "#205081"
                                    }
                                  ],
                                  "br": [
                                    "",
                                    "",
                                    ""
                                  ],
                                  "__text": "a multipax PNR\n \n there is/are FB Gold/Platinum/C2000 in the PNR\n \n offer 'lounge access' with FB Silver price to all pax which are eligible for offer\n \n show FB Silver offline price as 'Airport price'."
                                },
                                "_class": "panelContent"
                              }
                            ],
                            "_class": "panel",
                            "_style": "border-width: 1px;"
                          },
                          {
                            "div": [
                              {
                                "b": "'Invite Guest' warning for API consumer without Invite Guest funtionality - 1",
                                "_class": "panelHeader",
                                "_style": "border-bottom-width: 1px;"
                              },
                              {
                                "p": {
                                  "font": [
                                    {
                                      "b": "Given:",
                                      "_color": "#205081"
                                    },
                                    {
                                      "b": "When:",
                                      "_color": "#205081"
                                    },
                                    {
                                      "b": "Then:",
                                      "_color": "#205081"
                                    }
                                  ],
                                  "br": [
                                    "",
                                    ""
                                  ],
                                  "__text": "an API Consumer whithout 'Invite Guest' option uses AO API for lounge offer\n \n there is a FB Gold/Platinum/C2000 pax in the PNR\n \n return 'copy01a'."
                                },
                                "_class": "panelContent"
                              }
                            ],
                            "_class": "panel",
                            "_style": "border-width: 1px;"
                          },
                          {
                            "div": [
                              {
                                "b": {
                                  "del": "'Invite Guest' warning for API consumer without Invite Guest funtionality - 2"
                                },
                                "_class": "panelHeader",
                                "_style": "border-bottom-width: 1px;"
                              },
                              {
                                "p": {
                                  "font": [
                                    {
                                      "b": "Given:",
                                      "_color": "#205081"
                                    },
                                    {
                                      "b": "When:",
                                      "_color": "#205081"
                                    },
                                    {
                                      "b": "Then:",
                                      "_color": "#205081"
                                    }
                                  ],
                                  "del": [
                                    "an API Consumer whithout 'Invite Guest' option uses AO API for lounge offer",
                                    "there is a FB Ultimate/Skipper pax in the PNR",
                                    "return 'copy01b'."
                                  ],
                                  "br": [
                                    "",
                                    ""
                                  ]
                                },
                                "_class": "panelContent"
                              }
                            ],
                            "_class": "panel",
                            "_style": "border-width: 1px;"
                          },
                          {
                            "div": [
                              {
                                "b": "'Invite Guest' warning for API consumer with Invite Guest funtionality - 1",
                                "_class": "panelHeader",
                                "_style": "border-bottom-width: 1px;"
                              },
                              {
                                "p": {
                                  "font": [
                                    {
                                      "b": "Given:",
                                      "_color": "#205081"
                                    },
                                    {
                                      "b": "When:",
                                      "_color": "#205081"
                                    },
                                    {
                                      "b": "And:",
                                      "_color": "#205081"
                                    },
                                    {
                                      "b": "Then:",
                                      "_color": "#205081"
                                    }
                                  ],
                                  "br": [
                                    "",
                                    "",
                                    ""
                                  ],
                                  "__text": "an API Consumer which has 'Invite Guest' option uses AO API for lounge offer\n \n there is a FB Gold/Platinum/C2000 pax in the PNR\n \n the customer is not-logged in as FB Gold/Platinum/C2000 pax\n \n return 'copy02a'."
                                },
                                "_class": "panelContent"
                              }
                            ],
                            "_class": "panel",
                            "_style": "border-width: 1px;"
                          },
                          {
                            "div": [
                              {
                                "b": {
                                  "del": "'Invite Guest' warning for API consumer with Invite Guest funtionality - 2"
                                },
                                "_class": "panelHeader",
                                "_style": "border-bottom-width: 1px;"
                              },
                              {
                                "p": {
                                  "font": [
                                    {
                                      "b": "Given:",
                                      "_color": "#205081"
                                    },
                                    {
                                      "b": "When:",
                                      "_color": "#205081"
                                    },
                                    {
                                      "b": "And:",
                                      "_color": "#205081"
                                    },
                                    {
                                      "b": "Then:",
                                      "_color": "#205081"
                                    }
                                  ],
                                  "del": [
                                    "an API Consumer which has 'Invite Guest' option uses AO API for lounge offer",
                                    "there is a FB Ultimate/Skipper pax in the PNR",
                                    "the customer is not-logged in as FB Ultimate/Skipper pax",
                                    "return 'copy02b'."
                                  ],
                                  "br": [
                                    "",
                                    "",
                                    ""
                                  ]
                                },
                                "_class": "panelContent"
                              }
                            ],
                            "_class": "panel",
                            "_style": "border-width: 1px;"
                          },
                          {
                            "div": [
                              {
                                "b": {
                                  "del": "Skipper/Ultimate",
                                  "__text": "'Children' warning for FB Platinum/C2000/"
                                },
                                "_class": "panelHeader",
                                "_style": "border-bottom-width: 1px;"
                              },
                              {
                                "p": {
                                  "font": [
                                    {
                                      "b": "Given:",
                                      "_color": "#205081"
                                    },
                                    {
                                      "b": "When:",
                                      "_color": "#205081"
                                    },
                                    {
                                      "b": "Then:",
                                      "_color": "#205081"
                                    }
                                  ],
                                  "br": [
                                    "",
                                    ""
                                  ],
                                  "del": "Skipper/Ultimate",
                                  "__text": "an API Consumer uses AO API for lounge offer\n \n there is a FB Platinum/C2000/\n pax\n \n return the 'children' warning."
                                },
                                "_class": "panelContent"
                              }
                            ],
                            "_class": "panel",
                            "_style": "border-width: 1px;"
                          },
                          {
                            "div": [
                              {
                                "b": "Show warnings in Seat  amp; Baggage page",
                                "_class": "panelHeader",
                                "_style": "border-bottom-width: 1px;"
                              },
                              {
                                "p": {
                                  "font": [
                                    {
                                      "b": "Given:",
                                      "_color": "#205081"
                                    },
                                    {
                                      "b": "When:",
                                      "_color": "#205081"
                                    },
                                    {
                                      "b": "Then:",
                                      "_color": "#205081"
                                    }
                                  ],
                                  "br": [
                                    "",
                                    ""
                                  ],
                                  "__text": "customer is on Seat  amp; Baggage page\n \n a warning (Invite Guest/Children) is applicable\n \n display this/these messages with the corresponding pax(s)."
                                },
                                "_class": "panelContent"
                              }
                            ],
                            "_class": "panel",
                            "_style": "border-width: 1px;"
                          },
                          {
                            "div": [
                              {
                                "b": "FB Platinum, copy in 'Price' column",
                                "_class": "panelHeader",
                                "_style": "border-bottom-width: 1px;"
                              },
                              {
                                "p": {
                                  "font": [
                                    {
                                      "b": "Given:",
                                      "_color": "#205081"
                                    },
                                    {
                                      "b": "When:",
                                      "_color": "#205081"
                                    },
                                    {
                                      "b": "Then:",
                                      "_color": "#205081"
                                    }
                                  ],
                                  "br": [
                                    "",
                                    ""
                                  ],
                                  "__text": "customer is on Seat  amp; Baggage page\n \n there is a FB Platinum in the PNR\n \n show copy \"Elite Plus benefit\" in 'Price' column"
                                },
                                "_class": "panelContent"
                              }
                            ],
                            "_class": "panel",
                            "_style": "border-width: 1px;"
                          },
                          {
                            "div": [
                              {
                                "b": "FB Gold, copy in 'Price' column",
                                "_class": "panelHeader",
                                "_style": "border-bottom-width: 1px;"
                              },
                              {
                                "p": {
                                  "font": [
                                    {
                                      "b": "Given:",
                                      "_color": "#205081"
                                    },
                                    {
                                      "b": "When:",
                                      "_color": "#205081"
                                    },
                                    {
                                      "b": "Then:",
                                      "_color": "#205081"
                                    }
                                  ],
                                  "br": [
                                    "",
                                    ""
                                  ],
                                  "__text": "customer is on Seat  amp; Baggage page\n \n there is a FB Gold in the PNR\n \n show copy \"Elite Plus benefit\" in 'Price' column"
                                },
                                "_class": "panelContent"
                              }
                            ],
                            "_class": "panel",
                            "_style": "border-width: 1px;"
                          },
                          {
                            "div": [
                              {
                                "b": "FB C2000, copy in 'Price' column",
                                "_class": "panelHeader",
                                "_style": "border-bottom-width: 1px;"
                              },
                              {
                                "p": {
                                  "font": [
                                    {
                                      "b": "Given:",
                                      "_color": "#205081"
                                    },
                                    {
                                      "b": "When:",
                                      "_color": "#205081"
                                    },
                                    {
                                      "b": "Then:",
                                      "_color": "#205081"
                                    }
                                  ],
                                  "br": [
                                    "",
                                    ""
                                  ],
                                  "__text": "customer is on Seat  amp; Baggage page\n \n there is a FB C2000 in the PNR\n \n show copy \"Elite Plus benefit\" in 'Price' column"
                                },
                                "_class": "panelContent"
                              }
                            ],
                            "_class": "panel",
                            "_style": "border-width: 1px;"
                          }
                        ]
                      }
                    },
                    "_id": "customfield_10030",
                    "_key": "com.atlassian.jira.plugin.system.customfieldtypes:textarea"
                  },
                  {
                    "customfieldname": "Approvals",
                    "customfieldvalues": "",
                    "_id": "customfield_12550",
                    "_key": "com.atlassian.servicedesk.approvals-plugin:sd-approvals"
                  },
                  {
                    "customfieldname": "Date of First Response",
                    "customfieldvalues": {
                      "customfieldvalue": "Wed, 28 Nov 2018 13:08:11 +0100"
                    },
                    "_id": "customfield_10041",
                    "_key": "com.atlassian.jira.ext.charting:firstresponsedate"
                  },
                  {
                    "customfieldname": "Development",
                    "customfieldvalues": "",
                    "_id": "customfield_14350",
                    "_key": "com.atlassian.jira.plugins.jira-development-integration-plugin:devsummary"
                  },
                  {
                    "customfieldname": "Global Rank",
                    "customfieldvalues": {
                      "customfieldvalue": "1|i44k5r:"
                    },
                    "_id": "customfield_11051",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Global Rank (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10150",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Participants",
                    "customfieldvalues": {
                      "customfieldvalue": [
                        "x078782",
                        "x008229",
                        "klm62414"
                      ]
                    },
                    "_id": "customfield_10020",
                    "_key": "com.atlassian.jira.toolkit:participants"
                  },
                  {
                    "customfieldname": "Rank",
                    "customfieldvalues": {
                      "customfieldvalue": "1|hywc6d:"
                    },
                    "_id": "customfield_11050",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Rank (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10552",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Ranking",
                    "customfieldvalues": {
                      "customfieldvalue": "1|i44fuf:"
                    },
                    "_id": "customfield_11052",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Ranking (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10553",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Time in Status",
                    "customfieldvalues": "",
                    "_id": "customfield_10042",
                    "_key": "com.atlassian.jira.ext.charting:timeinstatus"
                  }
                ]
              }
            },
            {
              "title": "[PREPANC-362] [BW] - Display the seatmap even when there is no seat offer",
              "link": "https://jira.devnet.klm.com/browse/PREPANC-362",
              "project": {
                "_id": "26267",
                "_key": "PREPANC",
                "__text": "PREPANC"
              },
              "description": {
                "h2": [
                  {
                    "a": {
                      "_name": "Context%2Fsummary"
                    },
                    "__text": "Context/ summary"
                  },
                  {
                    "a": {
                      "_name": "Why"
                    },
                    "__text": "Why"
                  },
                  {
                    "a": {
                      "_name": "How"
                    },
                    "__text": "How"
                  }
                ],
                "p": [
                  "Currently on Blueweb, when there is not seat offer, because of eligibility or simply because the flight is full, customers cannot see the seatmap.",
                  "This is especially an issue in the check-in flow as customers should at least be able to check the seat they were assigned to.",
                  "Improve the customer experience by being more transparent.",
                  ""
                ],
                "h3": [
                  {
                    "a": {
                      "_name": "Details"
                    },
                    "__text": "Details"
                  },
                  {
                    "a": {
                      "_name": "Impacton%23calls"
                    },
                    "__text": "Impact on # calls"
                  },
                  {
                    "a": {
                      "_name": "Highleveleffortestimate"
                    },
                    "__text": "High level effort estimate"
                  }
                ],
                "ul": {
                  "li": "to be detailed"
                },
                "div": {
                  "table": {
                    "tbody": {
                      "tr": [
                        {
                          "th": [
                            {
                              "_class": "confluenceTh",
                              "__text": "Application / Product team"
                            },
                            {
                              "_class": "confluenceTh",
                              "__text": "Product Owner"
                            },
                            {
                              "_class": "confluenceTh",
                              "__text": "Effort estimation #sprints"
                            }
                          ]
                        },
                        {
                          "td": [
                            {
                              "_class": "confluenceTd",
                              "__text": "BlueWeb ancillaries"
                            },
                            {
                              "a": {
                                "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=M417297",
                                "_class": "user-hover",
                                "_rel": "M417297",
                                "__text": "Lemert, Margot (AMSSE) - AF"
                              },
                              "_class": "confluenceTd"
                            },
                            {
                              "_class": "confluenceTd"
                            }
                          ]
                        },
                        {
                          "td": [
                            {
                              "_class": "confluenceTd",
                              "__text": "NGKA"
                            },
                            {
                              "a": {
                                "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm62684",
                                "_class": "user-hover",
                                "_rel": "klm62684",
                                "__text": "Klein Douwel, Daan (AMSSZ) - KLM"
                              },
                              "_class": "confluenceTd"
                            },
                            {
                              "_class": "confluenceTd"
                            }
                          ]
                        },
                        {
                          "td": [
                            {
                              "_class": "confluenceTd",
                              "__text": "Ancillary offer api"
                            },
                            {
                              "a": {
                                "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x078782",
                                "_class": "user-hover",
                                "_rel": "x078782",
                                "__text": "Chauderon, Arnaud (PCBN) - KLM"
                              },
                              "_class": "confluenceTd"
                            },
                            {
                              "_class": "confluenceTd"
                            }
                          ]
                        }
                      ]
                    },
                    "_class": "confluenceTable"
                  },
                  "_class": "table-wrap"
                }
              },
              "environment": "",
              "key": {
                "_id": "1105655",
                "__text": "PREPANC-362"
              },
              "summary": "[BW] - Display the seatmap even when there is no seat offer",
              "type": {
                "_id": "2",
                "_iconUrl": "https://jira.devnet.klm.com/secure/viewavatar?size=xsmall avatarId=13921 avatarType=issuetype",
                "__text": "New Feature"
              },
              "priority": {
                "_id": "3",
                "_iconUrl": "https://jira.devnet.klm.com/images/icons/priorities/major.svg",
                "__text": "Major"
              },
              "status": {
                "_id": "6",
                "_iconUrl": "https://jira.devnet.klm.com/images/icons/statuses/closed.png",
                "_description": "The issue is considered finished, the resolution is correct. Issues which are closed can be reopened.",
                "__text": "Closed"
              },
              "statusCategory": {
                "_id": "3",
                "_key": "done",
                "_colorName": "green"
              },
              "resolution": {
                "_id": "6",
                "__text": "Done"
              },
              "assignee": {
                "_username": "M417297",
                "__text": "Lemert, Margot (AMSSE) - AF"
              },
              "reporter": {
                "_username": "M417297",
                "__text": "Lemert, Margot (AMSSE) - AF"
              },
              "labels": {
                "label": [
                  "sprint10.1",
                  "sprint10.2",
                  "sprint10.3",
                  "sprint10.4",
                  "sprint10.6"
                ]
              },
              "created": "Mon, 3 Dec 2018 10:22:54 +0100",
              "updated": "Tue, 12 Mar 2019 10:25:41 +0100",
              "resolved": "Tue, 12 Mar 2019 10:25:41 +0100",
              "fixVersion": "PI10",
              "component": [
                "Ancillary Offer",
                "Blueweb Ancillaries",
                "NGKA"
              ],
              "due": "",
              "votes": "0",
              "watches": "1",
              "comments": {
                "comment": {
                  "p": [
                    {
                      "a": {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=M417297",
                        "_class": "user-hover",
                        "_rel": "M417297",
                        "__text": "Lemert, Margot (AMSSE) - AF"
                      }
                    },
                    {
                      "a": {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x085431",
                        "_class": "user-hover",
                        "_rel": "x085431",
                        "__text": "Verweij, Sander (ITCDEC) - KLM"
                      }
                    },
                    "Work completed on Seat map offer, Can you check and confirm me that it works as expected",
                    "Thanks"
                  ],
                  "_id": "2052810",
                  "_author": "x078782",
                  "_created": "Fri, 8 Feb 2019 11:35:54 +0100"
                }
              },
              "issuelinks": {
                "issuelinktype": {
                  "name": "Child-Issue",
                  "outwardlinks": {
                    "issuelink": [
                      {
                        "issuekey": {
                          "_id": "1079138",
                          "__text": "BWA-1822"
                        }
                      },
                      {
                        "issuekey": {
                          "_id": "1109219",
                          "__text": "BWA-1929"
                        }
                      },
                      {
                        "issuekey": {
                          "_id": "1109220",
                          "__text": "BWA-1930"
                        }
                      },
                      {
                        "issuekey": {
                          "_id": "1011770",
                          "__text": "PRDS-7650"
                        }
                      },
                      {
                        "issuekey": {
                          "_id": "1084264",
                          "__text": "PRDS-7910"
                        }
                      },
                      {
                        "issuekey": {
                          "_id": "1111322",
                          "__text": "PRDS-8019"
                        }
                      },
                      {
                        "issuekey": {
                          "_id": "1132238",
                          "__text": "PRDS-8094"
                        }
                      }
                    ],
                    "_description": "is parent task of"
                  },
                  "inwardlinks": {
                    "issuelink": [
                      {
                        "issuekey": {
                          "_id": "978256",
                          "__text": "DIGITAL-1738"
                        }
                      },
                      {
                        "issuekey": {
                          "_id": "1082024",
                          "__text": "DIGITAL-1993"
                        }
                      }
                    ],
                    "_description": "is child task of"
                  },
                  "_id": "10040"
                }
              },
              "attachments": "",
              "subtasks": "",
              "customfields": {
                "customfield": [
                  {
                    "customfieldname": "Approvals",
                    "customfieldvalues": "",
                    "_id": "customfield_12550",
                    "_key": "com.atlassian.servicedesk.approvals-plugin:sd-approvals"
                  },
                  {
                    "customfieldname": "Date of First Response",
                    "customfieldvalues": {
                      "customfieldvalue": "Fri, 8 Feb 2019 11:35:54 +0100"
                    },
                    "_id": "customfield_10041",
                    "_key": "com.atlassian.jira.ext.charting:firstresponsedate"
                  },
                  {
                    "customfieldname": "Development",
                    "customfieldvalues": "",
                    "_id": "customfield_14350",
                    "_key": "com.atlassian.jira.plugins.jira-development-integration-plugin:devsummary"
                  },
                  {
                    "customfieldname": "Global Rank",
                    "customfieldvalues": {
                      "customfieldvalue": "1|i45kdr:"
                    },
                    "_id": "customfield_11051",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Global Rank (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10150",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Participants",
                    "customfieldvalues": {
                      "customfieldvalue": [
                        "x078782",
                        "M417297"
                      ]
                    },
                    "_id": "customfield_10020",
                    "_key": "com.atlassian.jira.toolkit:participants"
                  },
                  {
                    "customfieldname": "Rank",
                    "customfieldvalues": {
                      "customfieldvalue": "1|zzbtm4:"
                    },
                    "_id": "customfield_11050",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Rank (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10552",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Ranking",
                    "customfieldvalues": {
                      "customfieldvalue": "1|i45g2n:"
                    },
                    "_id": "customfield_11052",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Ranking (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10553",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Time in Status",
                    "customfieldvalues": "",
                    "_id": "customfield_10042",
                    "_key": "com.atlassian.jira.ext.charting:timeinstatus"
                  }
                ]
              }
            },
            {
              "title": "[PREPANC-372] Show a warning in A2h when max capacity has been reached for paid lounge",
              "link": "https://jira.devnet.klm.com/browse/PREPANC-372",
              "project": {
                "_id": "26267",
                "_key": "PREPANC",
                "__text": "PREPANC"
              },
              "description": {
                "p": [
                  {
                    "b": "VALUE/RANKING"
                  },
                  "We now offer paid lounge access based on a forecasting module. This forecasting predict whether the lounge is empty enough to actually sell any lounge access. We have an occupancy limit of 65%. This means that if the lounge is 65% full we can't offer any paid lounge via any touch points.",
                  "Apart from that how the paid lounge works in A2H, Mobile and ICI we also have BVN system where agents can always offer lounge visitors paid access. This system doesn't take the forecasting into account.",
                  "",
                  "Show a warning in A2h when max capacity has been reached for paid lounge.",
                  "",
                  "",
                  "",
                  ""
                ],
                "div": {
                  "table": {
                    "tbody": {
                      "tr": [
                        {
                          "th": [
                            {
                              "_class": "confluenceTh",
                              "__text": "BV"
                            },
                            {
                              "_class": "confluenceTh",
                              "__text": "RR"
                            },
                            {
                              "_class": "confluenceTh",
                              "__text": "TC"
                            },
                            {
                              "_class": "confluenceTh",
                              "__text": "COD"
                            },
                            {
                              "_class": "confluenceTh",
                              "__text": "Effort"
                            },
                            {
                              "_class": "confluenceTh",
                              "__text": "WSJF"
                            }
                          ]
                        },
                        {
                          "td": [
                            {
                              "_class": "confluenceTd",
                              "__text": "13"
                            },
                            {
                              "_class": "confluenceTd",
                              "__text": "0"
                            },
                            {
                              "_class": "confluenceTd",
                              "__text": "20"
                            },
                            {
                              "_class": "confluenceTd",
                              "__text": "2"
                            },
                            {
                              "_class": "confluenceTd",
                              "__text": "2"
                            },
                            {
                              "b": "13.67",
                              "_class": "confluenceTd"
                            }
                          ]
                        }
                      ]
                    },
                    "_class": "confluenceTable"
                  },
                  "_class": "table-wrap"
                },
                "h2": [
                  {
                    "a": {
                      "_name": "Currentsituation%3A%C2%A0"
                    },
                    "b": "Current situation:"
                  },
                  {
                    "a": {
                      "_name": "What%3A"
                    },
                    "b": "What:"
                  },
                  {
                    "a": {
                      "_name": "Why%3A"
                    },
                    "b": "Why:"
                  }
                ],
                "ul": [
                  {
                    "li": [
                      {
                        "b": "CASA",
                        "__text": ": Introduce a warning with the PaidLounge offer, when response from CLE contains AvailabilityReason.reason=MAXIMUM_CAPACITY_REACHED"
                      },
                      {
                        "b": "AncilliaryOfferAPI",
                        "__text": ": Return the warning received from CASA to the front-end application."
                      }
                    ]
                  },
                  {
                    "li": [
                      "We want to impower agents to make a decision on whether they can offer a paid lounge access or not and use the forecast as additional input for them to make a decision.",
                      "We would like to increase the paid lounge sells when if the lounge is not as full.",
                      "by providing this feature we will have a close feedback loop from agents of which time during the day we can just adjust (lower or higher) the max occupancy.",
                      "Encourage agents to sell paid lounge via A2H instead of BVN. At the moment they think the paid lounge feature is always broken."
                    ]
                  }
                ]
              },
              "environment": "",
              "key": {
                "_id": "1108424",
                "__text": "PREPANC-372"
              },
              "summary": "Show a warning in A2h when max capacity has been reached for paid lounge",
              "type": {
                "_id": "2",
                "_iconUrl": "https://jira.devnet.klm.com/secure/viewavatar?size=xsmall avatarId=13921 avatarType=issuetype",
                "__text": "New Feature"
              },
              "priority": {
                "_id": "3",
                "_iconUrl": "https://jira.devnet.klm.com/images/icons/priorities/major.svg",
                "__text": "Major"
              },
              "status": {
                "_id": "5",
                "_iconUrl": "https://jira.devnet.klm.com/images/icons/statuses/resolved.png",
                "_description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
                "__text": "Resolved"
              },
              "statusCategory": {
                "_id": "3",
                "_key": "done",
                "_colorName": "green"
              },
              "resolution": {
                "_id": "6",
                "__text": "Done"
              },
              "assignee": {
                "_username": "x078782",
                "__text": "Chauderon, Arnaud (PCBN) - KLM"
              },
              "reporter": {
                "_username": "klm83619",
                "__text": "Abdel-Sadek Abdel-Ghani Mohamed, Nurah (AMSSZ) - KLM"
              },
              "labels": {
                "label": "sprint10.5"
              },
              "created": "Tue, 4 Dec 2018 14:07:37 +0100",
              "updated": "Thu, 21 Feb 2019 11:05:37 +0100",
              "resolved": "Thu, 21 Feb 2019 11:05:37 +0100",
              "version": "PI10",
              "fixVersion": "PI10",
              "component": [
                "Ancillary Offer",
                "CASA"
              ],
              "due": "",
              "votes": "0",
              "watches": "3",
              "comments": {
                "comment": [
                  {
                    "p": {
                      "a": [
                        {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x078782",
                          "_class": "user-hover",
                          "_rel": "x078782",
                          "__text": "Chauderon, Arnaud (PCBN) - KLM"
                        },
                        {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm83619",
                          "_class": "user-hover",
                          "_rel": "klm83619",
                          "__text": "Abdel-Sadek Abdel-Ghani Mohamed, Nurah (AMSSZ) - KLM"
                        }
                      ],
                      "__text": ": is this clear enough for you, is it ready for PI planning? cc"
                    },
                    "_id": "1948017",
                    "_author": "klm30128",
                    "_created": "Thu, 6 Dec 2018 11:50:46 +0100"
                  },
                  {
                    "p": [
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm30128",
                          "_class": "user-hover",
                          "_rel": "klm30128",
                          "__text": "Spaanderman, Louise (ITCDEC) - KLM"
                        }
                      },
                      "",
                      "Need is clear, solution has to be defined but clear enough for planning"
                    ],
                    "_id": "1948361",
                    "_author": "x078782",
                    "_created": "Thu, 6 Dec 2018 13:25:04 +0100"
                  },
                  {
                    "p": {
                      "a": {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x078782",
                        "_class": "user-hover",
                        "_rel": "x078782",
                        "__text": "Chauderon, Arnaud (PCBN) - KLM"
                      },
                      "__text": "Hi \n, EPIC is now assigned to me, because Nurah left the KLM. I see your last comment. Is it already clear enough to pick this up in sprint 10.5?"
                    },
                    "_id": "2048040",
                    "_author": "klm62414",
                    "_created": "Wed, 6 Feb 2019 15:47:42 +0100"
                  },
                  {
                    "p": [
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm62414",
                          "_class": "user-hover",
                          "_rel": "klm62414",
                          "__text": "Horst, Boyke van der (PSIM EC) - KLM"
                        }
                      },
                      {
                        "img": {
                          "_class": "emoticon",
                          "_src": "https://jira.devnet.klm.com/images/icons/emoticons/wink.png",
                          "_height": "16",
                          "_width": "16",
                          "_align": "absmiddle",
                          "_alt": "",
                          "_border": "0"
                        },
                        "__text": "YEs we had PI prep and planning since december"
                      },
                      "But thanks"
                    ],
                    "_id": "2050300",
                    "_author": "x078782",
                    "_created": "Thu, 7 Feb 2019 13:49:27 +0100"
                  },
                  {
                    "p": {
                      "a": {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x078782",
                        "_class": "user-hover",
                        "_rel": "x078782",
                        "__text": "Chauderon, Arnaud (PCBN) - KLM"
                      },
                      "__text": "Hi \n, merci"
                    },
                    "_id": "2051954",
                    "_author": "klm62414",
                    "_created": "Fri, 8 Feb 2019 08:51:49 +0100"
                  }
                ]
              },
              "issuelinks": {
                "issuelinktype": [
                  {
                    "name": "Child-Issue",
                    "outwardlinks": {
                      "issuelink": [
                        {
                          "issuekey": {
                            "_id": "1154799",
                            "__text": "CASA-4915"
                          }
                        },
                        {
                          "issuekey": {
                            "_id": "1117620",
                            "__text": "PRDS-8030"
                          }
                        }
                      ],
                      "_description": "is parent task of"
                    },
                    "_id": "10040"
                  },
                  {
                    "name": "Depend",
                    "inwardlinks": {
                      "issuelink": {
                        "issuekey": {
                          "_id": "1105942",
                          "__text": "DIGITAL-2078"
                        }
                      },
                      "_description": "is depended on by"
                    },
                    "_id": "10020"
                  }
                ]
              },
              "attachments": "",
              "subtasks": "",
              "customfields": {
                "customfield": [
                  {
                    "customfieldname": "Approvals",
                    "customfieldvalues": "",
                    "_id": "customfield_12550",
                    "_key": "com.atlassian.servicedesk.approvals-plugin:sd-approvals"
                  },
                  {
                    "customfieldname": "Business Value",
                    "customfieldvalues": {
                      "customfieldvalue": "13.0"
                    },
                    "_id": "customfield_10083",
                    "_key": "com.atlassian.jira.plugin.system.customfieldtypes:float"
                  },
                  {
                    "customfieldname": "Date of First Response",
                    "customfieldvalues": {
                      "customfieldvalue": "Thu, 6 Dec 2018 11:50:46 +0100"
                    },
                    "_id": "customfield_10041",
                    "_key": "com.atlassian.jira.ext.charting:firstresponsedate"
                  },
                  {
                    "customfieldname": "Development",
                    "customfieldvalues": "",
                    "_id": "customfield_14350",
                    "_key": "com.atlassian.jira.plugins.jira-development-integration-plugin:devsummary"
                  },
                  {
                    "customfieldname": "Global Rank",
                    "customfieldvalues": {
                      "customfieldvalue": "1|i4600v:"
                    },
                    "_id": "customfield_11051",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Global Rank (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10150",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Job size",
                    "customfieldvalues": {
                      "customfieldvalue": "3.0"
                    },
                    "_id": "customfield_12152",
                    "_key": "com.atlassian.jira.plugin.system.customfieldtypes:float"
                  },
                  {
                    "customfieldname": "Parent Link",
                    "customfieldvalues": {
                      "customfieldvalue": {
                        "__cdata": " DIGITAL-2078 "
                      }
                    },
                    "_id": "customfield_11650",
                    "_key": "com.atlassian.jpo:jpo-custom-field-parent"
                  },
                  {
                    "customfieldname": "Participants",
                    "customfieldvalues": {
                      "customfieldvalue": [
                        "klm83619",
                        "x078782",
                        "klm62414",
                        "klm30128"
                      ]
                    },
                    "_id": "customfield_10020",
                    "_key": "com.atlassian.jira.toolkit:participants"
                  },
                  {
                    "customfieldname": "RROE",
                    "customfieldvalues": {
                      "customfieldvalue": "0.0"
                    },
                    "_id": "customfield_12153",
                    "_key": "com.atlassian.jira.plugin.system.customfieldtypes:float"
                  },
                  {
                    "customfieldname": "Rank",
                    "customfieldvalues": {
                      "customfieldvalue": "1|zzc82c:"
                    },
                    "_id": "customfield_11050",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Rank (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10552",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Ranking",
                    "customfieldvalues": {
                      "customfieldvalue": "1|i45vpr:"
                    },
                    "_id": "customfield_11052",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Ranking (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10553",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Time Criticality",
                    "customfieldvalues": {
                      "customfieldvalue": "20.0"
                    },
                    "_id": "customfield_12154",
                    "_key": "com.atlassian.jira.plugin.system.customfieldtypes:float"
                  },
                  {
                    "customfieldname": "Time in Status",
                    "customfieldvalues": "",
                    "_id": "customfield_10042",
                    "_key": "com.atlassian.jira.ext.charting:timeinstatus"
                  },
                  {
                    "customfieldname": "User Value",
                    "customfieldvalues": {
                      "customfieldvalue": "8.0"
                    },
                    "_id": "customfield_13250",
                    "_key": "com.atlassian.jira.plugin.system.customfieldtypes:float"
                  },
                  {
                    "customfieldname": "WSJF",
                    "customfieldvalues": {
                      "customfieldvalue": "13.67"
                    },
                    "_id": "customfield_12160",
                    "_key": "com.innovalog.jmcf.jira-misc-custom-fields:calculated-number-field"
                  }
                ]
              }
            },
            {
              "title": "[PREPANC-376] [SEAT MAP] : New Aircraft 787",
              "link": "https://jira.devnet.klm.com/browse/PREPANC-376",
              "project": {
                "_id": "26267",
                "_key": "PREPANC",
                "__text": "PREPANC"
              },
              "description": "",
              "environment": "",
              "key": {
                "_id": "1113430",
                "__text": "PREPANC-376"
              },
              "summary": "[SEAT MAP] : New Aircraft 787",
              "type": {
                "_id": "2",
                "_iconUrl": "https://jira.devnet.klm.com/secure/viewavatar?size=xsmall avatarId=13921 avatarType=issuetype",
                "__text": "New Feature"
              },
              "priority": {
                "_id": "3",
                "_iconUrl": "https://jira.devnet.klm.com/images/icons/priorities/major.svg",
                "__text": "Major"
              },
              "status": {
                "_id": "6",
                "_iconUrl": "https://jira.devnet.klm.com/images/icons/statuses/closed.png",
                "_description": "The issue is considered finished, the resolution is correct. Issues which are closed can be reopened.",
                "__text": "Closed"
              },
              "statusCategory": {
                "_id": "3",
                "_key": "done",
                "_colorName": "green"
              },
              "resolution": {
                "_id": "6",
                "__text": "Done"
              },
              "assignee": {
                "_username": "x078782",
                "__text": "Chauderon, Arnaud (PCBN) - KLM"
              },
              "reporter": {
                "_username": "x078782",
                "__text": "Chauderon, Arnaud (PCBN) - KLM"
              },
              "labels": {
                "label": "sprint10.3"
              },
              "created": "Fri, 7 Dec 2018 11:14:26 +0100",
              "updated": "Mon, 28 Jan 2019 09:24:35 +0100",
              "resolved": "Mon, 28 Jan 2019 09:24:35 +0100",
              "fixVersion": "PI10",
              "component": "Ancillary Offer",
              "due": "",
              "votes": "0",
              "watches": "0",
              "issuelinks": {
                "issuelinktype": {
                  "name": "Child-Issue",
                  "outwardlinks": {
                    "issuelink": [
                      {
                        "issuekey": {
                          "_id": "1087836",
                          "__text": "PRDS-7914"
                        }
                      },
                      {
                        "issuekey": {
                          "_id": "1087952",
                          "__text": "PRDS-7916"
                        }
                      }
                    ],
                    "_description": "is parent task of"
                  },
                  "inwardlinks": {
                    "issuelink": {
                      "issuekey": {
                        "_id": "1082024",
                        "__text": "DIGITAL-1993"
                      }
                    },
                    "_description": "is child task of"
                  },
                  "_id": "10040"
                }
              },
              "attachments": "",
              "subtasks": "",
              "customfields": {
                "customfield": [
                  {
                    "customfieldname": "Approvals",
                    "customfieldvalues": "",
                    "_id": "customfield_12550",
                    "_key": "com.atlassian.servicedesk.approvals-plugin:sd-approvals"
                  },
                  {
                    "customfieldname": "Development",
                    "customfieldvalues": "",
                    "_id": "customfield_14350",
                    "_key": "com.atlassian.jira.plugins.jira-development-integration-plugin:devsummary"
                  },
                  {
                    "customfieldname": "Global Rank",
                    "customfieldvalues": {
                      "customfieldvalue": "1|i46uv3:"
                    },
                    "_id": "customfield_11051",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Global Rank (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10150",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Participants",
                    "customfieldvalues": {
                      "customfieldvalue": "x078782"
                    },
                    "_id": "customfield_10020",
                    "_key": "com.atlassian.jira.toolkit:participants"
                  },
                  {
                    "customfieldname": "Rank",
                    "customfieldvalues": {
                      "customfieldvalue": "1|zzd05w:"
                    },
                    "_id": "customfield_11050",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Rank (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10552",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Ranking",
                    "customfieldvalues": {
                      "customfieldvalue": "1|i46qjz:"
                    },
                    "_id": "customfield_11052",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Ranking (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10553",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Time in Status",
                    "customfieldvalues": "",
                    "_id": "customfield_10042",
                    "_key": "com.atlassian.jira.ext.charting:timeinstatus"
                  }
                ]
              }
            },
            {
              "title": "[PREPANC-377] Infinie span API Migration",
              "link": "https://jira.devnet.klm.com/browse/PREPANC-377",
              "project": {
                "_id": "26267",
                "_key": "PREPANC",
                "__text": "PREPANC"
              },
              "description": "",
              "environment": "",
              "key": {
                "_id": "1113644",
                "__text": "PREPANC-377"
              },
              "summary": "Infinie span API Migration",
              "type": {
                "_id": "2",
                "_iconUrl": "https://jira.devnet.klm.com/secure/viewavatar?size=xsmall avatarId=13921 avatarType=issuetype",
                "__text": "New Feature"
              },
              "priority": {
                "_id": "3",
                "_iconUrl": "https://jira.devnet.klm.com/images/icons/priorities/major.svg",
                "__text": "Major"
              },
              "status": {
                "_id": "5",
                "_iconUrl": "https://jira.devnet.klm.com/images/icons/statuses/resolved.png",
                "_description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
                "__text": "Resolved"
              },
              "statusCategory": {
                "_id": "3",
                "_key": "done",
                "_colorName": "green"
              },
              "resolution": {
                "_id": "6",
                "__text": "Done"
              },
              "assignee": {
                "_username": "x078782",
                "__text": "Chauderon, Arnaud (PCBN) - KLM"
              },
              "reporter": {
                "_username": "x078782",
                "__text": "Chauderon, Arnaud (PCBN) - KLM"
              },
              "labels": {
                "label": "sprint10.5"
              },
              "created": "Fri, 7 Dec 2018 11:57:30 +0100",
              "updated": "Fri, 22 Feb 2019 13:15:29 +0100",
              "resolved": "Fri, 22 Feb 2019 13:15:26 +0100",
              "fixVersion": "PI10",
              "component": "Ancillary Offer",
              "due": "",
              "votes": "0",
              "watches": "1",
              "comments": {
                "comment": {
                  "p": [
                    "Scope:",
                    "",
                    "Motivation:"
                  ],
                  "ul": [
                    {
                      "li": [
                        "Create new infinispan version",
                        "Deploy on test",
                        {
                          "ul": {
                            "li": "This is special to test how we will be performing live deployment and reduce business downtime"
                          },
                          "__text": "Deploy on AE/Loadtest environment, create loadtest setup  amp; execute"
                        },
                        "Golive"
                      ]
                    },
                    {
                      "li": [
                        "Server will be out-of-support",
                        "New infinispan version helps easy switch/sync, when one of instance goes down"
                      ]
                    }
                  ],
                  "_id": "1951458",
                  "_author": "x085085",
                  "_created": "Fri, 7 Dec 2018 12:02:33 +0100"
                }
              },
              "issuelinks": {
                "issuelinktype": {
                  "name": "Child-Issue",
                  "outwardlinks": {
                    "issuelink": {
                      "issuekey": {
                        "_id": "1148377",
                        "__text": "PRDS-8137"
                      }
                    },
                    "_description": "is parent task of"
                  },
                  "_id": "10040"
                }
              },
              "attachments": "",
              "subtasks": "",
              "customfields": {
                "customfield": [
                  {
                    "customfieldname": "Approvals",
                    "customfieldvalues": "",
                    "_id": "customfield_12550",
                    "_key": "com.atlassian.servicedesk.approvals-plugin:sd-approvals"
                  },
                  {
                    "customfieldname": "Date of First Response",
                    "customfieldvalues": {
                      "customfieldvalue": "Fri, 7 Dec 2018 12:02:33 +0100"
                    },
                    "_id": "customfield_10041",
                    "_key": "com.atlassian.jira.ext.charting:firstresponsedate"
                  },
                  {
                    "customfieldname": "Development",
                    "customfieldvalues": "",
                    "_id": "customfield_14350",
                    "_key": "com.atlassian.jira.plugins.jira-development-integration-plugin:devsummary"
                  },
                  {
                    "customfieldname": "Global Rank",
                    "customfieldvalues": {
                      "customfieldvalue": "1|i46w6n:"
                    },
                    "_id": "customfield_11051",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Global Rank (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10150",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Participants",
                    "customfieldvalues": {
                      "customfieldvalue": [
                        "x078782",
                        "x085085"
                      ]
                    },
                    "_id": "customfield_10020",
                    "_key": "com.atlassian.jira.toolkit:participants"
                  },
                  {
                    "customfieldname": "Rank",
                    "customfieldvalues": {
                      "customfieldvalue": "1|zzd1bg:"
                    },
                    "_id": "customfield_11050",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Rank (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10552",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Ranking",
                    "customfieldvalues": {
                      "customfieldvalue": "1|i46rvj:"
                    },
                    "_id": "customfield_11052",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Ranking (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10553",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Story Points",
                    "customfieldvalues": {
                      "customfieldvalue": "8.0"
                    },
                    "_id": "customfield_10551",
                    "_key": "com.atlassian.jira.plugin.system.customfieldtypes:float"
                  },
                  {
                    "customfieldname": "Time in Status",
                    "customfieldvalues": "",
                    "_id": "customfield_10042",
                    "_key": "com.atlassian.jira.ext.charting:timeinstatus"
                  }
                ]
              }
            },
            {
              "title": "[PREPANC-378] RI service migration v6 to v7",
              "link": "https://jira.devnet.klm.com/browse/PREPANC-378",
              "project": {
                "_id": "26267",
                "_key": "PREPANC",
                "__text": "PREPANC"
              },
              "description": "",
              "environment": "",
              "key": {
                "_id": "1113673",
                "__text": "PREPANC-378"
              },
              "summary": "RI service migration v6 to v7",
              "type": {
                "_id": "2",
                "_iconUrl": "https://jira.devnet.klm.com/secure/viewavatar?size=xsmall avatarId=13921 avatarType=issuetype",
                "__text": "New Feature"
              },
              "priority": {
                "_id": "3",
                "_iconUrl": "https://jira.devnet.klm.com/images/icons/priorities/major.svg",
                "__text": "Major"
              },
              "status": {
                "_id": "5",
                "_iconUrl": "https://jira.devnet.klm.com/images/icons/statuses/resolved.png",
                "_description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
                "__text": "Resolved"
              },
              "statusCategory": {
                "_id": "3",
                "_key": "done",
                "_colorName": "green"
              },
              "resolution": {
                "_id": "6",
                "__text": "Done"
              },
              "assignee": {
                "_username": "x078782",
                "__text": "Chauderon, Arnaud (PCBN) - KLM"
              },
              "reporter": {
                "_username": "x008229",
                "__text": "Chinnachami, Naveen (ITCDEC) - KLM"
              },
              "labels": {
                "label": [
                  "sprint10.6",
                  "stretch"
                ]
              },
              "created": "Fri, 7 Dec 2018 12:08:26 +0100",
              "updated": "Fri, 22 Feb 2019 13:40:11 +0100",
              "resolved": "Fri, 22 Feb 2019 13:40:11 +0100",
              "fixVersion": "PI10",
              "component": "Ancillary Offer",
              "due": "",
              "votes": "0",
              "watches": "2",
              "comments": {
                "comment": {
                  "p": [
                    "We explored the options to migrate from provideIndividualData service to new flying blue service like provideFBProfile or other CBS services.",
                    "But we feel there is no clear guideline or a functional service which can be used to directly replace the existing provideIndividualData. Moving from v6 to v7 will not be helpful either.",
                    "So after exploring all the options - since there is no deadline listed for phase out of provideIndividualData service, we will keep using the old service unless there is a perfect replacement service or force full deadline for phase out of existing service.",
                    "Hence closed the related user story after discussing with Product owner."
                  ],
                  "_id": "2070716",
                  "_author": "t719360",
                  "_created": "Mon, 18 Feb 2019 11:27:31 +0100"
                }
              },
              "issuelinks": {
                "issuelinktype": {
                  "name": "Child-Issue",
                  "outwardlinks": {
                    "issuelink": {
                      "issuekey": {
                        "_id": "1101904",
                        "__text": "PRDS-7965"
                      }
                    },
                    "_description": "is parent task of"
                  },
                  "_id": "10040"
                }
              },
              "attachments": "",
              "subtasks": "",
              "customfields": {
                "customfield": [
                  {
                    "customfieldname": "Approvals",
                    "customfieldvalues": "",
                    "_id": "customfield_12550",
                    "_key": "com.atlassian.servicedesk.approvals-plugin:sd-approvals"
                  },
                  {
                    "customfieldname": "Date of First Response",
                    "customfieldvalues": {
                      "customfieldvalue": "Mon, 18 Feb 2019 11:27:31 +0100"
                    },
                    "_id": "customfield_10041",
                    "_key": "com.atlassian.jira.ext.charting:firstresponsedate"
                  },
                  {
                    "customfieldname": "Development",
                    "customfieldvalues": "",
                    "_id": "customfield_14350",
                    "_key": "com.atlassian.jira.plugins.jira-development-integration-plugin:devsummary"
                  },
                  {
                    "customfieldname": "Global Rank",
                    "customfieldvalues": {
                      "customfieldvalue": "1|i46wd3:"
                    },
                    "_id": "customfield_11051",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Global Rank (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10150",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Participants",
                    "customfieldvalues": {
                      "customfieldvalue": [
                        "x078782",
                        "x008229",
                        "x076382"
                      ]
                    },
                    "_id": "customfield_10020",
                    "_key": "com.atlassian.jira.toolkit:participants"
                  },
                  {
                    "customfieldname": "Rank",
                    "customfieldvalues": {
                      "customfieldvalue": "1|zzd1gc:"
                    },
                    "_id": "customfield_11050",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Rank (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10552",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Ranking",
                    "customfieldvalues": {
                      "customfieldvalue": "1|i46s1z:"
                    },
                    "_id": "customfield_11052",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Ranking (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10553",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Time in Status",
                    "customfieldvalues": "",
                    "_id": "customfield_10042",
                    "_key": "com.atlassian.jira.ext.charting:timeinstatus"
                  }
                ]
              }
            },
            {
              "title": "[PREPANC-381] FB Miles as payment option bundles",
              "link": "https://jira.devnet.klm.com/browse/PREPANC-381",
              "project": {
                "_id": "26267",
                "_key": "PREPANC",
                "__text": "PREPANC"
              },
              "description": {
                "p": [
                  {
                    "b": "General explanation feature"
                  },
                  "This feature is to develop the capability to offer bundles with Flying blue miles",
                  {
                    "b": "Impacted teams"
                  },
                  "CASA",
                  {
                    "b": "Solution"
                  },
                  "CASA will retrieve miles price from Hachiko per product and will bundle the two.",
                  {
                    "b": "Dependencies"
                  },
                  "None",
                  {
                    "b": "Requirements and matching user stories"
                  },
                  {
                    "b": "Acceptance criteria (scenario's)"
                  }
                ],
                "div": [
                  {
                    "table": {
                      "tbody": {
                        "tr": [
                          {
                            "th": [
                              {
                                "_class": "confluenceTh",
                                "__text": "Team"
                              },
                              {
                                "_class": "confluenceTh",
                                "__text": "Requirement/User story"
                              },
                              {
                                "_class": "confluenceTh",
                                "__text": "User story link"
                              }
                            ]
                          },
                          {
                            "td": [
                              {
                                "_class": "confluenceTd",
                                "__text": "CASA"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "Provide miles offer"
                              },
                              {
                                "a": {
                                  "del": "CASA-4840",
                                  "_href": "https://jira.devnet.klm.com/browse/CASA-4840",
                                  "_title": "Provide miles offer for bundles ",
                                  "_class": "issue-link",
                                  "_data-issue-key": "CASA-4840"
                                },
                                "_class": "confluenceTd"
                              }
                            ]
                          }
                        ]
                      },
                      "_class": "confluenceTable"
                    },
                    "_class": "table-wrap"
                  },
                  {
                    "table": {
                      "tbody": {
                        "tr": [
                          {
                            "th": [
                              {
                                "_class": "confluenceTh",
                                "__text": "#"
                              },
                              {
                                "_class": "confluenceTh",
                                "__text": "Window"
                              },
                              {
                                "_class": "confluenceTh",
                                "__text": "OC"
                              },
                              {
                                "_class": "confluenceTh",
                                "__text": "pax #"
                              },
                              {
                                "_class": "confluenceTh",
                                "__text": "Segment"
                              },
                              {
                                "_class": "confluenceTh",
                                "__text": "Route"
                              },
                              {
                                "_class": "confluenceTh",
                                "__text": "Output"
                              }
                            ]
                          },
                          {
                            "td": [
                              {
                                "_class": "confluenceTd",
                                "__text": "1"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "RES"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "KL"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "1"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "Single"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "AMS-BCN"
                              },
                              {
                                "br": [
                                  "",
                                  ""
                                ],
                                "_class": "confluenceTd",
                                "__text": "\"More comfort\" bundle offer including FB miles price\n \"The Classics\" bundle offer including FB miles price\n \"Treat Yourself\"bundle offer including FB miles price"
                              }
                            ]
                          },
                          {
                            "td": [
                              {
                                "_class": "confluenceTd",
                                "__text": "2"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "RES"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "KL"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "1"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "Single"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "JFK-AMS"
                              },
                              {
                                "br": "",
                                "_class": "confluenceTd",
                                "__text": "\"More comfort\" bundle offer including FB miles price\n \"The Classics\" bundle offer including FB miles price"
                              }
                            ]
                          }
                        ]
                      },
                      "_class": "confluenceTable"
                    },
                    "_class": "table-wrap"
                  }
                ]
              },
              "environment": "",
              "key": {
                "_id": "1115068",
                "__text": "PREPANC-381"
              },
              "summary": "FB Miles as payment option bundles",
              "type": {
                "_id": "2",
                "_iconUrl": "https://jira.devnet.klm.com/secure/viewavatar?size=xsmall avatarId=13921 avatarType=issuetype",
                "__text": "New Feature"
              },
              "priority": {
                "_id": "3",
                "_iconUrl": "https://jira.devnet.klm.com/images/icons/priorities/major.svg",
                "__text": "Major"
              },
              "status": {
                "_id": "5",
                "_iconUrl": "https://jira.devnet.klm.com/images/icons/statuses/resolved.png",
                "_description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
                "__text": "Resolved"
              },
              "statusCategory": {
                "_id": "3",
                "_key": "done",
                "_colorName": "green"
              },
              "resolution": {
                "_id": "6",
                "__text": "Done"
              },
              "assignee": {
                "_username": "klm47358",
                "__text": "Hoeij, Karin van (PSIM EC) - KLM"
              },
              "reporter": {
                "_username": "klm69949",
                "__text": "Rijken, Daniel (PSIM EC) - KLM"
              },
              "labels": {
                "label": [
                  "sprint10.2",
                  "sprint10.3"
                ]
              },
              "created": "Mon, 10 Dec 2018 11:03:18 +0100",
              "updated": "Mon, 28 Jan 2019 10:33:33 +0100",
              "resolved": "Mon, 28 Jan 2019 09:26:12 +0100",
              "fixVersion": "PI10",
              "component": "CASA",
              "due": "",
              "votes": "0",
              "watches": "2",
              "issuelinks": {
                "issuelinktype": {
                  "name": "Child-Issue",
                  "outwardlinks": {
                    "issuelink": [
                      {
                        "issuekey": {
                          "_id": "1115232",
                          "__text": "CASA-4840"
                        }
                      },
                      {
                        "issuekey": {
                          "_id": "1117547",
                          "__text": "PRDS-8029"
                        }
                      }
                    ],
                    "_description": "is parent task of"
                  },
                  "_id": "10040"
                }
              },
              "attachments": "",
              "subtasks": "",
              "customfields": {
                "customfield": [
                  {
                    "customfieldname": "Approvals",
                    "customfieldvalues": "",
                    "_id": "customfield_12550",
                    "_key": "com.atlassian.servicedesk.approvals-plugin:sd-approvals"
                  },
                  {
                    "customfieldname": "Development",
                    "customfieldvalues": "",
                    "_id": "customfield_14350",
                    "_key": "com.atlassian.jira.plugins.jira-development-integration-plugin:devsummary"
                  },
                  {
                    "customfieldname": "Epic Link",
                    "customfieldvalues": {
                      "customfieldvalue": "DIGITAL-1795"
                    },
                    "_id": "customfield_10750",
                    "_key": "com.pyxis.greenhopper.jira:gh-epic-link"
                  },
                  {
                    "customfieldname": "Global Rank",
                    "customfieldvalues": {
                      "customfieldvalue": "1|i474yn:"
                    },
                    "_id": "customfield_11051",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Global Rank (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10150",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Participants",
                    "customfieldvalues": {
                      "customfieldvalue": [
                        "klm47358",
                        "klm69949"
                      ]
                    },
                    "_id": "customfield_10020",
                    "_key": "com.atlassian.jira.toolkit:participants"
                  },
                  {
                    "customfieldname": "Rank",
                    "customfieldvalues": {
                      "customfieldvalue": "1|zzd97o:"
                    },
                    "_id": "customfield_11050",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Rank (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10552",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Ranking",
                    "customfieldvalues": {
                      "customfieldvalue": "1|i470nj:"
                    },
                    "_id": "customfield_11052",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Ranking (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10553",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Time in Status",
                    "customfieldvalues": "",
                    "_id": "customfield_10042",
                    "_key": "com.atlassian.jira.ext.charting:timeinstatus"
                  }
                ]
              }
            },
            {
              "title": "[PREPANC-382] Multi pax bundle offers",
              "link": "https://jira.devnet.klm.com/browse/PREPANC-382",
              "project": {
                "_id": "26267",
                "_key": "PREPANC",
                "__text": "PREPANC"
              },
              "description": {
                "p": [
                  {
                    "b": "General explanation feature"
                  },
                  {
                    "br": [
                      "",
                      ""
                    ],
                    "__text": "This feature is to develop the capability to offer bundles to multi pax PNR's. \n  \n At least the following Pax combinations should be supported:"
                  },
                  {
                    "b": "Impacted teams"
                  },
                  "CASA, KL Mobile, NBA",
                  {
                    "b": "Requirements and matching user stories"
                  },
                  {
                    "b": "Acceptance criteria / user stories"
                  },
                  "",
                  ""
                ],
                "ul": {
                  "li": [
                    "Adult + child",
                    "Adult + infant",
                    "2 or more adults",
                    "FQTV + child",
                    "FQTV + infant",
                    "FQTV + adult",
                    "2 or more FQTV's"
                  ]
                },
                "div": [
                  {
                    "table": {
                      "tbody": {
                        "tr": [
                          {
                            "th": [
                              {
                                "_class": "confluenceTh",
                                "__text": "Team"
                              },
                              {
                                "_class": "confluenceTh",
                                "__text": "requirement/user story"
                              },
                              {
                                "_class": "confluenceTh",
                                "__text": "user story link"
                              }
                            ]
                          },
                          {
                            "td": [
                              {
                                "_class": "confluenceTd",
                                "__text": "CASA"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "Enable multi pax offers backend"
                              },
                              {
                                "a": {
                                  "del": "CASA-4841",
                                  "_href": "https://jira.devnet.klm.com/browse/CASA-4841",
                                  "_title": "Enable bundle offer multi pax PNR",
                                  "_class": "issue-link",
                                  "_data-issue-key": "CASA-4841"
                                },
                                "_class": "confluenceTd"
                              }
                            ]
                          },
                          {
                            "td": [
                              {
                                "del": "KL Mobile",
                                "_class": "confluenceTd"
                              },
                              {
                                "del": "Enable multi pax offers front end",
                                "_class": "confluenceTd"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "--"
                              }
                            ]
                          }
                        ]
                      },
                      "_class": "confluenceTable"
                    },
                    "_class": "table-wrap"
                  },
                  {
                    "table": {
                      "tbody": {
                        "tr": [
                          {
                            "th": [
                              {
                                "_class": "confluenceTh",
                                "__text": "#"
                              },
                              {
                                "_class": "confluenceTh",
                                "__text": "Window"
                              },
                              {
                                "_class": "confluenceTh",
                                "__text": "OC"
                              },
                              {
                                "_class": "confluenceTh",
                                "__text": "Pax #"
                              },
                              {
                                "_class": "confluenceTh",
                                "__text": "Pax type"
                              },
                              {
                                "_class": "confluenceTh",
                                "__text": "Route"
                              },
                              {
                                "_class": "confluenceTh",
                                "__text": "Bundle offers"
                              }
                            ]
                          },
                          {
                            "td": [
                              {
                                "_class": "confluenceTd",
                                "__text": "1"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "RES"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "KL"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "2"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "Adult + adult"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "AMS-BCN"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "More comfort, Classics, Treat yourself"
                              }
                            ]
                          },
                          {
                            "td": [
                              {
                                "_class": "confluenceTd",
                                "__text": "2"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "RES"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "KL"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "3"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "Adult + FQTV + Child"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "ATL-AMS"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "More comfort, Classics"
                              }
                            ]
                          },
                          {
                            "td": [
                              {
                                "_class": "confluenceTd",
                                "__text": "3"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "RES"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "KL"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "2"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "FQTV + FQTV"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "JFK-AMS"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "More comfort, Classics"
                              }
                            ]
                          },
                          {
                            "td": [
                              {
                                "_class": "confluenceTd",
                                "__text": "4"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "RES"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "KL"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "4"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "4 times Adult"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "MAD-AMS"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "More comfort, Classics"
                              }
                            ]
                          }
                        ]
                      },
                      "_class": "confluenceTable"
                    },
                    "_class": "table-wrap"
                  }
                ]
              },
              "environment": "",
              "key": {
                "_id": "1115595",
                "__text": "PREPANC-382"
              },
              "summary": "Multi pax bundle offers",
              "type": {
                "_id": "2",
                "_iconUrl": "https://jira.devnet.klm.com/secure/viewavatar?size=xsmall avatarId=13921 avatarType=issuetype",
                "__text": "New Feature"
              },
              "priority": {
                "_id": "3",
                "_iconUrl": "https://jira.devnet.klm.com/images/icons/priorities/major.svg",
                "__text": "Major"
              },
              "status": {
                "_id": "6",
                "_iconUrl": "https://jira.devnet.klm.com/images/icons/statuses/closed.png",
                "_description": "The issue is considered finished, the resolution is correct. Issues which are closed can be reopened.",
                "__text": "Closed"
              },
              "statusCategory": {
                "_id": "3",
                "_key": "done",
                "_colorName": "green"
              },
              "resolution": {
                "_id": "6",
                "__text": "Done"
              },
              "assignee": {
                "_username": "klm69949",
                "__text": "Rijken, Daniel (PSIM EC) - KLM"
              },
              "reporter": {
                "_username": "klm69949",
                "__text": "Rijken, Daniel (PSIM EC) - KLM"
              },
              "labels": {
                "label": [
                  "sprint10.3",
                  "sprint10.5"
                ]
              },
              "created": "Mon, 10 Dec 2018 14:03:50 +0100",
              "updated": "Wed, 13 Feb 2019 20:32:03 +0100",
              "resolved": "Wed, 13 Feb 2019 20:32:03 +0100",
              "fixVersion": "PI10",
              "component": [
                "CASA",
                "Mobile KL"
              ],
              "due": "",
              "votes": "0",
              "watches": "2",
              "comments": {
                "comment": [
                  {
                    "p": [
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm69949",
                          "_class": "user-hover",
                          "_rel": "klm69949",
                          "__text": "Rijken, Daniel (PSIM EC) - KLM"
                        }
                      },
                      "Can you link the the user stories of NBA and Mobile mentionned as component or update the component impacted",
                      "",
                      "Thanks"
                    ],
                    "_id": "2026050",
                    "_author": "x078782",
                    "_created": "Mon, 28 Jan 2019 09:29:32 +0100"
                  },
                  {
                    "p": {
                      "a": {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm69949",
                        "_class": "user-hover",
                        "_rel": "klm69949",
                        "__text": "Rijken, Daniel (PSIM EC) - KLM"
                      },
                      "__text": "Hi Daniel, as you are the feature owner, could you check in sprint 10.5 with Karin on the progress of testing on our side?"
                    },
                    "_id": "2026358",
                    "_author": "klm33687",
                    "_created": "Mon, 28 Jan 2019 10:31:58 +0100"
                  },
                  {
                    "p": {
                      "a": {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm33687",
                        "_class": "user-hover",
                        "_rel": "klm33687",
                        "__text": "Beekhuizen, Wouter (AMSSZ) - KLM"
                      },
                      "__text": "Yes, that was what Karin and I already agreed on from the start."
                    },
                    "_id": "2026391",
                    "_author": "klm69949",
                    "_created": "Mon, 28 Jan 2019 10:37:30 +0100"
                  },
                  {
                    "p": [
                      {
                        "a": [
                          {
                            "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm84553",
                            "_class": "user-hover",
                            "_rel": "klm84553",
                            "__text": "Raats, Nils (PSIM EC) - KLM"
                          },
                          {
                            "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x087145",
                            "_class": "user-hover",
                            "_rel": "x087145",
                            "__text": "Pachisia, Savita (ITCDEC) - KLM"
                          }
                        ],
                        "__text": "Can you link your user stories to this feature?"
                      },
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x078782",
                          "_class": "user-hover",
                          "_rel": "x078782",
                          "__text": "Chauderon, Arnaud (PCBN) - KLM"
                        },
                        "__text": "fyi"
                      }
                    ],
                    "_id": "2026398",
                    "_author": "klm69949",
                    "_created": "Mon, 28 Jan 2019 10:38:19 +0100"
                  },
                  {
                    "p": {
                      "a": {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm69949",
                        "_class": "user-hover",
                        "_rel": "klm69949",
                        "__text": "Rijken, Daniel (PSIM EC) - KLM"
                      },
                      "img": {
                        "_class": "emoticon",
                        "_src": "https://jira.devnet.klm.com/images/icons/emoticons/thumbs_up.png",
                        "_height": "16",
                        "_width": "16",
                        "_align": "absmiddle",
                        "_alt": "",
                        "_border": "0"
                      }
                    },
                    "_id": "2026590",
                    "_author": "klm33687",
                    "_created": "Mon, 28 Jan 2019 11:04:50 +0100"
                  }
                ]
              },
              "issuelinks": {
                "issuelinktype": {
                  "name": "Child-Issue",
                  "outwardlinks": {
                    "issuelink": [
                      {
                        "issuekey": {
                          "_id": "1090976",
                          "__text": "CHKOUT-12602"
                        }
                      },
                      {
                        "issuekey": {
                          "_id": "1115742",
                          "__text": "CASA-4841"
                        }
                      },
                      {
                        "issuekey": {
                          "_id": "1117538",
                          "__text": "PRDS-8028"
                        }
                      },
                      {
                        "issuekey": {
                          "_id": "1167606",
                          "__text": "CHKOUT-13038"
                        }
                      }
                    ],
                    "_description": "is parent task of"
                  },
                  "_id": "10040"
                }
              },
              "attachments": "",
              "subtasks": "",
              "customfields": {
                "customfield": [
                  {
                    "customfieldname": "Approvals",
                    "customfieldvalues": "",
                    "_id": "customfield_12550",
                    "_key": "com.atlassian.servicedesk.approvals-plugin:sd-approvals"
                  },
                  {
                    "customfieldname": "Date of First Response",
                    "customfieldvalues": {
                      "customfieldvalue": "Mon, 28 Jan 2019 09:29:32 +0100"
                    },
                    "_id": "customfield_10041",
                    "_key": "com.atlassian.jira.ext.charting:firstresponsedate"
                  },
                  {
                    "customfieldname": "Development",
                    "customfieldvalues": "",
                    "_id": "customfield_14350",
                    "_key": "com.atlassian.jira.plugins.jira-development-integration-plugin:devsummary"
                  },
                  {
                    "customfieldname": "Epic Link",
                    "customfieldvalues": {
                      "customfieldvalue": "DIGITAL-1795"
                    },
                    "_id": "customfield_10750",
                    "_key": "com.pyxis.greenhopper.jira:gh-epic-link"
                  },
                  {
                    "customfieldname": "Global Rank",
                    "customfieldvalues": {
                      "customfieldvalue": "1|i4787r:"
                    },
                    "_id": "customfield_11051",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Global Rank (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10150",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Participants",
                    "customfieldvalues": {
                      "customfieldvalue": [
                        "klm33687",
                        "x078782",
                        "klm69949"
                      ]
                    },
                    "_id": "customfield_10020",
                    "_key": "com.atlassian.jira.toolkit:participants"
                  },
                  {
                    "customfieldname": "Rank",
                    "customfieldvalues": {
                      "customfieldvalue": "1|zzdc7w:"
                    },
                    "_id": "customfield_11050",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Rank (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10552",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Ranking",
                    "customfieldvalues": {
                      "customfieldvalue": "1|i473wn:"
                    },
                    "_id": "customfield_11052",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Ranking (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10553",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Time in Status",
                    "customfieldvalues": "",
                    "_id": "customfield_10042",
                    "_key": "com.atlassian.jira.ext.charting:timeinstatus"
                  }
                ]
              }
            },
            {
              "title": "[PREPANC-383] Add 3rd Party CIBT to CASA and AO API",
              "link": "https://jira.devnet.klm.com/browse/PREPANC-383",
              "project": {
                "_id": "26267",
                "_key": "PREPANC",
                "__text": "PREPANC"
              },
              "description": {
                "p": [
                  "The new 3rd Party Product CIBT needs to be supported by CASA and Ancillary Offer API.",
                  "So that the customer is shown the option to choose the company CIBT for arranging the necessary visa.",
                  "In order to show the option only when a visum is needed we need to perform a check via the CIBT API",
                  "One of the key elements to perform the check is the nationality of the passenger. KLM does not have the nationality of the passenger available to use for the check.",
                  "As advised by CIBT the country of departure is used as the nationality."
                ]
              },
              "environment": "",
              "key": {
                "_id": "1115632",
                "__text": "PREPANC-383"
              },
              "summary": "Add 3rd Party CIBT to CASA and AO API",
              "type": {
                "_id": "2",
                "_iconUrl": "https://jira.devnet.klm.com/secure/viewavatar?size=xsmall avatarId=13921 avatarType=issuetype",
                "__text": "New Feature"
              },
              "priority": {
                "_id": "3",
                "_iconUrl": "https://jira.devnet.klm.com/images/icons/priorities/major.svg",
                "__text": "Major"
              },
              "status": {
                "_id": "10349",
                "_iconUrl": "https://jira.devnet.klm.com/images/icons/subtask.gif",
                "_description": "This status is managed internally by JIRA Software",
                "__text": "Planned"
              },
              "statusCategory": {
                "_id": "4",
                "_key": "indeterminate",
                "_colorName": "yellow"
              },
              "resolution": {
                "_id": "-1",
                "__text": "Unresolved"
              },
              "assignee": {
                "_username": "x078782",
                "__text": "Chauderon, Arnaud (PCBN) - KLM"
              },
              "reporter": {
                "_username": "klm50041",
                "__text": "Helm, Joost van der (PSIM EC) - KLM"
              },
              "labels": {
                "label": [
                  "sprint10.6",
                  "sprint11.1",
                  "stretch"
                ]
              },
              "created": "Mon, 10 Dec 2018 14:17:25 +0100",
              "updated": "Tue, 26 Mar 2019 12:04:37 +0100",
              "fixVersion": [
                "PI10",
                "PI11"
              ],
              "component": [
                "Ancillary Offer",
                "CASA"
              ],
              "due": "",
              "votes": "0",
              "watches": "3",
              "comments": {
                "comment": [
                  {
                    "p": [
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm50041",
                          "_class": "user-hover",
                          "_rel": "klm50041",
                          "__text": "Helm, Joost van der (PSIM EC) - KLM"
                        }
                      },
                      "Hi Joost ,",
                      "This Feature was out of our radar, good to add components impacted next time",
                      "",
                      "Thanks",
                      "",
                      {
                        "a": [
                          {
                            "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x073618",
                            "_class": "user-hover",
                            "_rel": "x073618",
                            "__text": "Pallanti, Ravitej (ITCDEC) - KLM"
                          },
                          {
                            "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x008229",
                            "_class": "user-hover",
                            "_rel": "x008229",
                            "__text": "Chinnachami, Naveen (ITCDEC) - KLM"
                          },
                          {
                            "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x076382",
                            "_class": "user-hover",
                            "_rel": "x076382",
                            "__text": "Kellampalli, Pradeep (ITCDEC) - KLM"
                          }
                        ],
                        "__text": ";\n;"
                      }
                    ],
                    "_id": "2083444",
                    "_author": "x078782",
                    "_created": "Fri, 22 Feb 2019 13:38:00 +0100"
                  },
                  {
                    "p": [
                      "MyTrip is already integrated with CIBT visa API.  The same integration has to be extended to AOA/CASA.",
                      ""
                    ],
                    "_id": "2084680",
                    "_author": "t769162",
                    "_created": "Sat, 23 Feb 2019 12:30:54 +0100"
                  },
                  {
                    "p": {
                      "a": {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm50041",
                        "_class": "user-hover",
                        "_rel": "klm50041",
                        "__text": "Helm, Joost van der (PSIM EC) - KLM"
                      },
                      "__text": "Hi \n, as discussed in last meeting. The CIBT product to be returned at itinerary level. Can you please confirm if our understanding correct? We also discussed that after launching in the CIBT link we can always add multiple segments and get the price."
                    },
                    "_id": "2086845",
                    "_author": "x008229",
                    "_created": "Mon, 25 Feb 2019 15:39:08 +0100"
                  },
                  {
                    "p": [
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x008229",
                          "_class": "user-hover",
                          "_rel": "x008229",
                          "__text": "Chinnachami, Naveen (ITCDEC) - KLM"
                        },
                        "__text": "Hi \n,"
                      },
                      {
                        "br": "",
                        "__text": "I can confirm that the CIBT is to be returned on itinerary (route) level.\n Once you entered the CIBT website it is possible for the user to select multiple segments and then receive the price for the Visa if required."
                      }
                    ],
                    "_id": "2087867",
                    "_author": "klm50041",
                    "_created": "Tue, 26 Feb 2019 09:15:09 +0100"
                  },
                  {
                    "p": {
                      "a": {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm50041",
                        "_class": "user-hover",
                        "_rel": "klm50041",
                        "__text": "Helm, Joost van der (PSIM EC) - KLM"
                      },
                      "__text": "Thanks \n. Also one more point is that currently there is no title, description and images available for AO API to pass through in the response."
                    },
                    "_id": "2088614",
                    "_author": "x008229",
                    "_created": "Tue, 26 Feb 2019 11:26:15 +0100"
                  }
                ]
              },
              "issuelinks": {
                "issuelinktype": {
                  "name": "Child-Issue",
                  "outwardlinks": {
                    "issuelink": [
                      {
                        "issuekey": {
                          "_id": "1117292",
                          "__text": "CASA-4843"
                        }
                      },
                      {
                        "issuekey": {
                          "_id": "1117383",
                          "__text": "CASA-4845"
                        }
                      },
                      {
                        "issuekey": {
                          "_id": "1117422",
                          "__text": "CASA-4847"
                        }
                      },
                      {
                        "issuekey": {
                          "_id": "1197007",
                          "__text": "PRDS-8309"
                        }
                      }
                    ],
                    "_description": "is parent task of"
                  },
                  "_id": "10040"
                }
              },
              "attachments": "",
              "subtasks": "",
              "customfields": {
                "customfield": [
                  {
                    "customfieldname": "Approvals",
                    "customfieldvalues": "",
                    "_id": "customfield_12550",
                    "_key": "com.atlassian.servicedesk.approvals-plugin:sd-approvals"
                  },
                  {
                    "customfieldname": "Date of First Response",
                    "customfieldvalues": {
                      "customfieldvalue": "Fri, 22 Feb 2019 13:38:00 +0100"
                    },
                    "_id": "customfield_10041",
                    "_key": "com.atlassian.jira.ext.charting:firstresponsedate"
                  },
                  {
                    "customfieldname": "Development",
                    "customfieldvalues": "",
                    "_id": "customfield_14350",
                    "_key": "com.atlassian.jira.plugins.jira-development-integration-plugin:devsummary"
                  },
                  {
                    "customfieldname": "Epic Link",
                    "customfieldvalues": {
                      "customfieldvalue": "DIGITAL-1930"
                    },
                    "_id": "customfield_10750",
                    "_key": "com.pyxis.greenhopper.jira:gh-epic-link"
                  },
                  {
                    "customfieldname": "Global Rank",
                    "customfieldvalues": {
                      "customfieldvalue": "1|i478fz:"
                    },
                    "_id": "customfield_11051",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Global Rank (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10150",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Participants",
                    "customfieldvalues": {
                      "customfieldvalue": [
                        "x078782",
                        "x008229",
                        "klm50041",
                        "x089811"
                      ]
                    },
                    "_id": "customfield_10020",
                    "_key": "com.atlassian.jira.toolkit:participants"
                  },
                  {
                    "customfieldname": "Rank",
                    "customfieldvalues": {
                      "customfieldvalue": "1|zzdcdw:"
                    },
                    "_id": "customfield_11050",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Rank (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10552",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Ranking",
                    "customfieldvalues": {
                      "customfieldvalue": "1|i4744v:"
                    },
                    "_id": "customfield_11052",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Ranking (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10553",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  }
                ]
              }
            },
            {
              "title": "[PREPANC-406] KL PAid Lounge Offer in EBT",
              "link": "https://jira.devnet.klm.com/browse/PREPANC-406",
              "project": {
                "_id": "26267",
                "_key": "PREPANC",
                "__text": "PREPANC"
              },
              "description": "",
              "environment": "",
              "key": {
                "_id": "1087184",
                "__text": "PREPANC-406"
              },
              "summary": "KL PAid Lounge Offer in EBT",
              "type": {
                "_id": "2",
                "_iconUrl": "https://jira.devnet.klm.com/secure/viewavatar?size=xsmall avatarId=13921 avatarType=issuetype",
                "__text": "New Feature"
              },
              "priority": {
                "_id": "3",
                "_iconUrl": "https://jira.devnet.klm.com/images/icons/priorities/major.svg",
                "__text": "Major"
              },
              "status": {
                "_id": "5",
                "_iconUrl": "https://jira.devnet.klm.com/images/icons/statuses/resolved.png",
                "_description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
                "__text": "Resolved"
              },
              "statusCategory": {
                "_id": "3",
                "_key": "done",
                "_colorName": "green"
              },
              "resolution": {
                "_id": "6",
                "__text": "Done"
              },
              "assignee": {
                "_username": "x078782",
                "__text": "Chauderon, Arnaud (PCBN) - KLM"
              },
              "reporter": {
                "_username": "x078782",
                "__text": "Chauderon, Arnaud (PCBN) - KLM"
              },
              "labels": {
                "label": [
                  "ANCILLARIES",
                  "sprint10.1",
                  "sprint10.2",
                  "sprint10.3",
                  "stretch"
                ]
              },
              "created": "Fri, 16 Nov 2018 12:39:02 +0100",
              "updated": "Wed, 20 Mar 2019 10:47:23 +0100",
              "resolved": "Tue, 29 Jan 2019 11:18:00 +0100",
              "fixVersion": "PI10",
              "component": [
                "Ancillary Offer",
                "Reservation API"
              ],
              "due": "",
              "votes": "0",
              "watches": "2",
              "comments": {
                "comment": [
                  {
                    "p": [
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm62414",
                          "_class": "user-hover",
                          "_rel": "klm62414",
                          "__text": "Horst, Boyke van der (PSIM EC) - KLM"
                        },
                        "__text": "Hi"
                      },
                      "What is the status of this topic ?"
                    ],
                    "_id": "1941831",
                    "_author": "x078782",
                    "_created": "Tue, 4 Dec 2018 10:34:34 +0100"
                  },
                  {
                    "p": {
                      "a": {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x078782",
                        "_class": "user-hover",
                        "_rel": "x078782",
                        "__text": "Chauderon, Arnaud (PCBN) - KLM"
                      },
                      "br": [
                        "",
                        ""
                      ],
                      "__text": "Hi \n, I did not have time to take a look into this EPIC. I cannot make it ready before PI10. I think there are two options:\n 1. Create a placeholder for this in PI10. And then we do refinement during PI10.\n 2. Move it to PI11."
                    },
                    "_id": "1942199",
                    "_author": "klm62414",
                    "_created": "Tue, 4 Dec 2018 11:32:29 +0100"
                  },
                  {
                    "p": {
                      "a": {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm62414",
                        "_class": "user-hover",
                        "_rel": "klm62414",
                        "__text": "Horst, Boyke van der (PSIM EC) - KLM"
                      },
                      "__text": "Hi \n, we want the mock screen for both EBT  amp; MT flow to see how the KL to be offered."
                    },
                    "_id": "1958223",
                    "_author": "x008229",
                    "_created": "Tue, 11 Dec 2018 16:00:13 +0100"
                  },
                  {
                    "p": "I cannot provide mock screens, right now. But you can proceed with this, if the design is similar to how we offer this on ICI.",
                    "_id": "1960651",
                    "_author": "klm62414",
                    "_created": "Wed, 12 Dec 2018 15:02:20 +0100"
                  },
                  {
                    "p": [
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm62414",
                          "_class": "user-hover",
                          "_rel": "klm62414",
                          "__text": "Horst, Boyke van der (PSIM EC) - KLM"
                        }
                      },
                      "",
                      "Can you add Resr API user story as seems part of the component impacted + planning update",
                      "",
                      "Thx"
                    ],
                    "_id": "2007130",
                    "_author": "x078782",
                    "_created": "Thu, 17 Jan 2019 11:40:03 +0100"
                  },
                  {
                    "p": {
                      "a": {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x078782",
                        "_class": "user-hover",
                        "_rel": "x078782",
                        "__text": "Chauderon, Arnaud (PCBN) - KLM"
                      },
                      "__text": "Hi \n, what exactly do I need to ask Res Api?"
                    },
                    "_id": "2008016",
                    "_author": "klm62414",
                    "_created": "Thu, 17 Jan 2019 15:04:20 +0100"
                  }
                ]
              },
              "issuelinks": {
                "issuelinktype": {
                  "name": "Child-Issue",
                  "outwardlinks": {
                    "issuelink": [
                      {
                        "issuekey": {
                          "_id": "1117631",
                          "__text": "PRDS-8031"
                        }
                      },
                      {
                        "issuekey": {
                          "_id": "1117633",
                          "__text": "PRDS-8032"
                        }
                      },
                      {
                        "issuekey": {
                          "_id": "1139205",
                          "__text": "PRDS-8114"
                        }
                      }
                    ],
                    "_description": "is parent task of"
                  },
                  "_id": "10040"
                }
              },
              "attachments": "",
              "subtasks": "",
              "customfields": {
                "customfield": [
                  {
                    "customfieldname": "Approvals",
                    "customfieldvalues": "",
                    "_id": "customfield_12550",
                    "_key": "com.atlassian.servicedesk.approvals-plugin:sd-approvals"
                  },
                  {
                    "customfieldname": "Date of First Response",
                    "customfieldvalues": {
                      "customfieldvalue": "Tue, 4 Dec 2018 11:32:29 +0100"
                    },
                    "_id": "customfield_10041",
                    "_key": "com.atlassian.jira.ext.charting:firstresponsedate"
                  },
                  {
                    "customfieldname": "Development",
                    "customfieldvalues": "",
                    "_id": "customfield_14350",
                    "_key": "com.atlassian.jira.plugins.jira-development-integration-plugin:devsummary"
                  },
                  {
                    "customfieldname": "Global Rank",
                    "customfieldvalues": {
                      "customfieldvalue": "1|i42hqn:"
                    },
                    "_id": "customfield_11051",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Global Rank (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10150",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Participants",
                    "customfieldvalues": {
                      "customfieldvalue": [
                        "x078782",
                        "x008229",
                        "klm62414"
                      ]
                    },
                    "_id": "customfield_10020",
                    "_key": "com.atlassian.jira.toolkit:participants"
                  },
                  {
                    "customfieldname": "Rank",
                    "customfieldvalues": {
                      "customfieldvalue": "1|zz8z5w:"
                    },
                    "_id": "customfield_11050",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Rank (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10552",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Ranking",
                    "customfieldvalues": {
                      "customfieldvalue": "1|i42df3:"
                    },
                    "_id": "customfield_11052",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Ranking (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10553",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Time in Status",
                    "customfieldvalues": "",
                    "_id": "customfield_10042",
                    "_key": "com.atlassian.jira.ext.charting:timeinstatus"
                  }
                ]
              }
            },
            {
              "title": "[PREPANC-410] [NOM]Provide seat availability for bundling (FLXM)",
              "link": "https://jira.devnet.klm.com/browse/PREPANC-410",
              "project": {
                "_id": "26267",
                "_key": "PREPANC",
                "__text": "PREPANC"
              },
              "description": {
                "p": [
                  "As described in epic 2080 as a preparation to NOM. CASA needs to collect all the seat related data from Altea. CASA distributes the seatmap data to SEAT Inventory.",
                  "CASA needs to be able to process approximately 530 K - 708K calls. (1940 daily flights for 9 or 12 months).",
                  "The idea is to create a separate Webservice that can process this number of calls in a nightly batch process.",
                  "Seat Inventory will pull the data from CASA.",
                  "Casa receives a request from Seat Inventory and then CASA calls Amadeus to retrieve the seatmap.",
                  "For the POC only the Economy cabin will be processed, because the chargeable products are only available in this class. Casa calls the AirRertrieveSeatMap outside the PNR context and uses the bookingclass K.",
                  "",
                  "Out of Scope:",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  ""
                ],
                "ul": [
                  {
                    "li": [
                      "Seat map",
                      "ALL Seat Characteristic + Rows+Cabin",
                      {
                        "ul": {
                          "li": [
                            "Free: seat is available for ASR (Advance Seat Reservation)",
                            "Unavailable : seat is restricted, blocked not available for ASR",
                            "Occupied : seat is already occupied by a passenger"
                          ]
                        },
                        "__text": "Occupancy Status"
                      },
                      "Restrictions",
                      "Mapping  each seat to product (Seat characteristic will represent the product)"
                    ]
                  },
                  {
                    "li": "Updates outside the batch web service will not be processed by CASA."
                  }
                ]
              },
              "environment": "",
              "key": {
                "_id": "1123022",
                "__text": "PREPANC-410"
              },
              "summary": "[NOM]Provide seat availability for bundling (FLXM)",
              "type": {
                "_id": "2",
                "_iconUrl": "https://jira.devnet.klm.com/secure/viewavatar?size=xsmall avatarId=13921 avatarType=issuetype",
                "__text": "New Feature"
              },
              "priority": {
                "_id": "3",
                "_iconUrl": "https://jira.devnet.klm.com/images/icons/priorities/major.svg",
                "__text": "Major"
              },
              "status": {
                "_id": "5",
                "_iconUrl": "https://jira.devnet.klm.com/images/icons/statuses/resolved.png",
                "_description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
                "__text": "Resolved"
              },
              "statusCategory": {
                "_id": "3",
                "_key": "done",
                "_colorName": "green"
              },
              "resolution": {
                "_id": "6",
                "__text": "Done"
              },
              "assignee": {
                "_username": "x078782",
                "__text": "Chauderon, Arnaud (PCBN) - KLM"
              },
              "reporter": {
                "_username": "klm50041",
                "__text": "Helm, Joost van der (PSIM EC) - KLM"
              },
              "labels": {
                "label": [
                  "sprint10.3",
                  "sprint10.4",
                  "sprint10.5"
                ]
              },
              "created": "Fri, 14 Dec 2018 17:21:23 +0100",
              "updated": "Wed, 20 Feb 2019 15:16:22 +0100",
              "resolved": "Wed, 20 Feb 2019 15:16:22 +0100",
              "fixVersion": "PI10",
              "component": "CASA",
              "due": "",
              "votes": "0",
              "watches": "1",
              "comments": {
                "comment": {
                  "p": "Delayed due to dependencies with service consumption",
                  "_id": "2052978",
                  "_author": "x078782",
                  "_created": "Fri, 8 Feb 2019 12:07:13 +0100"
                }
              },
              "issuelinks": {
                "issuelinktype": {
                  "name": "Child-Issue",
                  "outwardlinks": {
                    "issuelink": [
                      {
                        "issuekey": {
                          "_id": "1126478",
                          "__text": "CASA-4862"
                        }
                      },
                      {
                        "issuekey": {
                          "_id": "1126490",
                          "__text": "CASA-4863"
                        }
                      },
                      {
                        "issuekey": {
                          "_id": "1126494",
                          "__text": "CASA-4864"
                        }
                      },
                      {
                        "issuekey": {
                          "_id": "1126498",
                          "__text": "CASA-4865"
                        }
                      }
                    ],
                    "_description": "is parent task of"
                  },
                  "inwardlinks": {
                    "issuelink": {
                      "issuekey": {
                        "_id": "1106212",
                        "__text": "DIGITAL-2080"
                      }
                    },
                    "_description": "is child task of"
                  },
                  "_id": "10040"
                }
              },
              "attachments": "",
              "subtasks": "",
              "customfields": {
                "customfield": [
                  {
                    "customfieldname": "Acceptance Criteria",
                    "customfieldvalues": {
                      "customfieldvalue": {
                        "p": [
                          "CASA needs to be able to process approx 730000 request for seat map info from the RM tool Okapy and translate these calls in requests to Amadeus.",
                          "So not only CASA but also Amadeus needs to be able to process these number of requests.",
                          "These numbers cannot be tested in UTE3. So the load test needs to be performed on the UAT envrionment."
                        ]
                      }
                    },
                    "_id": "customfield_10030",
                    "_key": "com.atlassian.jira.plugin.system.customfieldtypes:textarea"
                  },
                  {
                    "customfieldname": "Approvals",
                    "customfieldvalues": "",
                    "_id": "customfield_12550",
                    "_key": "com.atlassian.servicedesk.approvals-plugin:sd-approvals"
                  },
                  {
                    "customfieldname": "Date of First Response",
                    "customfieldvalues": {
                      "customfieldvalue": "Fri, 8 Feb 2019 12:07:13 +0100"
                    },
                    "_id": "customfield_10041",
                    "_key": "com.atlassian.jira.ext.charting:firstresponsedate"
                  },
                  {
                    "customfieldname": "Development",
                    "customfieldvalues": "",
                    "_id": "customfield_14350",
                    "_key": "com.atlassian.jira.plugins.jira-development-integration-plugin:devsummary"
                  },
                  {
                    "customfieldname": "Global Rank",
                    "customfieldvalues": {
                      "customfieldvalue": "1|i48hvb:"
                    },
                    "_id": "customfield_11051",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Global Rank (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10150",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Participants",
                    "customfieldvalues": {
                      "customfieldvalue": [
                        "x078782",
                        "klm50041"
                      ]
                    },
                    "_id": "customfield_10020",
                    "_key": "com.atlassian.jira.toolkit:participants"
                  },
                  {
                    "customfieldname": "Rank",
                    "customfieldvalues": {
                      "customfieldvalue": "1|zzehz8:"
                    },
                    "_id": "customfield_11050",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Rank (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10552",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Ranking",
                    "customfieldvalues": {
                      "customfieldvalue": "1|i48dk7:"
                    },
                    "_id": "customfield_11052",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Ranking (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10553",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Time in Status",
                    "customfieldvalues": "",
                    "_id": "customfield_10042",
                    "_key": "com.atlassian.jira.ext.charting:timeinstatus"
                  }
                ]
              }
            },
            {
              "title": "[PREPANC-429] Napbox in lounge (PI10)",
              "link": "https://jira.devnet.klm.com/browse/PREPANC-429",
              "project": {
                "_id": "26267",
                "_key": "PREPANC",
                "__text": "PREPANC"
              },
              "description": {
                "p": [
                  {
                    "b": "Why  amp; What",
                    "br": "",
                    "__text": "A customer, which is eligible for Lounge 52, must be able to book a napbox."
                  },
                  "Multiple applications (CLE, LDS) must be configured to support this.",
                  {
                    "b": "Scope  amp; details",
                    "br": [
                      "",
                      ""
                    ],
                    "img": [
                      {
                        "_class": "emoticon",
                        "_src": "https://jira.devnet.klm.com/images/icons/emoticons/add.png",
                        "_height": "16",
                        "_width": "16",
                        "_align": "absmiddle",
                        "_alt": "",
                        "_border": "0"
                      },
                      {
                        "_class": "emoticon",
                        "_src": "https://jira.devnet.klm.com/images/icons/emoticons/add.png",
                        "_height": "16",
                        "_width": "16",
                        "_align": "absmiddle",
                        "_alt": "",
                        "_border": "0"
                      }
                    ],
                    "__text": "Enable new product offer (AO API)\n \n Provide sales content (AO API)"
                  },
                  "",
                  {
                    "b": "Desired user interaction flow",
                    "br": "",
                    "__text": "See EPIC"
                  },
                  {
                    "b": "Wire frames",
                    "br": "",
                    "__text": "n/a, this is feature for back-end applications."
                  },
                  {
                    "b": "Business owner of the feature",
                    "br": "",
                    "__text": "Pieter Oorspong"
                  },
                  {
                    "b": "Stakeholders",
                    "br": "",
                    "a": {
                      "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm47358",
                      "_class": "user-hover",
                      "_rel": "klm47358",
                      "__text": "Hoeij, Karin van (PSIM EC) - KLM"
                    }
                  },
                  {
                    "a": {
                      "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x073618",
                      "_class": "user-hover",
                      "_rel": "x073618",
                      "__text": "Pallanti, Ravitej (ITCDEC) - KLM"
                    }
                  },
                  {
                    "a": {
                      "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x008229",
                      "_class": "user-hover",
                      "_rel": "x008229",
                      "__text": "Chinnachami, Naveen (ITCDEC) - KLM"
                    }
                  },
                  {
                    "b": "Value estimation elucidation"
                  }
                ],
                "div": {
                  "table": {
                    "tbody": {
                      "tr": [
                        {
                          "th": [
                            {
                              "_class": "confluenceTh",
                              "__text": "Team"
                            },
                            {
                              "_class": "confluenceTh",
                              "__text": "Impact"
                            },
                            {
                              "_class": "confluenceTh",
                              "__text": "Stakeholder"
                            },
                            {
                              "_class": "confluenceTh",
                              "__text": "Effort estimation"
                            },
                            {
                              "_class": "confluenceTh",
                              "__text": "PI"
                            }
                          ]
                        },
                        {
                          "td": [
                            {
                              "_class": "confluenceTd",
                              "__text": "CASA"
                            },
                            {
                              "_class": "confluenceTd",
                              "__text": "see EPIC"
                            },
                            {
                              "a": {
                                "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x078782",
                                "_class": "user-hover",
                                "_rel": "x078782",
                                "__text": "Chauderon, Arnaud (PCBN) - KLM"
                              },
                              "_class": "confluenceTd"
                            },
                            {
                              "_class": "confluenceTd",
                              "__text": "1 sprint"
                            },
                            {
                              "_class": "confluenceTd",
                              "__text": "PI10"
                            }
                          ]
                        },
                        {
                          "td": [
                            {
                              "_class": "confluenceTd",
                              "__text": "Ancillary Offer API"
                            },
                            {
                              "_class": "confluenceTd",
                              "__text": "See EPIC"
                            },
                            {
                              "a": {
                                "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x078782",
                                "_class": "user-hover",
                                "_rel": "x078782",
                                "__text": "Chauderon, Arnaud (PCBN) - KLM"
                              },
                              "_class": "confluenceTd"
                            },
                            {
                              "_class": "confluenceTd",
                              "__text": "1 sprint"
                            },
                            {
                              "_class": "confluenceTd",
                              "__text": "PI10"
                            }
                          ]
                        }
                      ]
                    },
                    "_class": "confluenceTable"
                  },
                  "_class": "table-wrap"
                }
              },
              "environment": "",
              "key": {
                "_id": "1162694",
                "__text": "PREPANC-429"
              },
              "summary": "Napbox in lounge (PI10)",
              "type": {
                "_id": "2",
                "_iconUrl": "https://jira.devnet.klm.com/secure/viewavatar?size=xsmall avatarId=13921 avatarType=issuetype",
                "__text": "New Feature"
              },
              "priority": {
                "_id": "3",
                "_iconUrl": "https://jira.devnet.klm.com/images/icons/priorities/major.svg",
                "__text": "Major"
              },
              "status": {
                "_id": "10349",
                "_iconUrl": "https://jira.devnet.klm.com/images/icons/subtask.gif",
                "_description": "This status is managed internally by JIRA Software",
                "__text": "Planned"
              },
              "statusCategory": {
                "_id": "4",
                "_key": "indeterminate",
                "_colorName": "yellow"
              },
              "resolution": {
                "_id": "6",
                "__text": "Done"
              },
              "assignee": {
                "_username": "-1",
                "__text": "Unassigned"
              },
              "reporter": {
                "_username": "klm62414",
                "__text": "Horst, Boyke van der (PSIM EC) - KLM"
              },
              "labels": {
                "label": [
                  "sprint10.6",
                  "sprint11.1",
                  "sprint11.3",
                  "sprint11.4",
                  "stretch"
                ]
              },
              "created": "Mon, 28 Jan 2019 14:57:43 +0100",
              "updated": "Tue, 19 Mar 2019 14:27:27 +0100",
              "resolved": "Fri, 15 Mar 2019 14:47:28 +0100",
              "fixVersion": [
                "PI10",
                "PI11"
              ],
              "component": [
                "Ancillary Offer",
                "CASA"
              ],
              "due": "",
              "votes": "0",
              "watches": "2",
              "comments": {
                "comment": [
                  {
                    "p": [
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm62414",
                          "_class": "user-hover",
                          "_rel": "klm62414",
                          "__text": "Horst, Boyke van der (PSIM EC) - KLM"
                        }
                      },
                      "Due to lack of clarity this feature cannot be embarked in sprint10.6 as intially planned",
                      "Thanks to keep us updated on this topic",
                      {
                        "a": [
                          {
                            "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x089811",
                            "_class": "user-hover",
                            "_rel": "x089811",
                            "__text": "Sahu, Ashish (ITCDEC) - KLM"
                          },
                          {
                            "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x008229",
                            "_class": "user-hover",
                            "_rel": "x008229",
                            "__text": "Chinnachami, Naveen (ITCDEC) - KLM"
                          },
                          {
                            "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x074825",
                            "_class": "user-hover",
                            "_rel": "x074825",
                            "__text": "Penta, Vinod (ITCDEC) - KLM"
                          },
                          {
                            "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x073618",
                            "_class": "user-hover",
                            "_rel": "x073618",
                            "__text": "Pallanti, Ravitej (ITCDEC) - KLM"
                          }
                        ],
                        "__text": "; \n; \n;\n;"
                      }
                    ],
                    "_id": "2083390",
                    "_author": "x078782",
                    "_created": "Fri, 22 Feb 2019 13:25:16 +0100"
                  },
                  {
                    "p": [
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x078782",
                          "_class": "user-hover",
                          "_rel": "x078782",
                          "__text": "Chauderon, Arnaud (PCBN) - KLM"
                        },
                        "__text": "Hi \n, what do you mean with lack of clarity? We have discussed this topic several times including AO API/CASA members. There we did not get response that it was unclear. So, this is a suprise to me."
                      },
                      "What is still unclear? Monday the 25th at 9h we have a refinement with Order API for the details. Who can join from your team?",
                      {
                        "a": [
                          {
                            "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm76233",
                            "_class": "user-hover",
                            "_rel": "klm76233",
                            "__text": "Uitdewilligen, Luc (SPLXA) - KLM"
                          },
                          {
                            "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm62229",
                            "_class": "user-hover",
                            "_rel": "klm62229",
                            "__text": "Lans, Angelo van der (PSIM EC) - KLM"
                          },
                          {
                            "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm01121",
                            "_class": "user-hover",
                            "_rel": "klm01121",
                            "__text": "Maas, Theo (ITCDMO) - KLM"
                          },
                          {
                            "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x086990",
                            "_class": "user-hover",
                            "_rel": "x086990",
                            "__text": "Ravi, Chandra (ITCDEC) - KLM"
                          }
                        ],
                        "__text": "fyi \n, \n, \n,"
                      },
                      ""
                    ],
                    "_id": "2084224",
                    "_author": "klm62414",
                    "_created": "Fri, 22 Feb 2019 16:14:56 +0100"
                  },
                  {
                    "p": [
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm62414",
                          "_class": "user-hover",
                          "_rel": "klm62414",
                          "__text": "Horst, Boyke van der (PSIM EC) - KLM"
                        },
                        "__text": "Hi"
                      },
                      "Let me rephrase it, requirement is clear, it s not mentionned in the feature but AO API team is depending on pre requisite from Lounge team and need details information to be able to complete the analyses.",
                      "Since Lounge API is still working on it, Ancillary team cannot define appropriate solution for developement."
                    ],
                    "_id": "2084595",
                    "_author": "x078782",
                    "_created": "Fri, 22 Feb 2019 18:12:44 +0100"
                  },
                  {
                    "p": [
                      {
                        "a": [
                          {
                            "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x078782",
                            "_class": "user-hover",
                            "_rel": "x078782",
                            "__text": "Chauderon, Arnaud (PCBN) - KLM"
                          },
                          {
                            "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x086990",
                            "_class": "user-hover",
                            "_rel": "x086990",
                            "__text": "Ravi, Chandra (ITCDEC) - KLM"
                          }
                        ],
                        "__text": "Hi \n, as discussed the model is ready. \n tried to finalize (get an 'OK') this last week with IA from CASA/AO API, but they could not join. He will now send it by e-mail. I hope your team can check it asap."
                      },
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm76233",
                          "_class": "user-hover",
                          "_rel": "klm76233",
                          "__text": "Uitdewilligen, Luc (SPLXA) - KLM"
                        },
                        "__text": "fyi"
                      }
                    ],
                    "_id": "2085306",
                    "_author": "klm62414",
                    "_created": "Mon, 25 Feb 2019 10:32:20 +0100"
                  },
                  {
                    "p": [
                      {
                        "a": [
                          {
                            "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm27506",
                            "_class": "user-hover",
                            "_rel": "klm27506",
                            "__text": "Neijenhuizen, Pim (AMSSZ) - KLM"
                          },
                          {
                            "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm39616",
                            "_class": "user-hover",
                            "_rel": "klm39616",
                            "__text": "Knegt, Arjan de (ITCDEC) - KLM"
                          }
                        ],
                        "__text": "and \n, you attention please to ensure you keep track of items that need to be onboarded in sprints."
                      },
                      "",
                      "I changed the status to \"planned\" as this truly was planned work in PI10. Please encourage PO's to also reach out to epic-owners if things are not clear. As you read above, apperantly something was not clear to AO API and the epic owner did not know during the sprint before. If this was informed one week earlier, the item would not need to be offloaded / pushed."
                    ],
                    "_id": "2114081",
                    "_author": "klm62957",
                    "_created": "Sun, 10 Mar 2019 13:17:49 +0100"
                  }
                ]
              },
              "issuelinks": {
                "issuelinktype": [
                  {
                    "name": "Child-Issue",
                    "outwardlinks": {
                      "issuelink": {
                        "issuekey": {
                          "_id": "1116722",
                          "__text": "CHKOUT-12737"
                        }
                      },
                      "_description": "is parent task of"
                    },
                    "_id": "10040"
                  },
                  {
                    "name": "Cloners",
                    "inwardlinks": {
                      "issuelink": {
                        "issuekey": {
                          "_id": "1192683",
                          "__text": "PREPANC-448"
                        }
                      },
                      "_description": "is cloned by"
                    },
                    "_id": "10240"
                  }
                ]
              },
              "attachments": "",
              "subtasks": "",
              "customfields": {
                "customfield": [
                  {
                    "customfieldname": "Approvals",
                    "customfieldvalues": "",
                    "_id": "customfield_12550",
                    "_key": "com.atlassian.servicedesk.approvals-plugin:sd-approvals"
                  },
                  {
                    "customfieldname": "Date of First Response",
                    "customfieldvalues": {
                      "customfieldvalue": "Fri, 22 Feb 2019 13:25:16 +0100"
                    },
                    "_id": "customfield_10041",
                    "_key": "com.atlassian.jira.ext.charting:firstresponsedate"
                  },
                  {
                    "customfieldname": "Development",
                    "customfieldvalues": "",
                    "_id": "customfield_14350",
                    "_key": "com.atlassian.jira.plugins.jira-development-integration-plugin:devsummary"
                  },
                  {
                    "customfieldname": "Epic Link",
                    "customfieldvalues": {
                      "customfieldvalue": "DIGITAL-1345"
                    },
                    "_id": "customfield_10750",
                    "_key": "com.pyxis.greenhopper.jira:gh-epic-link"
                  },
                  {
                    "customfieldname": "Global Rank",
                    "customfieldvalues": {
                      "customfieldvalue": "1|i4fabb:"
                    },
                    "_id": "customfield_11051",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Global Rank (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10150",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Participants",
                    "customfieldvalues": {
                      "customfieldvalue": [
                        "x078782",
                        "klm62414",
                        "klm62957"
                      ]
                    },
                    "_id": "customfield_10020",
                    "_key": "com.atlassian.jira.toolkit:participants"
                  },
                  {
                    "customfieldname": "Rank",
                    "customfieldvalues": {
                      "customfieldvalue": "1|zzkoho:"
                    },
                    "_id": "customfield_11050",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Rank (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10552",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Ranking",
                    "customfieldvalues": {
                      "customfieldvalue": "1|i4f60f:"
                    },
                    "_id": "customfield_11052",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Ranking (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10553",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Time in Status",
                    "customfieldvalues": "",
                    "_id": "customfield_10042",
                    "_key": "com.atlassian.jira.ext.charting:timeinstatus"
                  }
                ]
              }
            },
            {
              "title": "[PREPANC-433] KL PAid Lounge Offer in MyTrip",
              "link": "https://jira.devnet.klm.com/browse/PREPANC-433",
              "project": {
                "_id": "26267",
                "_key": "PREPANC",
                "__text": "PREPANC"
              },
              "description": "",
              "environment": "",
              "key": {
                "_id": "1163991",
                "__text": "PREPANC-433"
              },
              "summary": "KL PAid Lounge Offer in MyTrip",
              "type": {
                "_id": "2",
                "_iconUrl": "https://jira.devnet.klm.com/secure/viewavatar?size=xsmall avatarId=13921 avatarType=issuetype",
                "__text": "New Feature"
              },
              "priority": {
                "_id": "3",
                "_iconUrl": "https://jira.devnet.klm.com/images/icons/priorities/major.svg",
                "__text": "Major"
              },
              "status": {
                "_id": "13776",
                "_iconUrl": "https://jira.devnet.klm.com/",
                "_description": "This status is managed internally by JIRA Software",
                "__text": "Implementation"
              },
              "statusCategory": {
                "_id": "4",
                "_key": "indeterminate",
                "_colorName": "yellow"
              },
              "resolution": {
                "_id": "-1",
                "__text": "Unresolved"
              },
              "assignee": {
                "_username": "klm84429",
                "__text": "Egmond, Sabine van (PSIM EC) - KLM"
              },
              "reporter": {
                "_username": "x078782",
                "__text": "Chauderon, Arnaud (PCBN) - KLM"
              },
              "labels": {
                "label": [
                  "sprint10.3",
                  "sprint11.1",
                  "stretch"
                ]
              },
              "created": "Tue, 29 Jan 2019 11:10:15 +0100",
              "updated": "Mon, 25 Mar 2019 12:10:07 +0100",
              "fixVersion": [
                "PI10",
                "PI11"
              ],
              "component": [
                "Ancillary Offer",
                "Order API",
                "Reservation API"
              ],
              "due": "",
              "votes": "0",
              "watches": "2",
              "comments": {
                "comment": [
                  {
                    "p": "not planned/committed for My Trip UI for PI10.",
                    "_id": "2094885",
                    "_author": "klm84429",
                    "_created": "Thu, 28 Feb 2019 12:00:20 +0100"
                  },
                  {
                    "p": {
                      "a": {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm84429",
                        "_class": "user-hover",
                        "_rel": "klm84429",
                        "__text": "Egmond, Sabine van (PSIM EC) - KLM"
                      },
                      "__text": "still candidate for PI11?"
                    },
                    "_id": "2107612",
                    "_author": "klm62229",
                    "_created": "Wed, 6 Mar 2019 15:42:41 +0100"
                  },
                  {
                    "p": [
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm62229",
                          "_class": "user-hover",
                          "_rel": "klm62229",
                          "__text": "Lans, Angelo van der (PSIM EC) - KLM"
                        },
                        "__text": "Hi \n yes, it's a candidate. But please do note that we have a total of 42 epics on our todo for PI11, so I cannot confirm yet whether it can be onboarded."
                      },
                      "It would help if you could support in explaining priority for this one, especially since it involves only our legacy KLM My Trip, and gradual rollout of BW My Trip is planned to start by end of PI11. I need to have a good business case to explain effort we spend on My Trip UI at this moment."
                    ],
                    "_id": "2110907",
                    "_author": "klm84429",
                    "_created": "Thu, 7 Mar 2019 16:25:42 +0100"
                  }
                ]
              },
              "issuelinks": {
                "issuelinktype": {
                  "name": "Child-Issue",
                  "outwardlinks": {
                    "issuelink": [
                      {
                        "issuekey": {
                          "_id": "1140585",
                          "__text": "MMB-8798"
                        }
                      },
                      {
                        "issuekey": {
                          "_id": "1142559",
                          "__text": "PRDS-8120"
                        }
                      },
                      {
                        "issuekey": {
                          "_id": "1117631",
                          "__text": "PRDS-8031"
                        }
                      },
                      {
                        "issuekey": {
                          "_id": "1117633",
                          "__text": "PRDS-8032"
                        }
                      },
                      {
                        "issuekey": {
                          "_id": "1139205",
                          "__text": "PRDS-8114"
                        }
                      }
                    ],
                    "_description": "is parent task of"
                  },
                  "_id": "10040"
                }
              },
              "attachments": "",
              "subtasks": "",
              "customfields": {
                "customfield": [
                  {
                    "customfieldname": "Approvals",
                    "customfieldvalues": "",
                    "_id": "customfield_12550",
                    "_key": "com.atlassian.servicedesk.approvals-plugin:sd-approvals"
                  },
                  {
                    "customfieldname": "Date of First Response",
                    "customfieldvalues": {
                      "customfieldvalue": "Thu, 28 Feb 2019 12:00:20 +0100"
                    },
                    "_id": "customfield_10041",
                    "_key": "com.atlassian.jira.ext.charting:firstresponsedate"
                  },
                  {
                    "customfieldname": "Development",
                    "customfieldvalues": "",
                    "_id": "customfield_14350",
                    "_key": "com.atlassian.jira.plugins.jira-development-integration-plugin:devsummary"
                  },
                  {
                    "customfieldname": "Global Rank",
                    "customfieldvalues": {
                      "customfieldvalue": "1|i4fibj:"
                    },
                    "_id": "customfield_11051",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Global Rank (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10150",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Participants",
                    "customfieldvalues": {
                      "customfieldvalue": [
                        "x078782",
                        "klm84429",
                        "klm62229"
                      ]
                    },
                    "_id": "customfield_10020",
                    "_key": "com.atlassian.jira.toolkit:participants"
                  },
                  {
                    "customfieldname": "Rank",
                    "customfieldvalues": {
                      "customfieldvalue": "1|zzkvyk:"
                    },
                    "_id": "customfield_11050",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Rank (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10552",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Ranking",
                    "customfieldvalues": {
                      "customfieldvalue": "1|i4fe0n:"
                    },
                    "_id": "customfield_11052",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Ranking (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10553",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  }
                ]
              }
            },
            {
              "title": "[PREPANC-447] [NEW SEAT MAP COMPONENT]",
              "link": "https://jira.devnet.klm.com/browse/PREPANC-447",
              "project": {
                "_id": "26267",
                "_key": "PREPANC",
                "__text": "PREPANC"
              },
              "description": {
                "p": [
                  {
                    "b": "CONTEXT / SUMMARY",
                    "br": "",
                    "img": {
                      "_class": "emoticon",
                      "_src": "https://jira.devnet.klm.com/images/icons/emoticons/add.png",
                      "_height": "16",
                      "_width": "16",
                      "_align": "absmiddle",
                      "_alt": "",
                      "_border": "0"
                    },
                    "__text": "AFKL touch point and channel are using different source or maintain localy seat map information"
                  },
                  "",
                  {
                    "b": "WHAT",
                    "br": "",
                    "img": {
                      "_class": "emoticon",
                      "_src": "https://jira.devnet.klm.com/images/icons/emoticons/add.png",
                      "_height": "16",
                      "_width": "16",
                      "_align": "absmiddle",
                      "_alt": "",
                      "_border": "0"
                    },
                    "__text": "Propose a component as repository for seat map information, ensure consistency cross channel and touch point for ALL customer"
                  },
                  {
                    "img": {
                      "_class": "emoticon",
                      "_src": "https://jira.devnet.klm.com/images/icons/emoticons/add.png",
                      "_height": "16",
                      "_width": "16",
                      "_align": "absmiddle",
                      "_alt": "",
                      "_border": "0"
                    },
                    "__text": "Scope"
                  },
                  {
                    "img": {
                      "_class": "emoticon",
                      "_src": "https://jira.devnet.klm.com/images/icons/emoticons/add.png",
                      "_height": "16",
                      "_width": "16",
                      "_align": "absmiddle",
                      "_alt": "",
                      "_border": "0"
                    },
                    "__text": "Touchpoint scope:"
                  },
                  {
                    "b": "WHY",
                    "br": "",
                    "img": {
                      "_class": "emoticon",
                      "_src": "https://jira.devnet.klm.com/images/icons/emoticons/add.png",
                      "_height": "16",
                      "_width": "16",
                      "_align": "absmiddle",
                      "_alt": "",
                      "_border": "0"
                    },
                    "__text": "Business value :"
                  },
                  {
                    "img": {
                      "_class": "emoticon",
                      "_src": "https://jira.devnet.klm.com/images/icons/emoticons/add.png",
                      "_height": "16",
                      "_width": "16",
                      "_align": "absmiddle",
                      "_alt": "",
                      "_border": "0"
                    },
                    "__text": "Time criticality :"
                  },
                  {
                    "img": {
                      "_class": "emoticon",
                      "_src": "https://jira.devnet.klm.com/images/icons/emoticons/add.png",
                      "_height": "16",
                      "_width": "16",
                      "_align": "absmiddle",
                      "_alt": "",
                      "_border": "0"
                    },
                    "__text": "Risk reduction/opportunity enablement :"
                  },
                  "",
                  {
                    "b": "HOW"
                  },
                  {
                    "img": {
                      "_class": "emoticon",
                      "_src": "https://jira.devnet.klm.com/images/icons/emoticons/add.png",
                      "_height": "16",
                      "_width": "16",
                      "_align": "absmiddle",
                      "_alt": "",
                      "_border": "0"
                    },
                    "b": "HIGH LEVEL EFFORT ESTIMATE:"
                  },
                  "",
                  "",
                  "",
                  {
                    "br": [
                      "",
                      "",
                      ""
                    ],
                    "img": [
                      {
                        "_class": "emoticon",
                        "_src": "https://jira.devnet.klm.com/images/icons/emoticons/add.png",
                        "_height": "16",
                        "_width": "16",
                        "_align": "absmiddle",
                        "_alt": "",
                        "_border": "0"
                      },
                      {
                        "_class": "emoticon",
                        "_src": "https://jira.devnet.klm.com/images/icons/emoticons/add.png",
                        "_height": "16",
                        "_width": "16",
                        "_align": "absmiddle",
                        "_alt": "",
                        "_border": "0"
                      },
                      {
                        "_class": "emoticon",
                        "_src": "https://jira.devnet.klm.com/images/icons/emoticons/add.png",
                        "_height": "16",
                        "_width": "16",
                        "_align": "absmiddle",
                        "_alt": "",
                        "_border": "0"
                      }
                    ],
                    "__text": "High Level architecture\n \n Solution alternatives\n \n High level estimate per team"
                  },
                  "",
                  "",
                  {
                    "b": "RISKS / DEPENDENCIES / PRE REQUISITE"
                  },
                  {
                    "img": {
                      "_class": "emoticon",
                      "_src": "https://jira.devnet.klm.com/images/icons/emoticons/add.png",
                      "_height": "16",
                      "_width": "16",
                      "_align": "absmiddle",
                      "_alt": "",
                      "_border": "0"
                    }
                  },
                  {
                    "br": "",
                    "b": [
                      "WHO",
                      "Stakeholders"
                    ],
                    "__text": "/"
                  },
                  "",
                  {
                    "b": "EPIC OWNER"
                  },
                  "",
                  "",
                  ""
                ],
                "div": [
                  {
                    "table": {
                      "tbody": {
                        "tr": [
                          {
                            "th": [
                              {
                                "_class": "confluenceTh",
                                "__text": "Type"
                              },
                              {
                                "_class": "confluenceTh",
                                "__text": "Touchpoint"
                              },
                              {
                                "_class": "confluenceTh",
                                "__text": "AF/KL"
                              },
                              {
                                "_class": "confluenceTh",
                                "__text": "Supported by"
                              },
                              {
                                "_class": "confluenceTh",
                                "__text": "Covered by this proposition?"
                              }
                            ]
                          },
                          {
                            "td": [
                              {
                                "_class": "confluenceTd",
                                "__text": "direct online"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "All"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "AF/KL"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "CASA-API"
                              },
                              {
                                "b": "Yes",
                                "_class": "confluenceTd"
                              }
                            ]
                          },
                          {
                            "td": [
                              {
                                "_class": "confluenceTd"
                              },
                              {
                                "_class": "confluenceTd"
                              },
                              {
                                "_class": "confluenceTd"
                              },
                              {
                                "_class": "confluenceTd"
                              },
                              {
                                "_class": "confluenceTd"
                              }
                            ]
                          }
                        ]
                      },
                      "_class": "confluenceTable"
                    },
                    "_class": "table-wrap"
                  },
                  {
                    "table": {
                      "tbody": {
                        "tr": [
                          {
                            "th": [
                              {
                                "_class": "confluenceTh",
                                "__text": "Application / Product team"
                              },
                              {
                                "_class": "confluenceTh",
                                "__text": "Plane"
                              },
                              {
                                "_class": "confluenceTh",
                                "__text": "Requirement"
                              },
                              {
                                "_class": "confluenceTh",
                                "__text": "Feature#"
                              },
                              {
                                "_class": "confluenceTh",
                                "__text": "Effort estimation #sprints"
                              }
                            ]
                          },
                          {
                            "td": [
                              {
                                "_class": "confluenceTd",
                                "__text": "CASA"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "After sales"
                              },
                              {
                                "_class": "confluenceTd"
                              },
                              {
                                "_class": "confluenceTd"
                              },
                              {
                                "_class": "confluenceTd"
                              }
                            ]
                          },
                          {
                            "td": [
                              {
                                "_class": "confluenceTd"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "n.a"
                              },
                              {
                                "_class": "confluenceTd"
                              },
                              {
                                "_class": "confluenceTd"
                              },
                              {
                                "_class": "confluenceTd"
                              }
                            ]
                          }
                        ]
                      },
                      "_class": "confluenceTable"
                    },
                    "_class": "table-wrap"
                  },
                  {
                    "table": {
                      "tbody": {
                        "tr": [
                          {
                            "td": [
                              {
                                "b": "Feature",
                                "_class": "confluenceTd"
                              },
                              {
                                "b": "Feature/User Story Reference",
                                "_class": "confluenceTd"
                              },
                              {
                                "b": "Size (story points)",
                                "_class": "confluenceTd"
                              },
                              {
                                "b": "Status",
                                "_class": "confluenceTd"
                              }
                            ]
                          },
                          {
                            "td": [
                              {
                                "_class": "confluenceTd",
                                "__text": "A new component with a service  to return seat map for reservation window"
                              },
                              {
                                "a": {
                                  "_href": "https://jira.devnet.klm.com/browse/PREPANC-410+",
                                  "_class": "external-link",
                                  "_rel": "nofollow",
                                  "__text": "https://jira.devnet.klm.com/browse/PREPANC-410+"
                                },
                                "_class": "confluenceTd",
                                "__text": "+"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "24"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "Complete"
                              }
                            ]
                          },
                          {
                            "td": [
                              {
                                "_class": "confluenceTd",
                                "__text": "Seat Map component to offer seat map in check-in window"
                              },
                              {
                                "a": {
                                  "_href": "https://jira.devnet.klm.com/browse/CASA-4941+",
                                  "_class": "external-link",
                                  "_rel": "nofollow",
                                  "__text": "https://jira.devnet.klm.com/browse/CASA-4941+"
                                },
                                "_class": "confluenceTd",
                                "__text": "+"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "8"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "PI10 (10.7)"
                              }
                            ]
                          },
                          {
                            "td": [
                              {
                                "_class": "confluenceTd",
                                "__text": "To build a distributed caching platform to cache seat map and other ancillary details."
                              },
                              {
                                "a": {
                                  "_href": "https://jira.devnet.klm.com/browse/CASA-4955+",
                                  "_class": "external-link",
                                  "_rel": "nofollow",
                                  "__text": "https://jira.devnet.klm.com/browse/CASA-4955+"
                                },
                                "_class": "confluenceTd",
                                "__text": "+"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "8"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "PI11"
                              }
                            ]
                          },
                          {
                            "td": [
                              {
                                "_class": "confluenceTd",
                                "__text": "To cache reservation seat map in the distributed cache"
                              },
                              {
                                "a": {
                                  "_href": "https://jira.devnet.klm.com/browse/CASA-4960+",
                                  "_class": "external-link",
                                  "_rel": "nofollow",
                                  "__text": "https://jira.devnet.klm.com/browse/CASA-4960+"
                                },
                                "_class": "confluenceTd",
                                "__text": "+"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "8"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "PI11"
                              }
                            ]
                          },
                          {
                            "td": [
                              {
                                "br": [
                                  "",
                                  ""
                                ],
                                "_class": "confluenceTd",
                                "__text": "The seat map component should have enrichment rules - \n 1- Calculating seat/non-seat position\n 2- Default contents associated with seat/non-seat"
                              },
                              {
                                "a": {
                                  "_href": "https://jira.devnet.klm.com/browse/CASA-4957+",
                                  "_class": "external-link",
                                  "_rel": "nofollow",
                                  "__text": "https://jira.devnet.klm.com/browse/CASA-4957+"
                                },
                                "_class": "confluenceTd",
                                "__text": "+"
                              },
                              {
                                "_class": "confluenceTd"
                              },
                              {
                                "_class": "confluenceTd",
                                "__text": "PI11 ??"
                              }
                            ]
                          }
                        ]
                      },
                      "_class": "confluenceTable"
                    },
                    "_class": "table-wrap"
                  }
                ]
              },
              "environment": "",
              "key": {
                "_id": "998294",
                "__text": "PREPANC-447"
              },
              "summary": "[NEW SEAT MAP COMPONENT]",
              "type": {
                "_id": "2",
                "_iconUrl": "https://jira.devnet.klm.com/secure/viewavatar?size=xsmall avatarId=13921 avatarType=issuetype",
                "__text": "New Feature"
              },
              "priority": {
                "_id": "3",
                "_iconUrl": "https://jira.devnet.klm.com/images/icons/priorities/major.svg",
                "__text": "Major"
              },
              "status": {
                "_id": "13776",
                "_iconUrl": "https://jira.devnet.klm.com/",
                "_description": "This status is managed internally by JIRA Software",
                "__text": "Implementation"
              },
              "statusCategory": {
                "_id": "4",
                "_key": "indeterminate",
                "_colorName": "yellow"
              },
              "resolution": {
                "_id": "-1",
                "__text": "Unresolved"
              },
              "assignee": {
                "_username": "x078782",
                "__text": "Chauderon, Arnaud (PCBN) - KLM"
              },
              "reporter": {
                "_username": "x078782",
                "__text": "Chauderon, Arnaud (PCBN) - KLM"
              },
              "labels": {
                "label": [
                  "ARP_PREPARATIONANCILLARIES",
                  "sprint10.6",
                  "sprint11.1",
                  "sprint11.2"
                ]
              },
              "created": "Mon, 3 Sep 2018 13:25:26 +0200",
              "updated": "Mon, 11 Mar 2019 14:25:04 +0100",
              "fixVersion": [
                "PI10",
                "PI11"
              ],
              "component": [
                "Ancillary Offer",
                "CASA"
              ],
              "due": "",
              "votes": "0",
              "watches": "2",
              "comments": {
                "comment": [
                  {
                    "p": {
                      "a": [
                        {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x078782",
                          "_class": "user-hover",
                          "_rel": "x078782",
                          "__text": "Chauderon, Arnaud (PCBN) - KLM"
                        },
                        {
                          "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=klm27506",
                          "_class": "user-hover",
                          "_rel": "klm27506",
                          "__text": "Neijenhuizen, Pim (AMSSZ) - KLM"
                        }
                      ],
                      "__text": ": is this epic embarked in PI10? plane labels are missing.... cc"
                    },
                    "_id": "2048788",
                    "_author": "klm30128",
                    "_created": "Wed, 6 Feb 2019 20:15:12 +0100"
                  },
                  {
                    "p": {
                      "a": {
                        "_href": "https://jira.devnet.klm.com/secure/ViewProfile.jspa?name=x078782",
                        "_class": "user-hover",
                        "_rel": "x078782",
                        "__text": "Chauderon, Arnaud (PCBN) - KLM"
                      },
                      "__text": ": can you please ASAP remove this epic???? There is no content at all."
                    },
                    "_id": "2054469",
                    "_author": "klm30128",
                    "_created": "Fri, 8 Feb 2019 17:48:44 +0100"
                  },
                  {
                    "p": [
                      {
                        "a": {
                          "_href": "https://jira.devnet.klm.com/browse/DIGITAL-2080",
                          "_class": "external-link",
                          "_rel": "nofollow",
                          "__text": "https://jira.devnet.klm.com/browse/DIGITAL-2080"
                        },
                        "__text": "As part of \n, the new seat map component was already  proposed and got validated in DAT."
                      },
                      "Build permit number = B024-RMO-2019"
                    ],
                    "_id": "2084679",
                    "_author": "t769162",
                    "_created": "Sat, 23 Feb 2019 12:01:20 +0100"
                  },
                  {
                    "div": {
                      "table": {
                        "tbody": {
                          "tr": [
                            {
                              "td": [
                                {
                                  "b": "Feature",
                                  "_class": "confluenceTd"
                                },
                                {
                                  "b": "Feature/User Story Reference",
                                  "_class": "confluenceTd"
                                }
                              ]
                            },
                            {
                              "td": [
                                {
                                  "_class": "confluenceTd",
                                  "__text": "A new component with a service  to return seat map for reservation window"
                                },
                                {
                                  "br": [
                                    "",
                                    ""
                                  ],
                                  "_class": "confluenceTd",
                                  "__text": "https://jira.devnet.klm.com/browse/PREPANC-410"
                                }
                              ]
                            },
                            "",
                            {
                              "td": [
                                {
                                  "_class": "confluenceTd",
                                  "__text": "Seat Map component to offer seat map in check-in window"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "https://jira.devnet.klm.com/browse/CASA-4941"
                                }
                              ]
                            },
                            {
                              "td": [
                                {
                                  "_class": "confluenceTd",
                                  "__text": "To build a distributed caching platform to cache seat map and other ancillary details."
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "https://jira.devnet.klm.com/browse/CASA-4955"
                                }
                              ]
                            },
                            {
                              "td": [
                                {
                                  "_class": "confluenceTd",
                                  "__text": "To cache reservation seat map in the distributed cache"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "https://jira.devnet.klm.com/browse/CASA-4960"
                                }
                              ]
                            },
                            {
                              "td": [
                                {
                                  "br": [
                                    "",
                                    ""
                                  ],
                                  "_class": "confluenceTd",
                                  "__text": "The seat map component should have enrichment rules - \n 1- Calculating seat/non-seat position\n 2- Default contents associated with seat/non-seat"
                                },
                                {
                                  "_class": "confluenceTd",
                                  "__text": "https://jira.devnet.klm.com/browse/CASA-4957"
                                }
                              ]
                            }
                          ]
                        },
                        "_class": "confluenceTable"
                      },
                      "_class": "table-wrap"
                    },
                    "_id": "2099178",
                    "_author": "t769162",
                    "_created": "Sun, 3 Mar 2019 12:12:32 +0100"
                  }
                ]
              },
              "attachments": {
                "attachment": [
                  {
                    "_id": "719456",
                    "_name": "CASA - Deployment - Target.jpg",
                    "_size": "273686",
                    "_author": "x089811",
                    "_created": "Sat, 23 Feb 2019 12:09:24 +0100"
                  },
                  {
                    "_id": "719455",
                    "_name": "Improvement in Ancillaries - New Seat Map Component.pptx",
                    "_size": "568846",
                    "_author": "x089811",
                    "_created": "Sat, 23 Feb 2019 12:05:45 +0100"
                  },
                  {
                    "_id": "719457",
                    "_name": "Target Situation- Context - Alternative 1.jpg",
                    "_size": "238407",
                    "_author": "x089811",
                    "_created": "Sat, 23 Feb 2019 12:09:25 +0100"
                  }
                ]
              },
              "subtasks": "",
              "customfields": {
                "customfield": [
                  {
                    "customfieldname": "Approvals",
                    "customfieldvalues": "",
                    "_id": "customfield_12550",
                    "_key": "com.atlassian.servicedesk.approvals-plugin:sd-approvals"
                  },
                  {
                    "customfieldname": "Business Value",
                    "customfieldvalues": {
                      "customfieldvalue": "100.0"
                    },
                    "_id": "customfield_10083",
                    "_key": "com.atlassian.jira.plugin.system.customfieldtypes:float"
                  },
                  {
                    "customfieldname": "Date of First Response",
                    "customfieldvalues": {
                      "customfieldvalue": "Wed, 6 Feb 2019 20:15:12 +0100"
                    },
                    "_id": "customfield_10041",
                    "_key": "com.atlassian.jira.ext.charting:firstresponsedate"
                  },
                  {
                    "customfieldname": "Development",
                    "customfieldvalues": "",
                    "_id": "customfield_14350",
                    "_key": "com.atlassian.jira.plugins.jira-development-integration-plugin:devsummary"
                  },
                  {
                    "customfieldname": "Global Rank",
                    "customfieldvalues": {
                      "customfieldvalue": "1|i3nc6n:"
                    },
                    "_id": "customfield_11051",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Global Rank (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10150",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Job size",
                    "customfieldvalues": {
                      "customfieldvalue": "3.0"
                    },
                    "_id": "customfield_12152",
                    "_key": "com.atlassian.jira.plugin.system.customfieldtypes:float"
                  },
                  {
                    "customfieldname": "Participants",
                    "customfieldvalues": {
                      "customfieldvalue": [
                        "x078782",
                        "x089811",
                        "klm30128"
                      ]
                    },
                    "_id": "customfield_10020",
                    "_key": "com.atlassian.jira.toolkit:participants"
                  },
                  {
                    "customfieldname": "RROE",
                    "customfieldvalues": {
                      "customfieldvalue": "0.0"
                    },
                    "_id": "customfield_12153",
                    "_key": "com.atlassian.jira.plugin.system.customfieldtypes:float"
                  },
                  {
                    "customfieldname": "Rank",
                    "customfieldvalues": {
                      "customfieldvalue": "1|zyv5l8:"
                    },
                    "_id": "customfield_11050",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Rank (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10552",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Ranking",
                    "customfieldvalues": {
                      "customfieldvalue": "1|i3n7vz:"
                    },
                    "_id": "customfield_11052",
                    "_key": "com.pyxis.greenhopper.jira:gh-lexo-rank"
                  },
                  {
                    "customfieldname": "Ranking (Obsolete)",
                    "customfieldvalues": {
                      "customfieldvalue": "9223372036854775807"
                    },
                    "_id": "customfield_10553",
                    "_key": "com.pyxis.greenhopper.jira:gh-global-rank"
                  },
                  {
                    "customfieldname": "Time Criticality",
                    "customfieldvalues": {
                      "customfieldvalue": "0.0"
                    },
                    "_id": "customfield_12154",
                    "_key": "com.atlassian.jira.plugin.system.customfieldtypes:float"
                  },
                  {
                    "customfieldname": "WSJF",
                    "customfieldvalues": {
                      "customfieldvalue": "33.33"
                    },
                    "_id": "customfield_12160",
                    "_key": "com.innovalog.jmcf.jira-misc-custom-fields:calculated-number-field"
                  }
                ]
              }
            }
          ]
        },
        "_version": "0.92"
      }
    }
    this.tileList = this.convertedJson.rss.channel.item;
  }

}
