


function Controller($scope) {


  $scope.isValid = false;
  $scope.isDraft = false;
  $scope.isSaved = false;
  $scope.isPublished = false;
  $scope.isPublishedNow = false;
  $scope.isEmbargoed2 = false;
  $scope.isOverride = false;
  $scope.isEntryList = false;
  $scope.isEntrySelect = false;
  $scope.isFullScreen = false;
  $scope.isSearchResults = false;
  $scope.isEmbargoOptions = false;
  $scope.isAssetAdded = false;
  $scope.isEmbargoed1 = true;
  $scope.isFrontS0 = false;
  $scope.isFrontS1 = false;
  $scope.isFrontS2 = false;
  $scope.isFrontS3 = false;
  $scope.isFa1 = false;
  $scope.isFa2 = false;
  $scope.isFa3 = false;
  $scope.isFa4 = false;
  $scope.isFa5 = false;
  $scope.isSubsite = false;
  $scope.subsitename = "None"
  $scope.fontsizenow = 100;

  $scope.subSite = "";
  $scope.subSiteSelector = [
  	"Learning",
  	"On Your Side",
  	"Health",
  	"Watchdog",
  	"Politics"
  ];

  $scope.master= {};
  
  $scope.favoritesmessageshow = true;
 
  $scope.update = function(story) {
    $scope.master= angular.copy(story);
  };
 
  $scope.reset = function() {
    $scope.story = angular.copy($scope.master);
  };
 
  $scope.isUnchanged = function(story) {
    return angular.equals(story, $scope.master);
  };
 
  $scope.reset();
  
  $scope.searchresults = function()  {
	  $scope.isSearchResults = true;
  }
  
    $scope.addAsset = function()  {
	  $scope.isAssetAdded = true;
  }
 

		  

$scope.publish = function() {
    $scope.isPublishedNow = true;
    if (!$scope.isEmbargoed) { $scope.isPublished = true; }
    if ($scope.isEmbargoed) { $scope.isPublishedEmbargoed = true; }
};

$scope.embargo = function() {
    $scope.isEmbargoed = true;	
};

$scope.cancelembargo = function() {
    $scope.isEmbargoed = false;
};

$scope.unpublish = function() {
    $scope.isPublishedNow = false;
};


$scope.hloverride = function() {
    $scope.isOverride = true;
};

$scope.showentrylist = function() {
    $scope.isEntryList = true;
};

$scope.showentry = function() {
    $scope.isEntrySelect = true;
};

$scope.toggleembargooptions = function() {
    $scope.isEmbargoOptions = !($scope.isEmbargoOptions);
};
		
$scope.toggleshareoptions = function() {
    $scope.isShareOptions = !($scope.isShareOptions);
};

$scope.togglefullscreen = function() {
    $scope.isFullScreen = !($scope.isFullScreen);
};

$scope.toggleFrontS0 = function() {
    $scope.isFrontS0 = !($scope.isFrontS0);
};

$scope.toggleFrontS1 = function() {
    $scope.isFrontS1 = !($scope.isFrontS1);
};

$scope.toggleFrontS2 = function() {
    $scope.isFrontS2 = !($scope.isFrontS2);
};

$scope.toggleFrontS3 = function() {
    $scope.isFrontS3 = !($scope.isFrontS3);
};

$scope.savedraft = function() {
    $scope.isSaved = true;
};

$scope.togglesubsite = function(subsitename) {
    $scope.isSubsite = !($scope.isSubsite);
	$scope.subsitename = subsitename;
    
};

$scope.changefontsize = function(changesize) {
    if ((changesize=='-') && ($scope.fontsizenow>51)) $scope.fontsizenow = $scope.fontsizenow - 10;
    else if (changesize=='0') $scope.fontsizenow = 100;
     else if ((changesize=='+') && ($scope.fontsizenow<499)) $scope.fontsizenow = $scope.fontsizenow + 10;
    changefontsize = $scope.fontsizenow + '%';
    $("#storycopy").css({'font-size': changefontsize });
}

  
  $scope.favorites = [];
 
  $scope.addfavoritesearch = function() {
    $scope.favorites.push({text:$scope.favoritetext, done:false});
   /*  $scope.favoritetext = ''; */
    $scope.favoritesmessageshow = true;
  };
  
   $scope.addfavorite = function(favname) {
    $scope.favorites.push({text:favname});
    $scope.favoritesmessageshow = false;
  };
  
  
  
  

  $scope.hotwires = [

    { text: "Nation"},
    { text: "Washington"},
    { text: "World"},
    { text: "Advisories"},
    { text: "Elections"},
    { text: "Sports Main"}
    
   ]

  
  $scope.statenames = [

    { text: "Alabama"},
    { text: "Alaska"},
    { text: "Arizona"},
    { text: "Arkansas"},
    { text: "California"},
    { text: "Colorado"},
    { text: "Connecticut"},
    { text: "Delaware"},
    { text: "Florida"},
    { text: "Georgia"},
    { text: "Guam"},
    { text: "Hawaii"},
    { text: "Idaho"},
    { text: "Illinois"},
    { text: "Indiana"},
    { text: "Iowa"},
    { text: "Kansas"},
    { text: "Kentucky"},
    { text: "Louisiana"},
    { text: "Maine"},
    { text: "Maryland"},
    { text: "Massachusetts"},
    { text: "Michigan"},
    { text: "Minnesota"},
    { text: "Mississippi"},
    { text: "Missouri"},
    { text: "Montana"},
    { text: "Nebraska"},
    { text: "Nevada"},
    { text: "New Hampshire"},
    { text: "New Jersey"},
    { text: "New Mexico"},
    { text: "New York"},
    { text: "North Carolina"},
    { text: "North Dakota"},
    { text: "Ohio"},
    { text: "Oklahoma"},
    { text: "Oregon"},
    { text: "Pennsylvania"},
    { text: "Rhode Island"},
    { text: "South Carolina"},
    { text: "South Dakota"},
    { text: "Tennessee"},
    { text: "Texas"},
    { text: "Utah"},
    { text: "Vermont"},
    { text: "Virginia"},
    { text: "Washington"},
    { text: "West Virginia"},
    { text: "Wisconsin"},
    { text: "Wyoming"}
  ]
  
  $scope.misc = [

    { text: "Money & Tech"},
    { text: "Life"},
    { text: "Weather Advisories"},
    { text: "Weather Urgent News"},
    
   ]
 
    $scope.sportsother = [

    { text: "General"},
    { text: "Advisories"},
	{ text: "Boxing"},
    { text: "Olympics"},
    { text: "Horse Racing"},
    { text: "Track & Field"},
    { text: "Auto Racing"},
    { text: "Nascar"},
    { text: "Bowling"},
    { text: "Cycling"},
    { text: "Soccer"},
    { text: "GNS"}
    
   ]
 
  
}

