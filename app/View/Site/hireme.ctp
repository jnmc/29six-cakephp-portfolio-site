	<!--<div class="alt_header_pages"></div>-->
	<div class="content_hireme" ng-app="Calendar-App" ng-controller="CalendarContoller">
		<div class="input_sidePanel">
			<div class="calendar_holder">
				<div id="calendar" class="calendar" ui-calendar="uiConfig.calendar" ng-model="eventSources"></div>
				<span><label ng-click="pickAnyDate()" >Pick a Date</label></span>
			</div>
			<div class="pickadate_form" ng-controller="CalendarForm">
				<label>Our Meeting Date</label>
				<input type="text" name="meetingDate" class="meetingDate" placeholder="Can be any Date format" value="{{meetingDate}}" ng-blur="donetxtmessage()" ng-enter="donetxtmessage()"/>
				<label>Project Name or URL</label>
				<input type="text" name="projName" class="projName" placeholder="A Naming for the project would do" value="{{projName}}" ng-blur="donetxtmessage()" ng-enter="donetxtmessage()"/>
				<label>Email or Phone info</label>
				<input type="text" name="emailPhoneInfo" class="emailPhoneInfo" placeholder="and that contact detail" value="{{emailPhoneInfo}}" ng-blur="donetxtmessage()" ng-enter="donetxtmessage()"/>
				<span><em class="addamsg" ng-click="addtxtmessage()" ng-bind-html="msgBoxLink"></em></span>
			</div>
		</div>

		<div class="status_sidePanel" ng-controller="ShopSign">
			<div class="currStatus">
				<h3>{{currStatus}}</h3>
				<p>{{posts}}</p>
			</div>

			<div class="currResearchProject">
				<h3>{{currResearchProject}}</h3>
				<p>{{project}}</p>
			</div>
			
			<div class="currTweets">
				<h3>{{currTweets}}</h3>
                	<?php
                	//for($i=0; $i<count($twits);$i++) {
                	//	echo "<p>".$twits[$i]."</p>";
                	//}
                	?>
			</div>
			
			<div class="currMessage" ng-controller="CalendarForm">
				<div class="messageSubmit">
					<button type="button" ng-click="messageSend(sendtext)" class="submitBtn">{{sendtxt}}</button>
				</div>
				<textarea name="pickADateMessage" class="pickADateMessage" style="border-color:#777;" value="{{messageDetail}}"></textarea>
				<span class="pickaMessageClear"><em class="done" ng-click="donetxtmessage()">Done</em><i>/</i> <em class="clear" ng-click="clearmessage()">Clear</em></span>
				<div class="returnMessageAlert" ng-click="donetxtmessage('clear')" style="margin-top:5px; height:45px; color:red; font-size:0.8rem; font-weight:bold;" >{{validateReturnMessageError}}</div>
				<div class="nameError_alert successMessage">
					<p ng-show="contactifSuccess" class="messageSentForm">Message sent</p>
				</div>			
			</div>
			
			<ul>
				<li ng-repeat="todo in todos">
				{{todo.text}} - <em>{{todo.done}}</em>
				</li>
			</ul>

		</div>
	</div>
