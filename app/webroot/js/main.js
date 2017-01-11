	
// ANGULAR SCRIPT	

			
var App = angular.module('Calendar-App', ['ui.calendar', 'ngDialog', 'ngSanitize', 'factoryServe', 'validationServe']);

App.controller('CalendarContoller', function($scope, $http, ngDialog, calendarService) {

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    var today = moment(date);
    var dateOnly = today.format("YYYY-MM-DD");


    // first lot of events ***
    $scope.events = [];
    /*
    $scope.events = [
      { title:"Event1", start: "2017-01-11" },
      { title:"Event2", start: "2017-01-12" },
      { title:"Event3", start: "2017-01-18" },
      { title:"Event4", start: "2017-01-20" }
    ];
    */

    /* varible dates not used */
    var variableDatesNotUsed = function(dateOnly, otherDatesArr) {
      if($scope.events) {
        otherDatesArr.forEach(function(val, key) {

          // if other dates is matching with today's date
          var alsoOtherDate = (val.date.indexOf(dateOnly)+1);
          if (alsoOtherDate != 0) {
            $scope.styleChanges("dEx_1");
            //$scope.inputExists("dateUsed", undefined, dateOnly);
          }

          // if other dates is not matching with today's date
          // and is matching with scope.event dates
          if (alsoOtherDate == 0) {
            $scope.events.forEach(function(vals, keys) {
              if(vals.start == dateOnly) {
                $scope.styleChanges("dEx_1");
              }
            });
          }
        });
      }
    }

    var eventSourceUpdate = function() {
      // sauce comes from here
      // source example {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false,url: 'http://google.com/'}

    // test dates
    var otherDatesArr = [
      {day:"1",date:"2017-01-09"},
      {day:"2",date:"2017-01-17"},
      {day:"3",date:"2017-01-30"}
    ];

    variableDatesNotUsed(dateOnly, otherDatesArr);


      $scope.eventSources = [$scope.events];
      calendarService.getDates($scope)
        .then(function(data) {
          $scope.events = [data];

          /*
          $scope.events.push({
            title: 'Open',
            start: "2017-01-18",
            url: 'http://29SIX.com.au',
            className: ['eventClass']
          });
          */
          
          /* **** cnat get working must wait later today ** */
          $scope.eventSources = [$scope.events];
        },
        function(error) {
          // error
        });

    }

    /* STYLES CHANGES ON EVENT */
    /* ----------------------- */
    $scope.styleChanges = function(evew = null) {
      switch(evew) {
        case "pAd_1":
          /* EVENT HIGHLIGHT */
          $('.fc-state-highlight span').css("min-height","21px");
        break;
        case "dEx_1":
          /* EVENT HIGHLIGHT */
          $('.fc-state-highlight span').css("min-height","21px");
        break;
        case "a":
          $('a').css("display","none");
        break;
        default:
        break;
      }
    };

    /* ADD ON EVENT WHEN CHOSEN*/
    /* ----------------------- */
    $scope.addRemoveEventSource = function(sources,source) {
      var canAdd = 0;
      angular.forEach(sources,function(value, key){
        if(sources[key] === source){
          sources.splice(key,1);
          canAdd = 1;
        }
      });
      if(canAdd === 0){
        sources.push(source);
      }

    };


    $scope.addEvent = function(sources,source) {
      $scope.events.push({
        title: 'Open Sesame',
        start: new Date(y, m, 28),
        end: new Date(y, m, 29),
        className: ['className']
      });
    };

    /* remove event */
    $scope.removeEvent = function(index) {
      $scope.events.splice(index,1);
    };


    $scope.eventRender = function( event, element, view ) { 
        ////$(view.el[0]).find('.fc-day[data-date=' + dateString + ']').css('background-color', 'red');
    };


    // random date input ***
    $scope.inputValuesRandArrangment = function(id, title, start, end, allDay, url) {
      var sourceCreate = {
          id: id,
          title: title,
          start: dateOnly,
          allDay: false,
          url: 'http://29SIX.com.au'
      };
      return sourceCreate;
    }

    // create dialog message object
    $scope.dialogAlertMsg = function(dispMsgType, date) {
      if(dispMsgType == "confirm")
        dispMsgType="Can you confirm the date?";
      if(dispMsgType == "saved")
        dispMsgType="Date Saved";
      if(dispMsgType == "error")
        dispMsgType="Can't save";

      return {
        dispMsgType: dispMsgType,
        dispMsgTypeSub: date
      };
    }

    var dateExists = function() {
      /* there's something wrong here */
      // input random number
      if(!dateExists) {
        var sourceCreate = $scope.inputValuesRandArrangment("", "GeneratedDate", dateOnly, dateOnly, false, url);
        $scope.styleChanges("pAd_1");
        $scope.addRemoveEventSource($scope.events, sourceCreate);
      }
    }

    var isDateTodayMarked = function(dateOnly) {
      $scope.events.forEach(function(marked){
        if(marked.start == dateOnly) {
          return true;
        }
      });
    }

    var isDateCommonMarked = function(datesGeneratedObj) {
      var firstGeneratedObj = moment(datesGeneratedObj[0]).day();
      if((firstGeneratedObj == 6) || (firstGeneratedObj == 0)){
        return false;
      } else {
        datesGeneratedObj.forEach(function(pickDay){
          if(!(moment(pickDay).day() == 6) || !(moment(pickDay).day() == 0)) {
            return pickDay;
          } else {
            return false;
          }
        });
      }
      //yourDateObject.getDay()%6==0;
    }

    $scope.pickAnyDate = function() {
      $scope.datesGenerated = [
        today.add(4, 'days').format("YYYY-MM-DD"),
        today.add(6, 'days').format("YYYY-MM-DD"),
        today.add(7, 'days').format("YYYY-MM-DD")
      ];
      $scope.markedDates = [];
      if(!moment(isDateCommonMarked($scope.datesGenerated), 'YYYY-MM-DD')) {
        // validate
      }

      // temp
      //angular.element('.meetingDate').val(moment($scope.datesGenerated[0]).format('DD-MM-YYYY'));
      angular.element('.meetingDate').val(moment(dateOnly).format('DD-MM-YYYY'));

      // $scope.markedDates = [];
      // $scope.markedDates.push(marked.start);
      // $scope.dialog("","", $scope.dialogAlertMsg("confirm", dateOnly));
    }





    // dialog input
    $scope.dialog = function(type, action, message) {
      ngDialog.openConfirm({
          template: '<div class="ngdialog-message">' +
                    '   <p class="prompt-title">'+ message.dispMsgType +'</p>' +
                    '   <p class="prompt-title">'+ message.dispMsgTypeSub +'</p>' +
                    '     <div class="ngdialog-buttons">' +
                    '       <button type="button" class="ngdialog-button" ng-click="confirm(\'msgconfirm\')">Confirm</button>' +
                    '       <button type="button" class="ngdialog-button" ng-click="closeThisDialog()">Cancel</button>' +
                    '     </div>' +
                    '</div>',
          className: 'ngdialog-theme-default',
          showClose: true,
          closeByEscape: true,
          plain: true,
          scope: $scope
      }).then(
        function (confirm) {
          //alert(confirm)
          console.log(confirm);
        }, function(reject) {
          console.log(reject);
        }
      );

    }

    /* alert on eventClick */
    $scope.alertEventOnClick = function( date, jsEvent, view){
      //////console.log(date, jsEvent, view);
        //$scope.alertMessage = (date.title + ' was clicked ');

        // check if date exists
        // check if date is booked
        // check if i am available
        // check if public holiday
        // check if other days i don't want to work
        // check if correct date
        // mark date as colour. 

        /////jsEvent.target.bgColor = "yellow";

        // temp fix
        angular.element('.meetingDate').val(moment(date).format('DD-MM-YYYY'));

        // if something, then something is wrong
        ///////$scope.dialog("","", $scope.dialogAlertMsg("confirm", dateOnly));

        //$scope.eventArranged(date, highlight, validation, lock);
    };




  	$scope.uiConfig = {
  	  calendar:{
    		height: 300,
    		editable: true,
    		header:{
    		  right: 'prev,next'
    		},
    		dayClick: $scope.alertEventOnClick,
    		eventDrop: $scope.alertOnDrop,
    		eventRender: $scope.eventRender
  	  }
  	};

    eventSourceUpdate();
});



