Warning Markers
By Repeat
Version: 2.5

	ABOUT
This plugin allows for warning markers like later FE games and many GBAFE romhacks use.
When a player unit is selected, the following units have a marker put over their heads:
  - Enemies with a dangerously high critical rate
  - Enemies with a weapon effective against the player unit (e.g. an armorslayer)
  - Enemies that will seal the selected unit's attack
  - Any unit that the selected unit is able to have a conversation with
  - Specific enemy units or weapons with the custom parameter {warning:true}
  - Allies that grant support bonuses to the selected unit
In addition, units who can participate in a Talk event will have an icon next to their name on the unit selection screen during battle preparations.

	TO USE
Unit State Animator by McMagister is required. If you don't already have it from a different plugin, it's bundled with this one as well.
MAKER SURE THE UNIT STATE ANIMATOR FILE IS LOADED FIRST. It must be at the TOP of your list of plugins (yes, in Windows Explorer), or this plugin will not work.

If you haven't already, in SRPG Studio, go into Tools > Options > Data and check "Display id next to data name".

First, import your file of choice into Icon within SRPG Studio (for example, markers-placeholder-icon.png). Remember its ID number.

In the file R-markers-values.js, you'll see that each icon follows the following template:
    isRuntime:
    id:
    xSrc:
    ySrc:
isRuntime is a true/false value and determines if the file uses a custom imported asset (false) or a default Runtime asset (true).
id refers to the ID number of the file you added to the icon folder in SRPG Studio. If you're just using the icon file included with this, then this is the only value that you need to edit.
xSrc and ySrc are the positions of the particular icon you want to use WITHIN the file. There's an example image that shows what these mean inside this folder.

Note that the TALK_ICON defined in R-markers-values.js is also the icon used in R-prep-talk-markers.js on the battle preparations screen.
In R-markers-values.js, showBattlePrepOneWays inside MarkerDisplay determines whether the unit MUST be the initiator in order for the marker to show up during preparations.
Set showBattlePrepOneWays to true or false at your discretion.

	TO DO
In the future, I want the plugin to enable using different icons for different support types. For example, drawing C/B/A/S icons for the typical Fire Emblem-style support hierarchy, 
or something less traditional, like numbered support tiers or displaying allies' affinities.


	UPDATE HISTORY
12/19/2019: fixed bug where game would crash if a talk partner wasn't on the map
1/9/2020: fixed bug where states were not properly removed when switching units' sortie positions in battle preparations
1/13/2020: added unit & weapon warning states with custom parameter functionality
1/13/2020 part 2: re-fixed the bug where the game would crash if a talk partner isn't on the map
1/13/2020 part 3: split the editable values into a second file because all this delicate copy-pasting every time I want to edit things is getting on my nerves
4/6/2020: small edit to the placeholder icon for the Talk marker
4/21/2020: Version 2.0. Major overhaul by McMagister. (They even fixed the mouse bug, god bless.) 
	   * No longer uses states; everything is handled in the warn-markers-values.js file instead.
	   * Placeholder image file updated.
	   * Helper image file added.
	   * Support markers added.
5/12/2020: added Seal markers, updated placeholder image file. Lost the raw .xcf of the helper file so hopefully the old one's good enough for now, will remake it some other time
1/3/2021: added prep-talk-markers.js; talk icons now appear during battle prep
9/14/2021: huge cleanup; fixed bug with talk markers not disappearing after conversation; markers now update when switching items
11/18/2021: moved editable booleans from markers to markers-values and put them in an enum, MarkerDisplay. SHOW_ONE_WAY_CONVOS also moved here and renamed
     * Placeholder image file given a shorter name so it doesn't hide the ID number in Graphics.
     * Might as well call this Version 2.5 since I haven't been keeping up with version numbers lol
