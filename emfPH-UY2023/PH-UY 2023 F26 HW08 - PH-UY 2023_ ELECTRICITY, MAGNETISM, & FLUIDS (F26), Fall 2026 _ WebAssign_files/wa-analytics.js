
/* Analytics Data collection */


function WaAnalytics() {}

WaAnalytics.prototype.recordActivityAnalytics = function(activity) {

    if (!activity ) {
        return;
    }

    var urlElement = document.getElementById('wa-analytics-URL');
    var apiElement = document.getElementById('wa-analytics-API');

    var analyticsURL = urlElement ? urlElement.value : '';
    var analyticsApiKey = apiElement ? apiElement.value : '';
    var analyticsData = {
        records: [activity]
    };


    var xhr = new XMLHttpRequest();
    xhr.open("POST", analyticsURL, true);
    xhr.setRequestHeader('x-api-key', analyticsApiKey);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.send(JSON.stringify(analyticsData));
};

/*
* tagKeys: Array of analytic Properties
* analyticsObj: Obj that hold analytic Property as key and value collected from input hidden element
*
* for each key
* 1. we get its respective input element
* 2. Read its value
* 3. Add key, value to analyticsObj
*  */
WaAnalytics.prototype.scrapeAndGenerateAnalyticsObject = (function (){

    // common analytic Properties, and tag properties for all analytic events
    var commonKeys = ['sessionId', 'userSSOGUID'];

    /*
    * Most of the time these elements will be inside analytics template
    * In Few cases, developer needs to add an input hidden element on that page.
    * */
    function getAnalyticsDomElement(key){
        return document.getElementById('wa-analytics-'+key);
    }

    function getValueForKeys(keys, obj){
        for(var i = 0; i< keys.length; i++){
            var key = keys[i];
            var element = getAnalyticsDomElement(key);
            if(element){
                obj[key] = element.value
            }
        }
    }

    function getValueForTags(keys,tags){
        for(var i = 0; i< keys.length; i++){
            var key = keys[i];
            var element = getAnalyticsDomElement(key);
            if (element){
                tags.push({
                    key: key,
                    value: element.value
                })
            }
        }
    }

    // public
    return function(tagKeys, analyticsObj){
        getValueForKeys(commonKeys, analyticsObj);
        var tags = [];
        getValueForTags(tagKeys, tags);
        analyticsObj.tags = tags;
    }
})();