// shop sign controller --
App.controller('ShopSign', function($scope, $http) {
	$http.get('http://192.168.33.10/29six/app/webroot/js/shopsign.json').
		success(function(data, status, headers, config) {
      angular.forEach(data.statusUpdate.status, function(value, key){
        if(value[Object.keys(value)].set == 1) {
          $scope.posts = value[Object.keys(value)].longText.toString();
          $scope.currStatus = "My schedule";
        }
      });
      angular.forEach(data.statusUpdate.project, function(value, key){
        if(value[Object.keys(value)].set == 1) {
          $scope.project = value[Object.keys(value)].longText.toString();
          $scope.currResearchProject = "Current/Recent Project";
        }
      });

      $scope.hashtag = 'football';
		}).
		error(function(data, status, headers, config) {
		  // log errors
	});

  $scope.currTweets = "Our twitter page"
});


// message input controller --
App.controller('CalendarForm', function($scope, validationService) {
  $scope.messagedialog = true;

  function msgBoxLink(msg) {
    $scope.msgBoxLink = "Add a Message";
    if(msg != undefined) {
      angular.element('.addamsg').scope().msgBoxLink = '<img src="http://192.168.33.10/29six/app/webroot/img/mailmessage.png">';
    }
  }
  msgBoxLink(undefined);

  $scope.saveSend = function(val){
    var splitArr = ["default/Save", "new/Send"];
    if(val) {
      var messageSplit = splitArr[0].split("/");
      $scope.sendtxt = messageSplit[1];
    } else {
      var messageSplit = splitArr[1].split("/");
      $scope.sendtxt = messageSplit[1];
    }
  };
  $scope.saveSend(false);

  var msgpnl = $('.pickADateMessage');
  var msgattr = $('.pickaMessageClear');
  var msgemail = $('.emailPhoneInfo');
  var msgdate = $('.meetingDate');
  var msgprojname = $('.projName');
  $scope.addtxtmessage = function() {
    var msgShow = msgpnl.css("display");
    if(msgShow == "none") {
      msgBoxLink(undefined);
      msgpnl.css("display","block");
      msgattr.css("display","block");
      $scope.saveSend(false);
    }
    if(msgShow == "block") {
      msgpnl.css("display","none");
      msgattr.css("display","none");
      $scope.saveSend(false);
    }
  }

  
  $scope.donetxtmessage = function(value=0) {
    angular.element('.returnMessageAlert').css("display","block");
    var msgOk = function(validateReturnMessageFull) {
      // this closes text panel and stores and displays doc icon
      if(validateReturnMessageFull) {
        var msgShow = msgpnl.css("display");
        if(msgShow == "block") {
          msgpnl.css("display","none");
          msgattr.css("display","none");
          if(validateReturnMessageFull.msg) { msgBoxLink(0); }
        }
      }
    };

    // validation
    $params = $.param({
      "check": "pre-validate",
      "message": msgpnl.val(),
      "meetingDate": msgdate.val(),
      "projName": msgprojname.val(),
      "emailPhoneInfo": msgemail.val()
    });

    var validateMessageReturn = function($params) {
      validationService.postValidation($params)
        .then(function(data) {
          //$scope.events = [data];
          /*$scope.validateReturnMessageError = '';*/
          angular.element('.returnMessageAlert').scope().validateReturnMessageError = '';
          if(data.data.error == 1) {
            /*$scope.validateReturnMessageError = data.data.errormsg;*/
            angular.element('.returnMessageAlert').scope().validateReturnMessageError = data.data.errormsg;
          }
          $scope.validateReturnMessageFull = data.data.message;
          msgOk($scope.validateReturnMessageFull);
        },
        function(error) {
          // error
          $scope.validateReturnMessageError = '';
          $scope.validateReturnMessageError = "Error Sending";
        });
    };
    validateMessageReturn($params);

    if(value == 'clear') {
      angular.element('.returnMessageAlert').css("display","none");
    }
  }

  $scope.clearmessage = function(input) {
    angular.element('textarea.pickADateMessage').val('');
  }

});










/*

  // MESSAGE FUNC

  $scope.result = 'hidden'
  $scope.resultMessage;
  $scope.formData; //formData is an object holding the name, email, subject, and message
  $scope.submitButtonDisabled = false;
  $scope.submitted = false; //used so that form errors are shown only after the form has been submitted

  $scope.messageSend = function(contactform) {
      $scope.submitted = true;
      $scope.submitButtonDisabled = true;
      if (contactform.$valid) {
          $http({
              method  : 'POST',
              url     : 'contact-form.php',
              data    : $.param($scope.formData),  //param method from jQuery
              headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
          }).success(function(data){
              console.log(data);
              if (data.success) { //success comes from the return json object
                  $scope.submitButtonDisabled = true;
                  $scope.resultMessage = data.message;
                  $scope.result='bg-success';
              } else {
                  $scope.submitButtonDisabled = false;
                  $scope.resultMessage = data.message;
                  $scope.result='bg-danger';
              }
          });
      } else {
          $scope.submitButtonDisabled = false;
          $scope.resultMessage = 'Failed Please fill out all the fields.';
          $scope.result='bg-danger';
      }
    }


*/






