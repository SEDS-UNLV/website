// ---------------------- UPDATE THIS INFORMATION ----------------------
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

var autofill = 
`
{
        "general_meetings": {
            "dates": [ "August 31st @6p PT",
                "September 28th @6p PT",
                "Nov. 15th @5:30p PT"],
            "location": "TBE A-107 / Discord"
        },
        "upcoming_launches": {
            "dates": [
                "May 26th-28th, 2023 (Tripoli)",
                "June 17, 2023 (Tripoli)",
                "September 16, 2023 (Tripoli)",
                "Nov. 15th"
            ],
            "location": "Jean Roach Dry Lake"
        }
    }, 
    "contact": {
        "email": {
            "url": "seds@unlv.edu"
        },
        "instagram": {
            "url": "https://www.instagram.com/sedsunlv/"
        },
        "facebook": {
            "url": "https://www.facebook.com/sedsunlv/"
        },
        "youtube": {
            "url": "https://www.youtube.com/channel/UCsZVNjRN5Dt3QDY0_PHx53A"
        },
        "discord": {
            "url": "https://discord.gg/huDxbjJHzy"
        },
        "address": "SEDS UNLV 4505 S. Maryland Pkwy MS 4027, Las Vegas NV 89154"
    }, 
    "upcoming_events": [
        {
            "name":  "General Meeting 3"
            "location": "TBE A-107"
            "date": "Nov. 15th"
        
        }

    ]
}

`
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ---------------------- UPDATE THIS INFORMATION ----------------------

// Don't touch code below
var autofill_json = JSON.parse(autofill);

function populateDateLocation(jsonpath, id_name){
    for (let i = 0; i < (jsonpath.dates).length; i++) {
        var list_item = document.createElement("li");
        var text_node = document.createTextNode(jsonpath.dates[i]);
        list_item.appendChild(text_node);
        var parent_element = document.getElementById(id_name);
        parent_element.appendChild(list_item);
    }
    
    var list_item = document.createElement("li");
    var text_node = document.createTextNode("Location: " + jsonpath.location);
    list_item.appendChild(text_node);
    var parent_element = document.getElementById(id_name);
    parent_element.appendChild(list_item);
}

// Populating project_meetings
if (document.getElementById("project_meetings")){
    populateDateLocation(autofill_json.meetings_and_events.project_meetings, "project_meetings");
}

// Populating general_meetings
if (document.getElementById("general_meetings")){
    populateDateLocation(autofill_json.meetings_and_events.general_meetings, "general_meetings");
}

// Populating upcoming_launches
if (document.getElementById("upcoming_launches")){
    populateDateLocation(autofill_json.meetings_and_events.upcoming_launches, "upcoming_launches");
}

//  ---------------------- Contact Page ----------------------

var email_tag = document.getElementById('email_address');
email_tag.href = "mailto:" + autofill_json.contact.email.url
var text_node = document.createTextNode(autofill_json.contact.email.url)
email_tag.appendChild(text_node)

var ig_tag = document.getElementById('instagram_icon_link');
ig_tag.href = autofill_json.contact.instagram.url

var fb_tag = document.getElementById('facebook_icon_link');
fb_tag.href = autofill_json.contact.facebook.url

var yt_tag = document.getElementById('youtube_icon_link');
yt_tag.href = autofill_json.contact.youtube.url

// var discord_tag = document.getElementById('discord_icon_link');
// discord_tag.href = autofill_json.contact.discord.url

if (document.getElementById("contact_info")) {
    // address
    var parent_element = document.getElementById("contact_info");
    var list_item = document.createElement("li");
    list_item.style.color = "black";
    var text_node = document.createTextNode(autofill_json.contact.address)
    list_item.appendChild(text_node)

    parent_element.appendChild(list_item)


    // email
    // var parent_element = document.getElementById("contact_info");
    // var list_item = document.createElement("li");
    // list_item.style.color = "black";
    // var text_node = document.createTextNode(autofill_json.contact.email.url)
    // list_item.appendChild(text_node)

    parent_element.appendChild(list_item)
}

if (document.getElementById("upcoming_events_table")) {
    console.log(autofill_json.upcoming_events.length)
    for (let i = 0; i < autofill_json.upcoming_events.length; i++) {
        var t_row = document.createElement("tr");
        var t_d1 = document.createElement("td");
        var t_d1_text = document.createTextNode(autofill_json.upcoming_events[i].date)
        t_d1.appendChild(t_d1_text);
        t_row.appendChild(t_d1);
    
        var t_d2 = document.createElement("td");
        var t_d2_text = document.createTextNode(autofill_json.upcoming_events[i].location)
        t_d2.appendChild(t_d2_text);
        t_row.appendChild(t_d2);

        var t_d3 = document.createElement("td");
        var t_d3_text = document.createTextNode(autofill_json.upcoming_events[i].name)
        t_d3.appendChild(t_d3_text);
        t_row.appendChild(t_d3);
    
        var t_body = document.getElementById("upcoming_events_table");
        t_body.appendChild(t_row);
    }
}