WaAnalytics.prototype.getAnalyticsForAction = (function (){
    /*
    * Look-up key will serve as identifier in either id or name attribute of a HTML element.
    * Three use case:
    * 1. Load Event - Input hidden element used with id: 'wa-analytics' & value: look-up key(action).
    * 2. UI events - custom data attribute `data-wa-analytics` need to be provided with value: look-up key(action).
    * 3. Direct function call with look-up key(action) as argument
    * */
    var analyticActions = {
        myEbookDropDownOpen: {
            category: 'ebook',
            action: 'myEbooksOpen'
        },
        readEbook: {
            category: 'ebook',
            action: 'readIt'
        },
        mp_all_questions_analytics: {
            category:'question',
            action:'launch',
            tags: ['sectionId','deploymentId']
        },
        communication_check: {
            category: 'CommunicationCheck',
            action: 'CheckAllUnreadCommunication'
        },
        view_calendar: {
            category: 'Calendar',
            action: 'ViewCalendar'
        },
        view_folders: {
            category: 'Folders',
            action: 'ViewFolders'
        },
        class_view: {
            category: 'Classview',
            action: 'ViewSingleClassview',
            tags: ['sectionId', 'contextId']
        },
        view_reschedule_assignments: {
            category: 'Classview',
            action: 'RescheduleAssignmentsForSection',
            tags: ['sectionId', 'contextId']
        },
        view_class_key_settings: {
            category: 'ClassManagement',
            action: 'ViewClassKeySettings',
            tags: ['sectionId', 'contextId']
        },
        view_resources: {
            category: 'Classview',
            action: 'ViewResourcesForSection',
            tags: ['sectionId', 'contextId']
        },
        view_or_edit_class_access: {
            category: 'ClassManagement',
            action: 'ViewAdditionalFacultyAccessForSection',
            tags: ['sectionId', 'contextId']
        },
        add_class_access: {
            category: 'ClassManagement',
            action: 'AddAdditionalFacultyAccessForSection',
            tags: ['sectionId', 'contextId']
        },
		reorder_assignments: {
            category: 'ClassManagement',
            action: 'ReorderDisplayOfAssignments',
            tags: ['sectionId', 'contextId']
        },
        propagate_assignments: {
            category: 'ClassManagement',
            action: 'PropagateAssignmentsToAdditionalSection',
            tags: ['sectionId', 'contextId']
        },
        create_new_course: {
            category: 'ClassManagement',
            action: 'CreateNewCourse'
        },
        create_new_course_copying_from_existing: {
            category: 'ClassManagement',
            action: 'CreateNewCourseCopyingFromExisting',
            tags: ['sectionId', 'contextId','textbookCode','iacISBN']
        },
        copy_to_new_section	: {
            category: 'ClassManagement',
            action: 'CopyScheduledAssignmentsNewSection',
            tags: ['sectionId', 'contextId']
        },
        copy_to_existing_section: {
            category: 'ClassManagement',
            action: 'CopyScheduledAssignmentsExistingSection',
            tags: ['sectionId', 'contextId']
        },
        add_textbooks_and_additional_content: {
            category: 'ClassManagement',
            action: 'ModifyTextbooksForSection',
            tags: ['sectionId', 'contextId']
        },
        view_edit_shibboleth_entitlements: {
            category: 'ClassManagement',
            action: 'ManageShibbolethEntitlements',
            tags: ['sectionId', 'contextId']
        },
        view_class_schedule: {
            category: 'ClassSchedule',
            action: 'ManageScheduledAssignmentsForSection',
            tags: ['courseId']
        },
        view_course_packs: {
            category: 'CoursePacks',
            action: 'ViewAvailableCoursePacksForSection',
            tags: ['sectionId', 'contextId', 'textbookCode', 'iacISBN']
        },
        preview_assignment: {
            category: 'ClassSchedule',
            action: 'PreviewAssignment',
            tags: ['assignmentId']
        },
        edit_assignment_restrictions: {
            category: 'ClassSchedule',
            action: 'EditRestrictionsForAssignment',
            tags: ['sectionId', 'contextId', 'assignmentId', 'deploymentId']
        },
        grant_extra_time_to_students: {
            category: 'ClassSchedule',
            action: 'GrantExtraTimeToSelectedStudents',
            tags: ['sectionId', 'contextId', 'assignmentId', 'deploymentId']
        },
        create_new_assignment: {
            category: 'Assignment',
            action: 'CreateNewAssignment'
        },
        view_my_assignments: {
            category: 'Assignment',
            action: 'ViewMyAssignments'
        },
        view_my_categories: {
            category: 'Assignment',
            action: 'ViewMyCategories'
        },
        view_recently_modified_assignments: {
            category: 'Assignment',
            action: 'ViewRecentlyModifiedAssignments'
        },
        search_for_assignments: {
            category: 'Assignment',
            action: 'AssignmentSearch'
        },
        view_assignment_templates: {
            category: 'Assignment',
            action: 'ViewAssignmentTemplates'
        },
        edit_assignment: {
            category: 'Assignment',
            action: 'EditAssignment',
            tags: ['assignmentId']
        },
        assignment_preview: {
            category: 'Assignment',
            action: 'PreviewAssignment',
            tags: ['assignmentId']
        },
        create_new_question: {
            category: 'Question',
            action: 'CreateNewQuestion'
        },
        view_my_questions: {
            category: 'Question',
            action: 'ViewMyQuestions'
        },
        view_question_collections: {
            category: 'Question',
            action: 'ViewQuestionCollections'
        },
        view_recently_modified_questions: {
            category: 'Question',
            action: 'ViewRecentlyModifiedQuestions'
        },
        search_for_questions: {
            category: 'Question',
            action: 'QuestionSearch'
        },
        edit_question: {
            category: 'Question',
            action: 'EditQuestion',
            tags: ['questionId']
        },
        question_preview: {
            category: 'Question',
            action: 'PreviewQuestion',
            tags: ['questionId']
        },
        view_my_classes: {
            category: 'Tasks',
            action: 'ViewMyClasses'
        },
        view_my_groups: {
            category: 'Tasks',
            action: 'ViewMyGroups'
        },
        edit_class_settings: {
            category: 'ClassManagement',
            action: 'EditClassSettings',
            tags: ['sectionId', 'contextId']
        },
        view_roster_for_class: {
            category: 'ClassManagement',
            action: 'ViewRosterForSection',
            tags: ['sectionId', 'contextId']
        },
        download_manager: {
            category: 'Tasks',
            action: 'DownloadDataFromClass',
            tags: ['sectionId', 'contextId']
        },
        view_gradebook: {
            category: 'Grades',
            action: 'ViewGradebookForSection',
            tags: ['sectionId', 'contextId']
        },
        view_reports: {
            category: 'Grades',
            action: 'CreateReportForSection',
            tags: ['sectionId', 'contextId']
        },
        view_class_scores: {
            category: 'Grades',
            action: 'ViewScoresForSection',
            tags: ['sectionId', 'contextId']
        },
        view_class_analysis: {
            category: 'Grades',
            action: 'ViewScoreAnalysisForSection',
            tags: ['sectionId', 'contextId']
        },
        add_scores_to_gradebook: {
            category: 'Grades',
            action: 'AddExternalAssignmentScores',
            tags: ['sectionId', 'contextId']
        },
        assignment_search_results: {
            category: 'Search',
            action: 'AssignmentSearchResults'
        },
        question_search_results: {
            category: 'Search',
            action: 'QuestionSearchResults'
        },
        student_search_results: {
            category: 'Search',
            action: 'StudentSearchResults'
        },
        visit_class_insights: {
            category: 'Grades',
            action: 'VisitClassInsightsForSection',
            tags: ['sectionId', 'contextId']
        },
        grant_extensions_submissions_not_popup: {
            category: 'ClassManagement',
            action: 'GrantExtensionSubmissions',
            tags: ['sectionId', 'contextId']
        },
        grant_extensions_submissions_popup: {
            category: 'ClassManagement',
            action: 'GrantExtensionSubmissionsFromResponses',
            tags: ['sectionId', 'contextId']
        },
        rescore_assignment: {
            category: 'ClassManagement',
            action: 'RescoreAssignment',
            tags: ['sectionId', 'contextId', 'assignmentId', 'deploymentId']
        },
        download_scores_responses: {
            category: 'ClassManagement',
            action: 'DownloadScoresResponses',
            tags: ['sectionId', 'contextId']
        },
        response_summary: {
            category: 'Grades',
            action: 'ResponseSummary',
            tags: ['sectionId', 'contextId', 'assignmentId', 'deploymentId']
        },
        adjust_score: {
            category: 'Grades',
            action: 'AdjustStudentScore',
            tags: ['sectionId', 'contextId', 'assignmentId', 'deploymentId']
        },
        view_log_info_for_student: {
            category: 'Grades',
            action: 'ViewStudentActivityForAssignment',
            tags: ['sectionId', 'contextId', 'assignmentId', 'deploymentId']
        },
        student_summary: {
            category: 'Grades',
            action: 'ViewStudentAssignmentSummary',
            tags: ['sectionId', 'contextId']
        },
        view_student_responses: {
            category: 'Grades',
            action: 'ViewStudentResponses',
            tags: ['sectionId', 'contextId', 'assignmentId', 'deploymentId']
        },
        create_assignment_template: {
            category: 'Assignment',
            action: 'CreateNewAssignmentTemplate'
        },
        edit_assignment_template: {
            category: 'Assignment',
            action: 'EditAssignmentTemplate',
            tags: ['assignmentTemplateId']
        },
        open_question_browser: {
            category: 'Assignment',
            action: 'ManageQuestionsForAssignment',
            tags: ['assignmentId']
        },
        notification_settings: {  
            category: 'Settings',
            action: 'NotificationSettings'
        },
        send_private_message_to_instructor: {  
            category: 'Communication',
            action: 'SendPrivateMsgInstructor',
            tags:[ 'sectionId', 'contextId' ]
        },
        view_private_message_inbox: {  
            category: 'Communication',
            action: 'ViewPrivateMsgInbox',
            tags:[ 'sectionId', 'contextId' ]
        },
        view_private_messages_sent: {  
            category: 'Communication',
            action: 'ViewPrivateMsgSent',
            tags:[ 'sectionId', 'contextId' ]
        },
        access_class_forums: {  
            category: 'Communication',
            action: 'AccessClassForums',
            tags:[ 'sectionId', 'contextId' ]
        },
        view_calendar: {  
            category: 'Navigation',
            action: 'ViewCalendar'
        },
        add_personal_event_to_calendar: {  
            category: 'Calendar',
            action: 'AddPersonalCalendarEvent'
        },
        request_extension: {  
            category: 'Assignment',
            action: 'RequestExtensionForAssignment',
            tags:[ 'sectionId', 'contextId', 'assignmentId', 'deploymentId' ]
        },
        view_previous_answers: {  
            category: 'Assignment',
            action: 'ViewPreviousAnswers',
            tags:[ 'sectionId', 'contextId', 'assignmentId', 'questionId', 'deploymentId' ]
        },
        view_edit_my_notes: {  
            category: 'Assignment',
            action: 'ViewEditMyNotes',
            tags:[ 'sectionId', 'contextId', 'assignmentId', 'questionId', 'deploymentId' ]
        },
        view_personal_study_plan: {  
            category: 'Navigation',
            action: 'ViewPersonalStudyPlan',
            tags:[ 'sectionId', 'contextId', 'textbookCode', 'iacISBN' ]
        },
        view_grades_for_section: {  
            category: 'Navigation',
            action: 'ViewGradesForSection',
            tags:[ 'sectionId', 'contextId' ]
        },
        prompt_for_payment: {  
            category: 'Navigation',
            action: 'PaymentNagScreen',
            tags:[ 'sectionId', 'contextId' ]
        },
        practice_another_version: {  
            category: 'Assignment',
            action: 'PracticeAnotherVersionOfQuestion',
            tags:[ 'sectionId', 'contextId', 'assignmentId', 'questionId', 'deploymentId' ]
        },
        user_paste: {
            category: 'Assignment',
            action: 'PastedAnswer',
        }
    };

    var commonTags = ['role'];

    return function(action){
        var obj = analyticActions[action];
        if(!obj) {
            return;
        }
        // we don't want to mutate our lookup;
        var copy = Object.assign({}, obj);
        if(copy.tags){
            copy.tags = copy.tags.concat(commonTags);
        } else {
            copy.tags = commonTags.slice();
        }
        return copy;
    }
})();

