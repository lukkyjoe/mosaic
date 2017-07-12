let mockRecs = {
    "version": "1.0",
    "href": "https://api.npr.org/listening/v2/recommendations?channel=npr",
    "attributes": {},
    "items": [
        {
            "version": "1.0",
            "href": "https://api.npr.org/listening/v2/recommendations?channel=npr&sharedMediaId=200010:151-2017-07-12-11-35",
            "attributes": {
                "type": "stationId",
                "uid": "200010:151-2017-07-12-11-35",
                "title": "KQED Public Media",
                "skippable": true,
                "slug": "San Francisco",
                "provider": "KQED Public Media",
                "duration": 15,
                "date": "2017-07-12T11:35:43-04:00",
                "rationale": "Selected by NPR",
                "rating": {
                    "mediaId": "200010:151-2017-07-12-11-35",
                    "origin": "STID",
                    "rating": "START",
                    "elapsed": 0,
                    "duration": 15,
                    "channel": "npr",
                    "affiliations": [],
                    "timestamp": "2017-07-12T11:35:43-0400",
                    "cohort": "B"
                }
            },
            "items": [],
            "links": {
                "audio": [
                    {
                        "content-type": "audio/aac",
                        "href": "https://ondemand.npr.org/npr-mp4/stationid/150_94824e9cde6bf59f2393cf8472927280.mp4"
                    }
                ],
                "image": [
                    {
                        "content-type": "image/png",
                        "href": "https://media.npr.org/images/stations/nprone_logos/kqed.png",
                        "rel": "logo"
                    }
                ],
                "provider": [
                    {
                        "content-type": "application/json",
                        "href": "https://api.npr.org/listening/v2/organizations/151/recommendations"
                    }
                ],
                "recommendations": [
                    {
                        "content-type": "application/json",
                        "href": "https://api.npr.org/listening/v2/ratings?recommend=true&channel=npr&prevStories=1&queued=%5B%5D&flow=0"
                    }
                ]
            },
            "errors": []
        },
        {
            "version": "1.0",
            "href": "https://api.npr.org/listening/v2/recommendations?channel=npr&sharedMediaId=200070:1|2017-07-12T11:00:00-0400|short",
            "attributes": {
                "type": "audio",
                "uid": "200070:1|2017-07-12T11:00:00-0400|short",
                "title": "National Newscast",
                "skippable": true,
                "provider": "NPR",
                "duration": 179,
                "date": "2017-07-12T11:00:00-04:00",
                "description": "A brief update",
                "rationale": "",
                "rating": {
                    "mediaId": "200070:1|2017-07-12T11:00:00-0400|short",
                    "origin": "HRNCAM1",
                    "rating": "START",
                    "elapsed": 0,
                    "duration": 179,
                    "channel": "npr",
                    "affiliations": [],
                    "timestamp": "2017-07-12T11:35:43-0400",
                    "cohort": "B"
                }
            },
            "items": [],
            "links": {
                "audio": [
                    {
                        "content-type": "audio/mp3",
                        "href": "https://ondemand.npr.org/anon.npr-mp3/npr/newscasts/2017/07/12/newscastShort110629.mp3"
                    },
                    {
                        "content-type": "audio/aac",
                        "href": "https://ondemand.npr.org/npr-mp4/npr/newscasts/2017/07/12/newscastShort110629.mp4"
                    },
                    {
                        "content-type": "application/vnd.apple.mpegurl",
                        "href": "https://ondemandhls.npr.org/nprhls/npr/newscasts/2017/07/12/newscastShort110629/master.m3u8"
                    }
                ],
                "recommendations": [
                    {
                        "content-type": "application/json",
                        "href": "https://api.npr.org/listening/v2/ratings?recommend=true&channel=npr&prevStories=1&queued=%5B%5D&flow=1"
                    }
                ]
            },
            "errors": []
        },
        {
            "version": "1.0",
            "href": "https://api.npr.org/listening/v2/recommendations?channel=npr&sharedMediaId=200070:150|2017-07-12T10:00:00-0400|long",
            "attributes": {
                "type": "audio",
                "uid": "200070:150|2017-07-12T10:00:00-0400|long",
                "title": "Local Newscast",
                "skippable": true,
                "provider": "KQED Public Media",
                "duration": 107,
                "date": "2017-07-12T10:00:00-04:00",
                "description": "A brief update from KQED Public Media",
                "rationale": "Your local news",
                "rating": {
                    "mediaId": "200070:150|2017-07-12T10:00:00-0400|long",
                    "origin": "LOCALNC",
                    "rating": "START",
                    "elapsed": 0,
                    "duration": 107,
                    "channel": "npr",
                    "affiliations": [],
                    "timestamp": "2017-07-12T11:35:43-0400",
                    "cohort": "B"
                }
            },
            "items": [],
            "links": {
                "audio": [
                    {
                        "content-type": "audio/mp3",
                        "href": "http://cpa.ds.npr.org/newscasts/150/2017/07/150-newscast-2017-07-12T10-10-00.mp3"
                    }
                ],
                "provider": [
                    {
                        "content-type": "application/json",
                        "href": "https://api.npr.org/listening/v2/organizations/150/recommendations"
                    }
                ],
                "recommendations": [
                    {
                        "content-type": "application/json",
                        "href": "https://api.npr.org/listening/v2/ratings?recommend=true&channel=npr&prevStories=1&queued=%5B%5D&flow=2"
                    }
                ]
            },
            "errors": []
        },
        {
            "version": "1.0",
            "href": "https://api.npr.org/listening/v2/recommendations?channel=npr&sharedMediaId=536829231:536835536",
            "attributes": {
                "type": "audio",
                "uid": "536829231:536835536",
                "title": "White House's FBI Director Nominee Christopher Wray Testifies On Hill ",
                "audioTitle": "White House's FBI Director Nominee Christopher Wray Testifies On Hill ",
                "primary": true,
                "geofence": {
                    "restricted": false,
                    "countries": []
                },
                "skippable": true,
                "slug": "Politics",
                "provider": "NPR",
                "program": "morning edition",
                "duration": 214,
                "date": "2017-07-12T11:10:00-04:00",
                "description": "The White House tapped former Justice Department lawyer Christopher Wray after a drawn-out search to replace James Comey when he was fired abruptly at the beginning of May.",
                "rationale": "One of our top stories",
                "rating": {
                    "mediaId": "536829231:536835536",
                    "origin": "LEAD",
                    "rating": "START",
                    "elapsed": 0,
                    "duration": 214,
                    "channel": "npr",
                    "affiliations": [],
                    "timestamp": "2017-07-12T11:35:43-0400",
                    "cohort": "B"
                }
            },
            "items": [],
            "links": {
                "up": [
                    {
                        "content-type": "text/html",
                        "href": "http://www.npr.org/programs/morning-edition/"
                    }
                ],
                "web": [
                    {
                        "content-type": "text/html",
                        "href": "http://www.npr.org/2017/07/12/536829231/white-houses-fbi-director-nominee-christopher-wray-testifies-on-hill"
                    },
                    {
                        "content-type": "application/xml",
                        "href": "http://api.npr.org/query?id=536829231&apiKey=MDI5NDI3MDQwMDE0ODMwMzg1MDUwN2U2OA000"
                    },
                    {
                        "content-type": "text/html",
                        "href": "http://n.pr/2vcBpMi"
                    },
                    {
                        "content-type": "text/html",
                        "href": "www.npr.org/player/embed/536829231/536835536",
                        "rel": "embed"
                    }
                ],
                "audio": [
                    {
                        "content-type": "audio/mp3",
                        "href": "https://ondemand.npr.org/anon.npr-mp3/npr/me/2017/07/20170712_me_fbi_director_hearing.mp3?orgId=1&topicId=1014&d=214&p=3&story=536829231&t=progseg&e=536781154&seg=20&NPROne=true"
                    },
                    {
                        "content-type": "audio/mp3",
                        "href": "https://ondemand.npr.org/anon.npr-mp3/npr/me/2017/07/20170712_me_fbi_director_hearing.mp3?orgId=1&topicId=1014&d=214&p=3&story=536829231&t=progseg&e=536781154&seg=20&NPROne=true&dl=1",
                        "rel": "download"
                    },
                    {
                        "content-type": "audio/x-ms-wax",
                        "href": "http://www.npr.org/templates/dmg/dmg_wmref_em.php?id=536835536&type=1&mtype=WM&orgId=1&topicId=1014&d=214&p=3&story=536829231&t=progseg&e=536781154&seg=20&NPROne=true"
                    },
                    {
                        "content-type": "audio/aac",
                        "href": "https://ondemand.npr.org/npr-mp4/npr/me/2017/07/20170712_me_fbi_director_hearing.mp4?orgId=1&topicId=1014&d=214&p=3&story=536829231&t=progseg&e=536781154&seg=20&NPROne=true"
                    },
                    {
                        "content-type": "application/vnd.apple.mpegurl",
                        "href": "https://ondemandhls.npr.org/nprhls//npr/me/2017/07/20170712_me_fbi_director_hearing/master.m3u8?NPROne=true"
                    }
                ],
                "onramps": [
                    {
                        "content-type": "text/html",
                        "href": "http://one.npr.org/i/536829231:536835536"
                    }
                ],
                "recommendations": [
                    {
                        "content-type": "application/json",
                        "href": "https://api.npr.org/listening/v2/ratings?recommend=true&channel=npr&prevStories=1&queued=%5B%5D&flow=4"
                    }
                ]
            },
            "errors": []
        },
        {
            "version": "1.0",
            "href": "https://api.npr.org/listening/v2/recommendations?channel=npr&sharedMediaId=536781985:536781989",
            "attributes": {
                "type": "audio",
                "uid": "536781985:536781989",
                "title": "A Brazilian Man Fights For The Right To Smile",
                "audioTitle": "A Brazilian Man Fights For The Right To Smile",
                "primary": true,
                "geofence": {
                    "restricted": false,
                    "countries": []
                },
                "skippable": true,
                "slug": "Latin America",
                "provider": "NPR",
                "program": "morning edition",
                "duration": 157,
                "date": "2017-07-12T04:54:00-04:00",
                "description": "This is a tale about a Brazilian man who took on the authorities by insisting on smiling for official photos — and won.",
                "rationale": "A break from the news",
                "rating": {
                    "mediaId": "536781985:536781989",
                    "origin": "BREAK",
                    "rating": "START",
                    "elapsed": 0,
                    "duration": 157,
                    "channel": "npr",
                    "affiliations": [],
                    "timestamp": "2017-07-12T11:35:43-0400",
                    "cohort": "B"
                }
            },
            "items": [],
            "links": {
                "up": [
                    {
                        "content-type": "text/html",
                        "href": "http://www.npr.org/programs/morning-edition/"
                    }
                ],
                "web": [
                    {
                        "content-type": "text/html",
                        "href": "http://www.npr.org/2017/07/12/536781985/a-brazilian-man-fights-for-the-right-to-smile"
                    },
                    {
                        "content-type": "application/xml",
                        "href": "http://api.npr.org/query?id=536781985&apiKey=MDI5NDI3MDQwMDE0ODMwMzg1MDUwN2U2OA000"
                    },
                    {
                        "content-type": "text/html",
                        "href": "http://n.pr/2u7IHEu"
                    },
                    {
                        "content-type": "text/html",
                        "href": "www.npr.org/player/embed/536781985/536781989",
                        "rel": "embed"
                    }
                ],
                "audio": [
                    {
                        "content-type": "audio/mp3",
                        "href": "https://ondemand.npr.org/anon.npr-mp3/npr/me/2017/07/20170712_me_a_brazilian_man_fights_for_the_right_to_smile.mp3?orgId=1&topicId=1127&d=157&p=3&story=536781985&t=progseg&e=536781154&seg=6&NPROne=true"
                    },
                    {
                        "content-type": "audio/mp3",
                        "href": "https://ondemand.npr.org/anon.npr-mp3/npr/me/2017/07/20170712_me_a_brazilian_man_fights_for_the_right_to_smile.mp3?orgId=1&topicId=1127&d=157&p=3&story=536781985&t=progseg&e=536781154&seg=6&NPROne=true&dl=1",
                        "rel": "download"
                    },
                    {
                        "content-type": "audio/x-ms-wax",
                        "href": "http://www.npr.org/templates/dmg/dmg_wmref_em.php?id=536781989&type=1&mtype=WM&orgId=1&topicId=1127&d=157&p=3&story=536781985&t=progseg&e=536781154&seg=6&NPROne=true"
                    },
                    {
                        "content-type": "audio/aac",
                        "href": "https://ondemand.npr.org/npr-mp4/npr/me/2017/07/20170712_me_a_brazilian_man_fights_for_the_right_to_smile.mp4?orgId=1&topicId=1127&d=157&p=3&story=536781985&t=progseg&e=536781154&seg=6&NPROne=true"
                    },
                    {
                        "content-type": "application/vnd.apple.mpegurl",
                        "href": "https://ondemandhls.npr.org/nprhls//npr/me/2017/07/20170712_me_a_brazilian_man_fights_for_the_right_to_smile/master.m3u8?NPROne=true"
                    }
                ],
                "onramps": [
                    {
                        "content-type": "text/html",
                        "href": "http://one.npr.org/i/536781985:536781989"
                    }
                ],
                "recommendations": [
                    {
                        "content-type": "application/json",
                        "href": "https://api.npr.org/listening/v2/ratings?recommend=true&channel=npr&prevStories=1&queued=%5B%5D&flow=5"
                    }
                ]
            },
            "errors": []
        },
        {
            "version": "1.0",
            "href": "https://api.npr.org/listening/v2/recommendations?channel=npr&sharedMediaId=536782064:536782065",
            "attributes": {
                "type": "audio",
                "uid": "536782064:536782065",
                "title": "China Less Willing To Send Dissidents Abroad Than Before",
                "audioTitle": "China Less Willing To Send Dissidents Abroad Than Before",
                "primary": true,
                "geofence": {
                    "restricted": false,
                    "countries": []
                },
                "skippable": true,
                "slug": "Asia",
                "provider": "NPR",
                "program": "morning edition",
                "duration": 233,
                "date": "2017-07-12T04:54:00-04:00",
                "description": "Ailing Nobel laureate and dissident Liu Xiaobo would prefer not to die in China. But China is more confident of itself, and less willing to send dissidents into exile abroad than it used to be.",
                "rationale": "",
                "rating": {
                    "mediaId": "536782064:536782065",
                    "origin": "SELECTS1",
                    "rating": "START",
                    "elapsed": 0,
                    "duration": 233,
                    "channel": "npr",
                    "affiliations": [],
                    "timestamp": "2017-07-12T11:35:43-0400",
                    "cohort": "B"
                }
            },
            "items": [],
            "links": {
                "up": [
                    {
                        "content-type": "text/html",
                        "href": "http://www.npr.org/programs/morning-edition/"
                    }
                ],
                "web": [
                    {
                        "content-type": "text/html",
                        "href": "http://www.npr.org/2017/07/12/536782064/china-less-willing-to-send-dissidents-abroad-than-before"
                    },
                    {
                        "content-type": "application/xml",
                        "href": "http://api.npr.org/query?id=536782064&apiKey=MDI5NDI3MDQwMDE0ODMwMzg1MDUwN2U2OA000"
                    },
                    {
                        "content-type": "text/html",
                        "href": "http://n.pr/2u7TMW5"
                    },
                    {
                        "content-type": "text/html",
                        "href": "www.npr.org/player/embed/536782064/536782065",
                        "rel": "embed"
                    }
                ],
                "audio": [
                    {
                        "content-type": "audio/mp3",
                        "href": "https://ondemand.npr.org/anon.npr-mp3/npr/me/2017/07/20170712_me_china_less_willing_to_send_dissidents_abroad_than_before.mp3?orgId=1&topicId=1125&d=233&p=3&story=536782064&t=progseg&e=536781154&seg=7&NPROne=true"
                    },
                    {
                        "content-type": "audio/mp3",
                        "href": "https://ondemand.npr.org/anon.npr-mp3/npr/me/2017/07/20170712_me_china_less_willing_to_send_dissidents_abroad_than_before.mp3?orgId=1&topicId=1125&d=233&p=3&story=536782064&t=progseg&e=536781154&seg=7&NPROne=true&dl=1",
                        "rel": "download"
                    },
                    {
                        "content-type": "audio/x-ms-wax",
                        "href": "http://www.npr.org/templates/dmg/dmg_wmref_em.php?id=536782065&type=1&mtype=WM&orgId=1&topicId=1125&d=233&p=3&story=536782064&t=progseg&e=536781154&seg=7&NPROne=true"
                    },
                    {
                        "content-type": "audio/aac",
                        "href": "https://ondemand.npr.org/npr-mp4/npr/me/2017/07/20170712_me_china_less_willing_to_send_dissidents_abroad_than_before.mp4?orgId=1&topicId=1125&d=233&p=3&story=536782064&t=progseg&e=536781154&seg=7&NPROne=true"
                    },
                    {
                        "content-type": "application/vnd.apple.mpegurl",
                        "href": "https://ondemandhls.npr.org/nprhls//npr/me/2017/07/20170712_me_china_less_willing_to_send_dissidents_abroad_than_before/master.m3u8?NPROne=true"
                    }
                ],
                "onramps": [
                    {
                        "content-type": "text/html",
                        "href": "http://one.npr.org/i/536782064:536782065"
                    }
                ],
                "recommendations": [
                    {
                        "content-type": "application/json",
                        "href": "https://api.npr.org/listening/v2/ratings?recommend=true&channel=npr&prevStories=1&queued=%5B%5D&flow=7"
                    }
                ]
            },
            "errors": []
        },
        {
            "version": "1.0",
            "href": "https://api.npr.org/listening/v2/recommendations?channel=npr&sharedMediaId=536782009:536782010",
            "attributes": {
                "type": "audio",
                "uid": "536782009:536782010",
                "title": "Donald Trump Jr. Says He 'Wanted To Hear It Out' In Russian Lawyer Meeting",
                "audioTitle": "Donald Trump Jr. Says He 'Wanted To Hear It Out' In Russian Lawyer Meeting",
                "primary": true,
                "geofence": {
                    "restricted": false,
                    "countries": []
                },
                "skippable": true,
                "slug": "Politics",
                "provider": "NPR",
                "program": "morning edition",
                "duration": 132,
                "date": "2017-07-12T04:54:00-04:00",
                "description": "Donald Trump Jr. acknowledged in an interview with Fox News Tuesday that \"in retrospect, I probably would have done things a little differently\" when meeting last year with a Kremlin-linked attorney.",
                "rationale": "Depth and perspective on the news",
                "rating": {
                    "mediaId": "536782009:536782010",
                    "origin": "CORE",
                    "rating": "START",
                    "elapsed": 0,
                    "duration": 132,
                    "channel": "npr",
                    "affiliations": [],
                    "timestamp": "2017-07-12T11:35:43-0400",
                    "cohort": "B"
                }
            },
            "items": [],
            "links": {
                "up": [
                    {
                        "content-type": "text/html",
                        "href": "http://www.npr.org/programs/morning-edition/"
                    }
                ],
                "web": [
                    {
                        "content-type": "text/html",
                        "href": "http://www.npr.org/2017/07/12/536782009/donald-trump-jr-says-he-wanted-to-hear-it-out-in-russian-lawyer-meeting"
                    },
                    {
                        "content-type": "application/xml",
                        "href": "http://api.npr.org/query?id=536782009&apiKey=MDI5NDI3MDQwMDE0ODMwMzg1MDUwN2U2OA000"
                    },
                    {
                        "content-type": "text/html",
                        "href": "http://n.pr/2u7u5EQ"
                    },
                    {
                        "content-type": "text/html",
                        "href": "www.npr.org/player/embed/536782009/536782010",
                        "rel": "embed"
                    }
                ],
                "audio": [
                    {
                        "content-type": "audio/mp3",
                        "href": "https://ondemand.npr.org/anon.npr-mp3/npr/me/2017/07/20170712_me_donald_trump_jr_says_he_wanted_to_hear_it_out_in_russian_lawyer_meeting.mp3?orgId=1&topicId=1014&d=132&p=3&story=536782009&t=progseg&e=536781154&seg=10&NPROne=true"
                    },
                    {
                        "content-type": "audio/mp3",
                        "href": "https://ondemand.npr.org/anon.npr-mp3/npr/me/2017/07/20170712_me_donald_trump_jr_says_he_wanted_to_hear_it_out_in_russian_lawyer_meeting.mp3?orgId=1&topicId=1014&d=132&p=3&story=536782009&t=progseg&e=536781154&seg=10&NPROne=true&dl=1",
                        "rel": "download"
                    },
                    {
                        "content-type": "audio/x-ms-wax",
                        "href": "http://www.npr.org/templates/dmg/dmg_wmref_em.php?id=536782010&type=1&mtype=WM&orgId=1&topicId=1014&d=132&p=3&story=536782009&t=progseg&e=536781154&seg=10&NPROne=true"
                    },
                    {
                        "content-type": "audio/aac",
                        "href": "https://ondemand.npr.org/npr-mp4/npr/me/2017/07/20170712_me_donald_trump_jr_says_he_wanted_to_hear_it_out_in_russian_lawyer_meeting.mp4?orgId=1&topicId=1014&d=132&p=3&story=536782009&t=progseg&e=536781154&seg=10&NPROne=true"
                    },
                    {
                        "content-type": "application/vnd.apple.mpegurl",
                        "href": "https://ondemandhls.npr.org/nprhls//npr/me/2017/07/20170712_me_donald_trump_jr_says_he_wanted_to_hear_it_out_in_russian_lawyer_meeting/master.m3u8?NPROne=true"
                    }
                ],
                "onramps": [
                    {
                        "content-type": "text/html",
                        "href": "http://one.npr.org/i/536782009:536782010"
                    }
                ],
                "recommendations": [
                    {
                        "content-type": "application/json",
                        "href": "https://api.npr.org/listening/v2/ratings?recommend=true&channel=npr&prevStories=1&queued=%5B%5D&flow=9"
                    }
                ]
            },
            "errors": []
        },
        {
            "version": "1.0",
            "href": "https://api.npr.org/listening/v2/recommendations?channel=npr&sharedMediaId=535822257:536505401",
            "attributes": {
                "type": "audio",
                "uid": "535822257:536505401",
                "title": "Pairing Wine And Weed: Is It A California Dream Or Nightmare?",
                "audioTitle": "Pairing Wine And Weed: Is It A California Dream Or Nightmare?",
                "primary": true,
                "geofence": {
                    "restricted": false,
                    "countries": []
                },
                "skippable": true,
                "slug": "Food",
                "provider": "NPR",
                "program": "all things considered",
                "duration": 366,
                "date": "2017-07-10T12:44:00-04:00",
                "description": "Cannabis entrepreneurs hope to capitalize on the state's wine tourism industry by melding marijuana with meals and snagging some fertile land. But many winemakers are taking a wait-and-see approach.",
                "rationale": "In-depth NPR reporting",
                "rating": {
                    "mediaId": "535822257:536505401",
                    "origin": "INVEST",
                    "rating": "START",
                    "elapsed": 0,
                    "duration": 366,
                    "channel": "npr",
                    "affiliations": [],
                    "timestamp": "2017-07-12T11:35:43-0400",
                    "cohort": "B"
                }
            },
            "items": [],
            "links": {
                "up": [
                    {
                        "content-type": "text/html",
                        "href": "http://www.npr.org/programs/all-things-considered/"
                    }
                ],
                "web": [
                    {
                        "content-type": "text/html",
                        "href": "http://www.npr.org/sections/thesalt/2017/07/10/535822257/pairing-wine-and-weed-is-it-a-california-dream-or-nightmare"
                    },
                    {
                        "content-type": "application/xml",
                        "href": "http://api.npr.org/query?id=535822257&apiKey=MDI5NDI3MDQwMDE0ODMwMzg1MDUwN2U2OA000"
                    },
                    {
                        "content-type": "text/html",
                        "href": "http://n.pr/2tRymf0"
                    },
                    {
                        "content-type": "text/html",
                        "href": "http://www.npr.org/templates/transcript/transcript.php?storyId=535822257",
                        "rel": "transcript"
                    },
                    {
                        "content-type": "text/html",
                        "href": "www.npr.org/player/embed/535822257/536505401",
                        "rel": "embed"
                    }
                ],
                "audio": [
                    {
                        "content-type": "audio/mp3",
                        "href": "https://ondemand.npr.org/anon.npr-mp3/npr/atc/2017/07/20170710_atc_pairing_wine_and_weed_is_it_a_california_dream_or_nightmare.mp3?orgId=1&topicId=1053&d=366&p=2&story=535822257&t=progseg&e=536403945&seg=7&NPROne=true"
                    },
                    {
                        "content-type": "audio/mp3",
                        "href": "https://ondemand.npr.org/anon.npr-mp3/npr/atc/2017/07/20170710_atc_pairing_wine_and_weed_is_it_a_california_dream_or_nightmare.mp3?orgId=1&topicId=1053&d=366&p=2&story=535822257&t=progseg&e=536403945&seg=7&NPROne=true&dl=1",
                        "rel": "download"
                    },
                    {
                        "content-type": "audio/x-ms-wax",
                        "href": "http://www.npr.org/templates/dmg/dmg_wmref_em.php?id=536505401&type=1&mtype=WM&orgId=1&topicId=1053&d=366&p=2&story=535822257&t=progseg&e=536403945&seg=7&NPROne=true"
                    },
                    {
                        "content-type": "audio/aac",
                        "href": "https://ondemand.npr.org/npr-mp4/npr/atc/2017/07/20170710_atc_pairing_wine_and_weed_is_it_a_california_dream_or_nightmare.mp4?orgId=1&topicId=1053&d=366&p=2&story=535822257&t=progseg&e=536403945&seg=7&NPROne=true"
                    },
                    {
                        "content-type": "application/vnd.apple.mpegurl",
                        "href": "https://ondemandhls.npr.org/nprhls//npr/atc/2017/07/20170710_atc_pairing_wine_and_weed_is_it_a_california_dream_or_nightmare/master.m3u8?NPROne=true"
                    }
                ],
                "onramps": [
                    {
                        "content-type": "text/html",
                        "href": "http://one.npr.org/i/535822257:536505401"
                    }
                ],
                "image": [
                    {
                        "content-type": "image/jpeg",
                        "href": "https://media.npr.org/assets/img/2017/07/07/img_7568-f4d2e8f3baf8ecdbc0b4f8587f6c099069d0ea98.jpg?s=600",
                        "rel": "standard",
                        "image": "536035167",
                        "provider": "Courtesy of Sonoma Cannabis Company/Kristen Jeanne"
                    },
                    {
                        "content-type": "image/jpeg",
                        "href": "https://media.npr.org/assets/img/2017/07/07/img_7568_sq-33dfc71918c1bbb15fb3d02f754880ab64b292a4.jpg?s=600",
                        "rel": "square",
                        "image": "536035167",
                        "provider": "Courtesy of Sonoma Cannabis Company/Kristen Jeanne"
                    },
                    {
                        "content-type": "image/jpeg",
                        "href": "https://media.npr.org/assets/img/2017/07/07/img_7568_wide-18b743ff8a5762e135ad82fb6db8e6d171f777cb.jpg?s=600",
                        "rel": "wide",
                        "image": "536035167",
                        "provider": "Courtesy of Sonoma Cannabis Company/Kristen Jeanne"
                    },
                    {
                        "content-type": "image/jpeg",
                        "href": "https://media.npr.org/assets/img/2017/07/07/img_7568_custom-c3de9d59e9c34f653c6e10b891d9c324183160c0.jpg?s=600",
                        "rel": "enlargement",
                        "image": "536035167",
                        "provider": "Courtesy of Sonoma Cannabis Company/Kristen Jeanne"
                    },
                    {
                        "content-type": "image/jpeg",
                        "href": "https://media.npr.org/assets/img/2017/07/07/img_7568_custom-c3de9d59e9c34f653c6e10b891d9c324183160c0.jpg?s=600",
                        "rel": "custom",
                        "image": "536035167",
                        "provider": "Courtesy of Sonoma Cannabis Company/Kristen Jeanne"
                    },
                    {
                        "content-type": "image/jpeg",
                        "href": "https://media.npr.org/assets/img/2017/07/07/img_7675-9d99baac1db77a9e5a3cfd99e3ecaeec48e86e37.jpg?s=600",
                        "rel": "standard",
                        "image": "536035459",
                        "provider": "Courtesy of Sonoma Cannabis Company/ Kristen Jeanne "
                    },
                    {
                        "content-type": "image/jpeg",
                        "href": "https://media.npr.org/assets/img/2017/07/07/img_7675_sq-179d0ee6f58eb2d27b94591cdc82a7070c320b73.jpg?s=600",
                        "rel": "square",
                        "image": "536035459",
                        "provider": "Courtesy of Sonoma Cannabis Company/ Kristen Jeanne "
                    },
                    {
                        "content-type": "image/jpeg",
                        "href": "https://media.npr.org/assets/img/2017/07/07/img_7675_wide-79dc18e0fd300b6664336d506f01269635a94b0e.jpg?s=600",
                        "rel": "wide",
                        "image": "536035459",
                        "provider": "Courtesy of Sonoma Cannabis Company/ Kristen Jeanne "
                    },
                    {
                        "content-type": "image/jpeg",
                        "href": "https://media.npr.org/assets/img/2017/07/07/img_7675_custom-6f11f3fae9429034dcfea14316cf44dba9a675c3.jpg?s=600",
                        "rel": "enlargement",
                        "image": "536035459",
                        "provider": "Courtesy of Sonoma Cannabis Company/ Kristen Jeanne "
                    },
                    {
                        "content-type": "image/jpeg",
                        "href": "https://media.npr.org/assets/img/2017/07/07/img_7675_custom-6f11f3fae9429034dcfea14316cf44dba9a675c3.jpg?s=600",
                        "rel": "custom",
                        "image": "536035459",
                        "provider": "Courtesy of Sonoma Cannabis Company/ Kristen Jeanne "
                    },
                    {
                        "content-type": "image/jpeg",
                        "href": "https://media.npr.org/assets/img/2017/07/10/tom-7eadcd4b94968a651b8e7ed7337474d9789f76d9.jpg?s=600",
                        "rel": "standard",
                        "image": "536462024",
                        "provider": "John Burnett/NPR"
                    },
                    {
                        "content-type": "image/jpeg",
                        "href": "https://media.npr.org/assets/img/2017/07/10/tom_sq-d9355cc907492a6356985a8592255632be4e0dd9.jpg?s=600",
                        "rel": "square",
                        "image": "536462024",
                        "provider": "John Burnett/NPR"
                    },
                    {
                        "content-type": "image/jpeg",
                        "href": "https://media.npr.org/assets/img/2017/07/10/tom_wide-fd96699af9c7e46d8ac29f5bbd510c18de67ed75.jpg?s=600",
                        "rel": "wide",
                        "image": "536462024",
                        "provider": "John Burnett/NPR"
                    },
                    {
                        "content-type": "image/jpeg",
                        "href": "https://media.npr.org/assets/img/2017/07/10/tom_custom-2c6e5c9c9e936e88bca758ba611de38f2c0cb800.jpg?s=600",
                        "rel": "enlargement",
                        "image": "536462024",
                        "provider": "John Burnett/NPR"
                    },
                    {
                        "content-type": "image/jpeg",
                        "href": "https://media.npr.org/assets/img/2017/07/10/tom_custom-2c6e5c9c9e936e88bca758ba611de38f2c0cb800.jpg?s=600",
                        "rel": "custom",
                        "image": "536462024",
                        "provider": "John Burnett/NPR"
                    },
                    {
                        "content-type": "image/jpeg",
                        "href": "https://media.npr.org/assets/img/2017/07/10/img_3552_custom-8a299db6660ab4f2c849c042e138bbf39797cfdb.jpg?s=600",
                        "rel": "custom",
                        "image": "536462612",
                        "provider": "John Burnett/NPR"
                    }
                ],
                "recommendations": [
                    {
                        "content-type": "application/json",
                        "href": "https://api.npr.org/listening/v2/ratings?recommend=true&channel=npr&prevStories=1&queued=%5B%5D&flow=10"
                    }
                ]
            },
            "errors": []
        }
    ],
    "links": {},
    "errors": []
}

import RNAudioStreamer from 'react-native-audio-streamer';
import React from 'react';
import Sound from 'react-native-sound';
import {
  AppRegistry,
  Text,
  View, 
  Button, 
  WebView, 
  AsyncStorage
} from 'react-native';


// class Play extends React.Component {
//   static navigationOptions = {
//     title: 'play song',
//   };
//   render() {
//     RNAudioStreamer.setUrl('http://lacavewebradio.chickenkiller.com:8000/stream.mp3')
//     RNAudioStreamer.play()
//     return (
//       <Text > Should play </Text>
//     );
//   }
// }

// export default Play;



class RemoteSound extends React.Component {
  playTrack = () => {
    const track = new Sound('https://ondemand.npr.org/anon.npr-mp3/npr/atc/2017/07/20170712_atc_jared_kushner_faces_backlash_for_role_in_trump_jrs_russia_meeting.mp3?orgId=1&topicId=1122&d=236&p=2&story=536887839&t=progseg&e=536805649&seg=1&NPROne=true', null, (e) => {
      if (e) {
        console.log('error loading track:', e)
      } else {
        track.play()
      }
    })
  }

  render() {
    return <Button title="play me" onPress={this.playTrack} />
  }
}

export default RemoteSound;