WaAnalytics.prototype.collectAndSendToAnalytics = (function() {
    function addLocalDateISOString(activity) {
        var now = new Date();
        var tzo = now.getTimezoneOffset();
        var pad = function(num, len) {
            var norm = Math.abs(Math.floor(num)).toString();
            if (norm.length > len) {
                return norm;
            }
            else {
                var padding = '';
                for (var i = 0; i < len - norm.length; i++) {
                    padding += '0';
                }
                return padding + norm;
            }
        };
        activity.eventTime =  now.getFullYear().toString().concat(
        '-', pad(now.getMonth() + 1, 2),
        '-', pad(now.getDate(), 2),
        'T', pad(now.getHours(), 2),
        ':', pad(now.getMinutes(), 2),
        ':', pad(now.getSeconds(), 2),
        '.', pad(now.getMilliseconds(), 3),
        tzo < 0 ? '+' : '-', pad(Math.abs(tzo) / 60, 2),
        ':', pad(Math.abs(tzo) % 60, 2)
        );
    }

    function addEnvironmentAndPlatform(activity){
        var host = window.location.host;
        var productPlatform = 'webassign';

        // Environment specific variables
        // The WebAssign environment
        var productEnvironment = 'develop';
        // The SSO environment
        var userEnvironment = 'integration';
        // The Identity Management system that stores the users
        var userPlatform = 'sso';

        if (host.indexOf('www.webassign.net') !== -1) {
            userEnvironment = 'production';
            productEnvironment = 'production';
        } else if (host.indexOf('demo') !== -1) {
            userEnvironment = 'demo';
            productEnvironment = 'demo';
            userPlatform = 'webassign';
        } else if (host.indexOf('editorial') !== -1) {
            userEnvironment = 'editorial';
            productEnvironment = 'editorial';
            userPlatform = 'webassign';
        } else if (host.indexOf('perf') !== -1) {
            userEnvironment = 'performance';
            productEnvironment = 'performance';
        } else if (host.indexOf('staging') !== -1) {
            userEnvironment = 'qa';
            productEnvironment = 'staging';
        } else if (host.indexOf('integration') !== -1) {
            userEnvironment = 'integration';
            productEnvironment = 'integration';
        }

        activity.userEnvironment = userEnvironment;
        activity.productEnvironment = productEnvironment;
        activity.userPlatform = userPlatform;
        activity.productPlatform = productPlatform;
    }

    function getActionFromEvent(event){
        var action;
        var element = event.target;
        if(element === document ){ // page load from HTML id
            var inputElement = document.getElementById('wa-analytics');
            action = inputElement ? inputElement.value : null;
        } else { // user event from HTML data- Attribute
            action = element.dataset['waAnalytics'];
        }
        return action;
    }
    // https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php
    // 30 chars ID similar to current uuid generation in perl
    function addEventId(activity){
        var dt = new Date().getTime();
        var uid = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[x]/g, function(c) {
            var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
        activity.eventId = uid;
    }

    /*
    * eventOrKey:
    * 1. Event: 'click', 'DOMContentLoaded'
    * 2. key: look-up key(action) as argument
    * */
    return function (eventOrKey, extraTag) {
        if(!eventOrKey)
            return;

        // get look-up key(action) from the argument
        var action;
        if(typeof eventOrKey === 'string'){ // direct call
            action = eventOrKey;
        } else { // Called by event dispatch:
            action = getActionFromEvent(eventOrKey)
        }

        if(!action)
            return;

        var analyticsForAction = waAnalytics.getAnalyticsForAction(action);
        if(!analyticsForAction)
            return;

        // Do not include the query string to ensure no PII is included in the URL
        var eventUri = [location.protocol, '//', location.host, location.pathname].join('');

        var activity = {
            messageFormatVersion: 1,
            messageType: "ClientEventingActivity",
            eventCategory: analyticsForAction.category,
            eventAction: analyticsForAction.action,
            eventUri: eventUri
        };

        // collect values for activity
        addEnvironmentAndPlatform(activity);
        addLocalDateISOString(activity);
        addEventId(activity);
        waAnalytics.scrapeAndGenerateAnalyticsObject(analyticsForAction.tags, activity);
        if (extraTag) { activity.tags.push(extraTag); }

        waAnalytics.recordActivityAnalytics(activity);
    }
})();

WaAnalytics.prototype.handlePasteEvent = function(event) {
    var element = event.target;

    if (element.tagName === "INPUT") {
        var match = element.id.match(/^R([N])_([0-9]+)_([0-9]+)_([0-9]+)_([0-9]+)/i);
        if (match) {
            var boxId = 'R' + match[1] + '_' + match[2] + '_' + match[3] + '_' + match[4] + '_' + match[5];
            waAnalytics.collectAndSendToAnalytics("user_paste", { key: "boxId", value: boxId } );
        }
    }
    else if (element.tagName === "TEXTAREA") {
        if (element.parentNode) {
            var grandParent = element.parentNode.parentNode;
            if (grandParent) {
                var match = grandParent.id.match(/^editable-math-R([A-Z])_([0-9]+)_([0-9]+)_([0-9]+)_([0-9]+)/i);
                if (match) {
                    var boxId = 'R' + match[1] + '_' + match[2] + '_' + match[3] + '_' + match[4] + '_' + match[5];
                    waAnalytics.collectAndSendToAnalytics("user_paste", { key: "boxId", value: boxId } );
                }
            }
        }
    }
}

// simple polyfill to fix JSON.stringify issue for Arrays
if ( ! JSON.stringifyPolyfilled ) {
    var _json_stringify = JSON.stringify;
    JSON.stringify = function(value) {
        var _array_tojson = Array.prototype.toJSON;
        delete Array.prototype.toJSON;
        var r=_json_stringify(value);
        Array.prototype.toJSON = _array_tojson;
        return r;
    };

    JSON.stringifyPolyfilled = 1;
}

var waAnalytics = new WaAnalytics();

// Events to capture analytic events
document.addEventListener("paste", waAnalytics.handlePasteEvent);
document.addEventListener("click", waAnalytics.collectAndSendToAnalytics);
document.addEventListener("DOMContentLoaded", waAnalytics.collectAndSendToAnalytics);
