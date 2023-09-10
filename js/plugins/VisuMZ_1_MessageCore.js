//=============================================================================
// VisuStella MZ - Message Core
// VisuMZ_1_MessageCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_MessageCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.MessageCore = VisuMZ.MessageCore || {};
VisuMZ.MessageCore.version = 1.33;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.33] [MessageCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Message_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Message Core plugin extends and builds upon the message functionality of
 * RPG Maker MZ and allows you, the game dev, to customize the workflow for
 * your game's message system.
 *
 * Features include all (but not limited to) the following:
 *
 * * Control over general message settings.
 * * Auto-Color key words and/or database entries.
 * * Increases the text codes available to perform newer functions/effects.
 * * Ability for you to implement custom Text Code actions.
 * * Ability for you to implement custom Text code string replacements.
 * * Invoke a macro system to speed up the dev process.
 * * Add a Text Speed option to the Options menu.
 * * Add the ever so useful Word Wrap to your message system.
 * * Extend the choice selection process to your liking.
 * * The ability to enable/disable as well as show/hide certain choices.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 1 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 * 
 * Dim Background Extension
 * 
 * Before, when using the Dim Background as a part of a Show Text event, its
 * size is only the same as the message window's width itself. This looked
 * really ugly because it had hard edges cutting off while gradients are seen
 * elsewhere. To make it look better, we extended the dimmed background to span
 * the width of the screen instead.
 * 
 * ---
 * 
 * Extended Messages
 * 
 * If you decide to expand the size of the message window to allow for more
 * rows to be displayed, you can type in the data for them by chaining together
 * Show Message events. They will take data from each other and display them in
 * the same message window as long as there are enough rows.
 * 
 * ---
 *
 * Extended Choice Lists
 * 
 * Choice lists can be extended by just chaining one Choice List event after
 * the other in succession along the same indentation. They do not extend if
 * there is any event other than a Choice List option between them on the same
 * indentation level.
 *
 * ---
 *
 * ============================================================================
 * Available Text Codes
 * ============================================================================
 *
 * The following are text codes that you may use with this plugin. Some of
 * these are original text codes provided by RPG Maker MZ, while others are
 * new text codes added through this plugin. You may even add your own text
 * codes through the plugin parameters.
 *
 * === RPG Maker MZ Text Codes ===
 *
 * The following are text codes that come with RPG Maker MZ. These text codes
 * cannot be edited through the Plugin Parameters.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 * \V[x]                Replaced by the value of variable 'x'.
 * \N[x]                Replaced by the name of actor 'x'.
 * \P[x]                Replaced by the name of party member 'x'.
 * \C[x]                Draw the subsequent text with window skin color 'x'.
 * \I[x]                Draw icon 'x'.
 *
 * \PX[x]               Moves text x position to 'x'.
 * \PY[x]               Moves text y position to 'y'.
 *
 * \G                   Replaced by the currency unit.
 *
 * \{                   Increase the text font size by one step.
 * \}                   Decrease the text font size by one step.
 * \FS[x]               Changes the text font size to 'x'.
 *
 * \\                   Replaced by the backslash character.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Message Window Only)
 * ------------------   -------------------------------------------------------
 * \$                   Opens the gold window.
 * \.                   Waits a 1/4 second.
 * \|                   Waits a full second.
 * \!                   Waits for button input.
 * \>                   Display remaining text on same line all at once.
 * \<                   Cancel the effect that displays text all at once.
 * \^                   Do not wait for input after displaying text to move on.
 *
 * ---
 *
 * === Message Core Hard-Coded Text Codes ===
 *
 * The following text codes are hard-coded into VisuStella MZ Message Core's
 * code. These text codes cannot be edited through the Plugin Parameters.
 * 
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 * <b>                  Makes subsequent text bold.
 * </b>                 Removes bold from subsequent text.
 * <i>                  Makes subsequent text italic.
 * </i>                 Removes italic from subsequent text.
 * 
 * <left>               Makes subsequent text left-aligned.
 * </left>              Removes left-alignment for subsequent text.
 * <center>             Makes subsequent text center-aligned.
 * </center>            Removes center-alignment for subsequent text.
 * <right>              Makes subsequent text right-aligned.
 * </right>             Removes right-alignment for subsequent text.
 *
 * Note1: Use at line-start.
 *
 * <ColorLock>          Text codes can't change text color for subsequent text.
 * </ColorLock>         Removes Color Lock property.
 *
 * <WordWrap>           Enables Word Wrap for this window. *Note2*
 * </WordWrap>          Disables Word Wrap for this window. *Note2*
 * <br>                 Adds a line break. Requires Word Wrap enabled.
 * <line break>         Adds a line break. Requires Word Wrap enabled.
 *
 * Note2: Some windows cannot use Word Wrap such as the Choice Window.
 *
 * \picture<x>          Draws picture x (filename) at current text position.
 * \CenterPicture<x>    Draws picture x (filename) centered at the window.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Message Window Only)
 * ------------------   -------------------------------------------------------
 * \CommonEvent[x]      Runs common event x when text code is reached.
 * \Wait[x]             Makes the message wait x frames before continuing.
 * 
 * <Next Page>          Ends the current message page at this line. This is
 *                      used for messages when rows are at 5 or above and the
 *                      message lines don't match the amount. This is used to
 *                      prevent grabbing message windows from following message
 *                      events. Any lines following <Next Page> in the same
 *                      message event will be ignored.
 * 
 * <Auto>               Resizes message window dimensions to fit text. *Note3*
 * <Auto Width>         Resizes message window width to fit text. *Note3*
 * <Auto Height>        Resizes message window height to fit text. *Note3*
 * 
 * <Auto Actor: x>      Resizes message window and positions it over actor x
 *                      sprite's head. *Note3*
 * <Auto Party: x>      Resizes message window and positions it over party
 *                      member x sprite's head. *Note3*
 * <Auto Player>        Map-Only. Resizes message window and positions it over
 *                      the player sprite's head. *Note3*
 * <Auto Event: x>      Map-Only. Resizes message window and positions it over
 *                      event x sprite's head. *Note3*
 * <Auto Enemy: x>      Battle-Only. Resizes message window and positions it
 *                      over enemy x sprite's head. *Note3*
 *
 * Note3: Upon using these text codes, the message window's settings will be
 * reset for the upcoming message. These effects do not work with Word Wrap.
 *
 * ---
 *
 * ----------------------------   ---------------------------------------------
 * Text Code                      Effect (Battle Only)
 * ----------------------------   ---------------------------------------------
 * <Current Battle Target>        Replaces text code with the current target of
 *                                an action in battle.
 * <Current Battle User>          Replaces text code with the currently active
 *                                user in battle.
 * <Current Battle Action>        Replaces text code with the current battle
 *                                action's name with an icon in front.
 * <Current Battle Action Name>   Replaces text code with the current battle
 *                                action's name without an icon.
 * 
 * If there is no battle, no target, no user, or no action, then the text code
 * will just be replaced with no text.
 * 
 * These text codes are NOT recommended to be used inside of Help Descriptions.
 * They are best used with "Show Text" event commands.
 *
 * ---
 *
 * -----------------------------  ---------------------------------------------
 * Text Code                      Effect (Choice Window Only)
 * -----------------------------  ---------------------------------------------
 * <Show>                         Choice is always shown.
 * <Show Switch: x>               Choice shown if switch x is ON.
 * <Show Switches: x,x,x>         Choice shown if the x switches are all ON.
 * <Show All Switches: x,x,x>     Choice shown if the x switches are all ON.
 * <Show Any Switches: x,x,x>     Choice shown if any of x switches are ON.
 *
 * <Hide>                         Choice is always hidden.
 * <Hide Switch: x>               Choice hidden if switch x is ON.
 * <Hide Switches: x,x,x>         Choice hidden if the x switches are all ON.
 * <Hide All Switches: x,x,x>     Choice hidden if the x switches are all ON.
 * <Hide Any Switches: x,x,x>     Choice hidden if any of x switches are ON.
 *
 * <Enable>                       Choice is always enabled.
 * <Enable Switch: x>             Choice enabled if switch x is ON.
 * <Enable Switches: x,x,x>       Choice enabled if the x switches are all ON.
 * <Enable All Switches: x,x,x>   Choice enabled if the x switches are all ON.
 * <Enable Any Switches: x,x,x>   Choice enabled if any of x switches are ON.
 *
 * <Disable>                      Choice is always disabled.
 * <Disable Switch: x>            Choice disabled if switch x is ON.
 * <Disable Switches: x,x,x>      Choice disabled if the x switches are all ON.
 * <Disable All Switches: x,x,x>  Choice disabled if the x switches are all ON.
 * <Disable Any Switches: x,x,x>  Choice disabled if any of x switches are ON.
 *
 * ---
 *
 * -----------------  ---------------------------------------------------------
 * Text Code          Effect (Name Window Only)
 * -----------------  ---------------------------------------------------------
 * <Left>             Positions the name box window to the left.
 * <Center>           Positions the name box window to the center.
 * <Right>            Positions the name box window to the right.
 * <Position: x>      Replace 'x' with a number from 0 to 10. This positions
 *                    the name box window on the screen relative to the
 *                    position of the value 'x' represents.
 * \NormalBG          Changes background type of window to normal type.
 * \DimBG             Changes background type of window to dim type.
 * \TransparentBG     Changes background type of window to transparent type.
 *
 * ---
 * 
 * -------------------------------   ------------------------------------------
 * Text Code                         Effect (Message Window Only)
 * -------------------------------   ------------------------------------------
 * 
 * <Position: x, y, width, height>   Forces the message window to exact listed
 *                                   coordinates and dimensions. Replace each
 *                                   of the arguments with numbers. *Note*
 * 
 * <Coordinates: x, y>               Forces the message window to the exact
 *                                   listed coordinates. Replace each of the
 *                                   arguments with numbers. *Note*
 * 
 * <Dimensions: width, height>       Forces the message window size to the
 *                                   exact listed dimensions. Replace each of
 *                                   the arguments with numbers. *Note*
 * 
 * <Offset: +x, +y>                  Quickly adjust the message window offset
 * <Offset: -x, -y>                  values to the x and y amounts. The values
 * <Offset: +x, -y>                  will replace the previous offset settings
 * <Offset: -x, +y>                  if there were any.
 * 
 * *NOTE* These text codes do not work with Word Wrap.
 * 
 * ---
 *
 * === Message Core Customizable Text Codes ===
 *
 * The following text codes can be altered through the Message Core's various
 * Plugin Parameters to adjust replacements and actions.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 * \Class[x]            Draws class x's icon (if have) and name.
 * \ClassName[x]        Draws class x's name only.
 *
 * \Skill[x]            Draws skill x's icon (if have) and name.
 * \SkillName[x]        Draws skill x's name only.
 *
 * \Item[x]             Draws item x's icon (if have) and name.
 * \ItemName[x]         Draws item x's name only.
 * \ItemQuantity[x]     Inserts the number of item x's owned by the party.
 *
 * \Weapon[x]           Draws weapon x's icon (if have) and name.
 * \WeaponName[x]       Draws weapon x's name only.
 * \WeaponQuantity[x]   Inserts the number of weapon x's owned by the party.
 *
 * \Armor[x]            Draws armor x's icon (if have) and name.
 * \ArmorName[x]        Draws armor x's name only.
 * \ArmorQuantity[x]    Inserts the number of armor x's owned by the party.
 *
 * \LastGainObj         Draws the icon + name of the last party-gained object.
 * \LastGainObjName     Draws the name of the last party-gained object.
 * \LastGainObjQuantity Inserts the quantity of the last party-gained object.
 *
 * \State[x]            Draws state x's icon (if have) and name.
 * \StateName[x]        Draws state x's name only.
 *
 * \Enemy[x]            Draws enemy x's icon (if have) and name.
 * \EnemyName[x]        Draws enemy x's name only.
 *
 * \Troop[x]            Draws troop x's icon (if have) and name.
 * \TroopName[x]        Draws troop x's name only.
 *
 * \TroopMember[x]      Draws troop member x's icon (if have) and name. *Note1*
 * \TroopNameMember[x]  Draws troop member x's name only. *Note1*
 * 
 * Note1: Only works in battle.
 *
 * \NormalBG            Changes background type of window to normal type.
 * \DimBG               Changes background type of window to dim type.
 * \TransparentBG       Changes background type of window to transparent type.
 *
 * \FontChange<x>       Changes font face to x font name.
 * \ResetFont           Resets font settings.
 *
 * \ResetColor          Resets color settings.
 * \HexColor<x>         Changes text color to x hex color (ie. #123abc).
 * \OutlineColor[x]     Changes outline color to text color x.
 * \OutlineHexColor<x>  Changes outline color to x hex color (ie. #123abc).
 * \OutlineWidth[x]     Changes outline width to x thickness.
 * 
 * \WindowMoveTo<?>     Moves window to exact coordinates. *Note2*
 * \WindowMoveBy<?>     Moves window by relative values. *Note2*
 * \WindowReset         Resets window position to original position.
 *
 * Note2: Replace '?' with the following format:
 *   targetX, targetY, targetWidth, targetHeight, duration, easingType
 *   Only targetX and targetY are required arguments. These will only alter the
 *   window dimensions when the text has arrived at that point. They will not
 *   alter the window preemptively. This is not used as a window positioner.
 *   Use the <Position: x, y, width, height> text code for that.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Message Window Only)
 * ------------------   -------------------------------------------------------
 * \ActorFace[x]        Inserts actor x's face into the Message Window.
 * \PartyFace[x]        Inserts party member x's face into the Message Window.
 * \ChangeFace<x,y>     Changes message face to x filename, y index.
 * \FaceIndex[x]        Changes message face index to x.
 *
 * \TextDelay[x]        Sets delay in frames between characters to x frames.
 * 
 * ---
 * 
 * As these text codes can be added, removed, and/or altered, their functions
 * may or may not be the same depending on how you've altered them. VisuStella
 * is not responsible for any errors caused by changes made to pre-made text
 * codes nor any new text codes they did not make.
 * 
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Message Plugin Commands ===
 * 
 * ---
 *
 * Message: Properties
 *   Change the various properties of the Message Window.
 *
 *   Rows:
 *   - Change the number of Message Window rows.
 *   - Leave at 0 to keep it unchanged.
 *
 *   Width: 
 *   - Change the Message Window width in pixels.
 *   - Leave at 0 to keep it unchanged.
 *
 *   Word Wrap:
 *   - Enable or disable Word Wrap for the Message Window?
 *
 * ---
 * 
 * Message: X/Y Offsets
 * - Change the X and Y Offsets of the Message Window.
 * - The offset value(s) will be saved and stored.
 * 
 *   Offset X:
 *   - Offset Message Window horizontally.
 *   - Negative: Left; Positive: Right
 *   - Message Window coordinates are still restricted via clamping.
 * 
 *   Offset Y:
 *   - Offset Message Window vertically.
 *   - Negative: Up; Positive: Down
 *   - Message Window coordinates are still restricted via clamping.
 * 
 * ---
 * 
 * === Choice Plugin Commands ===
 * 
 * ---
 *
 * Choice: Properties
 *   Change the properties found in the Show Choices event command.
 *
 *   Line Height:
 *   - Change the line height for the show choices.
 *   - Leave at 0 to keep this unchanged.
 *
 *   Max Rows:
 *   - Maximum number of choice rows to be displayed.
 *   - Leave at 0 to keep this unchanged.
 *
 *   Max Columns:
 *   - Maximum number of choice columns to be displayed.
 *   - Leave at 0 to keep this unchanged.
 *
 *   Text Alignment:
 *   - Text alignment for Show Choice window.
 *
 * ---
 * 
 * === Picture Plugin Commands ===
 * 
 * ---
 * 
 * Picture: Change Text
 * - Change text for target picture(s) to show.
 * - You may use text codes.
 * - Text will adapt to picture's properties.
 * - Settings will be erased if picture is erased.
 * 
 *   Picture ID(s):
 *   - The ID(s) of the picture(s) to set text to.
 * 
 *   Padding:
 *   - How much padding from the sides should there be?
 * 
 *   Text:
 * 
 *     Upper Left:
 *     Upper Center:
 *     Upper Right:
 *     Middle Left:
 *     Middle Center:
 *     Middle Right:
 *     Lower Left:
 *     Lower Center:
 *     Lower Right:
 *     - The text that's aligned to this picture's side.
 *     - You may use text codes.
 * 
 * ---
 * 
 * Picture: Erase Text
 * - Erase all text for target picture(s).
 * 
 *   Picture ID(s):
 *   - The ID(s) of the picture(s) to erase text for.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General settings involving the message system. These settings range from
 * adjust how the Message Window looks to more intricate settings like how
 * some of the default text codes work.
 *
 * ---
 *
 * Message Window
 *
 *   Default Rows:
 *   - Default number of rows to display for the Message Window.
 *
 *   Default Width:
 *   - Default Message Window width in pixels.
 *
 *   Fast Forward Key:
 *   - This is the key used for fast forwarding messages.
 *   - WARNING: If this key is the same as the dash button, this will clear out
 *     any held down inputs upon triggering an event  to prevent players from
 *     skipping potentially useful information stored in messages. If you do
 *     not want the input to be cleared, use a different key.
 *
 *   Text Delay:
 *   - How many frames to wait between characters drawn?
 *   - Use 0 for instant.
 * 
 *   Offset X:
 *   Offset Y:
 *   - Offset Message Window horizontally or vertically.
 *   - Horizontal: Left; Positive: Right
 *   - Veritcal: Negative: Up; Positive: Down
 * 
 *   Stretch Dimmed BG:
 *   - Stretch dimmed window background to fit the whole screen.
 * 
 *   Default Outline Width:
 *   - Changes the default outline width to this many pixels thick.
 *
 * ---
 *
 * Name Box Window
 *
 *   Default Color:
 *   - Default color for the Name Box Window's text.
 *
 *   Offset X:
 *   - How much to offset the name box window X by
 *     (as long as it doesn't go offscreen).
 *
 *   Offset Y:
 *   - How much to offset the name box window Y by
 *     (as long as it doesn't go offscreen).
 *
 * ---
 *
 * Choice List Window
 *
 *   Line Height:
 *   - What is the default line height for Show Choices?
 *
 *   Max Rows:
 *   - Maximum number of rows to visibly display?
 *
 *   Max Columns:
 *   - Maximum number of columns to visibly display?
 *
 *   Text Alignment:
 *   - Default alignment for Show Choice window.
 *
 * ---
 *
 * Default Text Codes
 *
 *   Relative \PX \PY:
 *   - Make \PX[x] and \PY[x] adjust relative starting position than
 *     exact coordinates.
 *
 *   \{ Maximum:
 *   - Determine the maximum size that \{ can reach.
 *
 *   \} Minimum:
 *   - Determine the minimum size that \} can reach.
 *
 *   \{ Change \}
 *   - How much does \{ and \} change font size by?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Auto-Color Settings
 * ============================================================================
 *
 * For certain windows such as the Message Window, Help Window, and Choice
 * Window, Auto-Color is enabled to automatically highlight and color certain
 * database entries, keywords, and just about anything you, the game dev, wants
 * to be automatically colored. This is done to avoid typing out \C[6]Jack\C[0]
 * every time Jack's name is written out as it will be automatically colored in
 * those specific windows.
 *
 * The Plugin Parameters will give you full reign over which database entries
 * and keywords you want to be automatically colored as long as they follow a
 * few rules:
 * 
 * -----------------
 * Auto-Color Rules:
 * -----------------
 *
 * 1. Database names and keywords are case sensitive.
 *    This means if "Potion" is a marked keyword, typing out "potion" will not
 *    prompt the auto-color to highlight "potion". You must add the lowercase
 *    version of the word into the keyword list if you want it to count.
 *
 * 2. Database names and keywords are exact size (for Roman languages)
 *    This means if "Potion" is a marked keyword, typing out "potions" will not
 *    prompt the auto-color to highlight "potions". You must type out all of
 *    the variations of the words you want affected into the keyword list to
 *    prompt the auto-color highlight.
 * 
 *    This does not apply to Japanese, Korean, or Chinese languages.
 *
 * 3. Possessive cases and other language symbols aren't counted.
 *    Symbols such as periods, commas, quotes, parentheses, and similar symbols
 *    do no count towards Rule 2. This means if "Potion" is a marked keyword,
 *    the typing out "(Potion)" will still highlight the "Potion" part of the
 *    word according to the auto-color.
 * 
 * 4. Names with special characters like !, ?, [, ], etc. will be ignored.
 *    These cause conflicts with how auto-colors are detected.
 *
 * ---
 *
 * Database Highlighting
 *
 *   Actors:
 *   Classes:
 *   Skills:
 *   Items:
 *   Weapons:
 *   Armors:
 *   Enemies:
 *   States:
 *   - Any usage of a the selected database entry's name is auto-colored with
 *     the text code number.
 *   - Use 0 to not auto-color.
 *
 * ---
 *
 * Word Highlighting
 *
 *   \C[x]: Color
 *   - These are lists of all the words that will be automatically colored with
 *     the x text color.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Code Actions
 * ============================================================================
 *
 * Text codes are used for one of two things: performing actions or replacing
 * themselves with text data. This Plugin Parameter will focus on the aspect of
 * performing actions. These actions can be done through each JavaScript or by
 * a common event (if it is used in the Message Window). Adequate knowledge of
 * both is recommended before attempting to modify and/or add new Text Code
 * Actions to the Plugin Parameters.
 *
 * Each of the Text Code Actions are formatted in such a way:
 *
 * ---
 *
 * Text Code Action
 *
 *   Match:
 *   - This is what needs to be matched in order for this text code to work.
 *   - This is the primary text marker after the \ in a text code.
 *   - In \N[x], this would be the 'N'.
 *
 *   Type:
 *   - The type of parameter to obtain (none, number, or string).
 *   - This is the way the text code determines the condition type.
 *   - In \N[x], this would be the '[x]'.
 *
 *   Common Event:
 *   - Select a common event to run when this text code is used in a message.
 *
 *   JS: Action:
 *   - JavaScript code used to perform an action when this text code appears.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Code Replacements
 * ============================================================================
 *
 * Text codes are used for one of two things: performing actions or replacing
 * themselves with text data. This Plugin Parameter will focus on the aspect of
 * replacing the text codes with text data. Text data can be replaced with
 * an exact exchange of text or dynamically through JavaScript. Adding a new
 * Text Code Replacement is done through the Plugin Parameters.
 *
 * Each of the Text Code Replacements are formatted in such a way:
 *
 * ---
 *
 * Text Code Replacement
 *
 *   Match:
 *   - This is what needs to be matched in order for this text code to work.
 *   - This is the primary text marker after the \ in a text code.
 *   - In \N[x], this would be the 'N'.
 *
 *   Type:
 *   - The type of parameter to obtain (none, number, or string).
 *   - This is the way the text code determines the condition type.
 *   - In \N[x], this would be the '[x]'.
 *
 *   STR: Text:
 *   - The text that will appear if this match appears.
 *     If this has a value, ignore the JS: Text version.
 *
 *   JS: Text:
 *   - JavaScript code used to determine the text that will appear if this
 *     match appears.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Macros
 * ============================================================================
 *
 * Text macros are used in similar fashion to text codes replacements to
 * replace themselves with text data. The primary difference is that macros are
 * made in a different format with no conditional argument modifiers (ie the
 * [x] that follows a text code).
 *
 * To use a text macro, type in the matching keyword between two [brackets] and
 * it will be replaced by the string data or run the JavaScript code found in
 * the Plugin Parameter settings.
 *
 * For example, if you have the text macro "Leader", made to return the party
 * leader's name, you can type in [Leader] in the Message Window and it will be
 * replaced with the party leader's name. The output can also output text codes
 * into the resulting text.
 * 
 * This does NOT work with \MacroName as it did with Yanfly Engine Plugins.
 * Use the method stated before with the brackets to [MacroName] instead.
 *
 * Each of the Text Macros are formatted in such a way:
 *
 * ---
 *
 * Text Macro
 *
 *   Match:
 *   - This is what needs to be matched in order for this macro to work.
 *   - In [Leader], this would be the 'Leader' text.
 *
 *   STR: Text:
 *   - The replacement text that will appear from the macro.
 *   - If this has a value, ignore the JS: Text version.
 *
 *   JS: Text:
 *   - JavaScript code used to determine the text that will appear if this
 *     macro appears.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Speed Option Settings
 * ============================================================================
 *
 * Modern RPG's on the market have the option to adjust the message speed rate
 * for players. These Plugin Parameters allow you to add that option to the
 * Options Menu as well.
 *
 * ---
 *
 * Text Speed Option Settings
 *
 *   Add Option?:
 *   - Add the 'Text Speed' option to the Options menu?
 *
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 *
 *   Option Name:
 *   - Command name of the option.
 *
 *   Default Value:
 *   - 1 - 10, slowest to fastest.
 *   - 11 is instant value.
 *
 *   Instant Speed:
 *   - Text to show "instant" text.
 *
 * ---
 * 
 * ============================================================================
 * Plugin Parameters: Word Wrap Settings
 * ============================================================================
 *
 * Word wrap is a property that will cause any overflowing text to wrap around
 * and move into the next line. This property can only be enabled inside text
 * that accept text codes, such as the Message Window and Help Window. However,
 * word wrap is disabled for the Choice Window due to the nature of the Choice
 * Window's base properties.
 *
 * Word wrap can be enabled or disabled in three ways. One is by using the text
 * code <WordWrap> to enable it or </WordWrap> to disable it. The second method
 * is by enabling it with the Plugin Command: 'Message: Properties'. The third
 * method is by enabling it by default with the Plugin Parameters.
 * 
 * Word wrap only supports left-to-right alphabetical languages that utilize
 * spaces. It does not support any Asian languages that do not utilize spaces,
 * such as Chinese, Japanese, Korean, etc.
 *
 * ---
 *
 * Enable Word Wrap
 *
 *   Message Window:
 *   - Automatically enable Word Wrap for this window?
 *
 *   Help Window:
 *   - Automatically enable Word Wrap for this window?
 *
 * ---
 *
 * Rules
 *
 *   Link Break -> Space:
 *   - Convert manually placed (non tagged) line breaks with spaces?
 *   - Line breaks must be inserted using the <br> text code.
 *
 *   Tight Wrap:
 *   - If a face graphic is present in a message, word wrap will be tighter.
 * 
 *   End Padding:
 *   - Add extra padding to your window to make text wrap further away from the
 *     end of the window.
 *   - This will default to 0.
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.33: February 10, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Irina:
 * *** Picture: Change Text
 * **** This new plugin command allows you to place text on top of pictures
 *      (usually in the form of empty pages or cards) to function as stationary
 *      or other uses. Text codes are allowed.
 * **** Text codes are supported.
 * *** Picture: Erase Text
 * **** Removes text from target picture(s).
 * 
 * Version 1.32: January 20, 2022
 * * Bug Fixes!
 * ** Extra Show Choice notetags will now be properly hidden. Fix by Irina.
 * * Compatibility Update!
 * ** Self Switches are now made compatible with work with Show Choices. Update
 *    made by Irina.
 * 
 * Version 1.31: December 9, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New hard-coded message-only text code added by Irina:
 * *** <Next Page>
 * **** Ends the current message page at this line. This is used for messages
 *      when rows are at 5 or above and the message lines don't match the
 *      amount. This is used to prevent grabbing message windows from following
 *      message events. Any lines following <Next Page> in the same message
 *      event will be ignored.
 * 
 * Version 1.30: November 11, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Help file updated for removed "Center Window X" bit.
 * * Feature Update!
 * ** Message: Properties now has "Center Window X?" removed
 * *** Changes will now be automatically centered.
 * *** This change is made for the new Plugin Command added for offsets which
 *     more or less replaces them.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Puddor:
 * *** Message: X/Y Offsets
 * **** Change the X and Y Offsets of the Message Window.
 * **** The offset value(s) will be saved and stored.
 * ** New Plugin Parameters added by Irina and sponsored by Puddor:
 * *** Plugin Parameters > General Settings > Message Window > Offset X
 * *** Plugin Parameters > General Settings > Message Window > Offset Y
 * **** Allows you to offset the horizontal and/or vertical positions of the
 *      message window accordingly.
 * ** New Text Codes added by Irina and sponsored by Puddor:
 * *** <Offset: +x, +y>
 * *** <Offset: -x, -y>
 * *** <Offset: +x, -y>
 * *** <Offset: -x, +y>
 * **** Quickly adjust the message window offset values to the x and y amounts.
 *      The values will replace the previous offset settings if there were any.
 * 
 * Version 1.29: October 21, 2021
 * * Feature Update
 * ** Word Wrap flags are now properly adjusted when converting macros and
 *    adding bypasses towards regular messages. Update by Irina.
 * 
 * Version 1.28: October 14, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.27: October 7, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.26: September 3, 2021
 * * Bug Fixes!
 * ** Macros should now work properly with any \x<n> based text codes.
 *    Fix made by Irina.
 * 
 * Version 1.25: August 27, 2021
 * * Feature Update!
 * ** Macros should now work with the <WordWrap> text code. Update by Irina.
 * 
 * Version 1.24: August 20, 2021
 * * Feature Update!
 * ** Macros should now work with window placement and resize options.
 *    Update made by Irina.
 * ** Macros should now work with choice-related enable and visibility options.
 *    Update made by Irina.
 * 
 * Version 1.23: July 16, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Word Wrap Settings > End Padding
 * **** Add extra padding to your window to make text wrap further away from
 *      the end of the window. This will default to 0.
 * 
 * Version 1.22: July 2, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Text Codes added by Irina and sponsored by AndyL:
 * *** <Current Battle Target>
 * *** <Current Battle User>
 * **** Replaces the text code with the current target or current user's name
 *      in-battle. Otherwise, returns nothing.
 * **** Not recommended to be used inside of Help Descriptions. They are best
 *      used with "Show Text" event commands.
 * *** <Current Battle Action>
 * *** <Current Battle Action Name>
 * **** Replaces the text code with the current battle action's name with the
 *      icon or without it respectively. Otherwise, returns nothing.
 * **** Not recommended to be used inside of Help Descriptions. They are best
 *      used with "Show Text" event commands.
 * 
 * Version 1.21: June 4, 2021
 * * Documentation Update!
 * ** Added extra note to the new <Position: x, y, width, height> text codes
 *    that they do not work with Word Wrap.
 * * Feature Update!
 * ** Added fail safe for preventing Common Events that don't exist from being
 *    ran at all by the Message Window. Added by Arisu.
 * 
 * Version 1.20: May 28, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added additional clarity for \WindowMoveTo<?> and \WindowMoveBy<?> and
 *    \WindowReset text codes with "Note 2".
 * *** Replace '?' with the following format: targetX, targetY, targetWidth,
 *     targetHeight, duration, easingType. Only targetX and targetY are
 *     required arguments. These will only alter the window dimensions when the
 *     text has arrived at that point. They will not alter the window
 *     preemptively. This is not used as a window positioner. Use the
 *     <Position: x, y, width, height> text code for that.
 * * New Features!
 * ** New hard-coded text codes added for Message Window Only. Added by Irina.
 * *** <Position: x, y, width, height>
 * *** <Coordinates: x, y>
 * *** <Dimensions: width, height>
 * 
 * Version 1.19: May 14, 2021
 * * Feature Updates!
 * ** <br> line breaks can now be used by Show Choices. Make sure that there is
 *    enough room to contain the text through Plugin Commands. Update by Irina.
 * 
 * Version 1.18: April 30, 2021
 * * Bug Fixes!
 * ** Moving windows with 0 duration via text code should now instantly move
 *    the windows to the desired location with no delay. Fix made by Olivia.
 * 
 * Version 1.17: April 9, 2021
 * * Feature Update!
 * ** <Auto> text codes for message windows will round up calculations for the
 *    message width to the nearest even number for better calculations.
 * 
 * Version 1.16: April 2, 2021
 * * Bug Fixes!
 * ** \CommonEvent[x] text code will no longer run upon message window size
 *    calculation. Fix made by Arisu.
 * * Documentation Update!
 * ** Added further clarification for "Text Macros" section.
 * *** This does NOT work with \MacroName as it did with Yanfly Engine Plugins.
 *     Use the method stated before with the brackets to [MacroName] instead.
 * 
 * Version 1.15: March 5, 2021
 * * Bug Fixes!
 * ** Hidden choices by switches will no longer count towards the maximum line
 *    count for Show Choice options. Fix made by Irina.
 * 
 * Version 1.14: February 12, 2021
 * * Bug Fixes!
 * ** Auto positioned messages in battle will no longer cover the battler in
 *    question. Fix made by Irina.
 * 
 * Version 1.13: February 5, 2021
 * * Bug Fixes!
 * ** Choice List Window with a dimmed background should now have a more
 *    consistent sized dim sprite. Fix made by Irina.
 * 
 * Version 1.12: January 22, 2021
 * * Feature Update!
 * ** Name Box Window Default Color is now disabled by default to 0 because
 *    users do not understand why their names are showing up yellow and did not
 *    bother reading the documentation. If users want this feature turned on,
 *    they will have to do it manually from now on. Update made by Irina.
 * 
 * Version 1.11: January 15, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.10: January 8, 2021
 * * Bug Fixes!
 * ** <Auto Actor: x> and <Auto Party: x> text codes should now work properly.
 *    Fix made by Irina.
 * * Feature Update!
 * ** Auto Color Plugin Parameters now have their default settings set to 0.
 *    This is due to an influx of "bug reports" from users who do not
 *    understand how this feature works, and the VisuStella team has decided it
 *    is better for the feature to default to an inactive state until users
 *    decide to search and utilize it themselves. Update made by Irina.
 * 
 * Version 1.09: January 1, 2021
 * * Feature Update!
 * ** Auto-color no longer applies to database names that are only numbers.
 *    Auto-color entries that are only numbers will also be ignored. This is to
 *    prevent breaking the text code parsing. Update made by Yanfly.
 * 
 * Version 1.08: November 15, 2020
 * * Documentation Update!
 * ** Some text codes left for the Name Box Window have been accidentally left
 *    out. These text codes allow for the positioning of the Name Box Window.
 *    Also, added to this section are the \NormalBG, \DimBG, and \TransparentBG
 *    text codes since people have been asking for how to change the name box
 *    window's background, but have skimmed over those text codes in different
 *    sections of the help file.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.07: November 8, 2020
 * * Bug Fixes!
 * ** When using auto size functions, the message pause symbol will no longer
 *    appear semi-transparent the whole time. Fix made by Irina.
 * 
 * Version 1.06: October 25, 2020
 * * Documentation Update!
 * ** Added a warning message to the Fast Forward Key plugin parameter:
 * *** WARNING: If this key is the same as the dash button, this will clear out
 *     any held down inputs upon triggering an event  to prevent players from
 *     skipping potentially useful information stored in messages. If you do
 *     not want the input to be cleared, use a different key.
 * ** Updated help file for new features.
 * * Feature Update!
 * ** The default Fast Forward Key setting has now been changed from "Shift" to
 *    "Page Down". Change made by Yanfly
 * * New Feature!
 * ** New Plugin Parameter added by Irina.
 * *** Plugin Parameters > General > Default Outline Width
 * **** Changes the default outline width to this many pixels thick.
 * 
 * Version 1.06: September 27, 2020
 * * Bug Fixes!
 * ** Setting an actor's autocolor will now disable it from \N[x] and \P[x]
 *    text codes. Fix made by Irina.
 * 
 * Version 1.05: September 20, 2020
 * * Bug Fixes!
 * ** Auto Position text codes not place positions properly if the screen width
 *    and height differ from the box width and box height. Fix made by Irina.
 * 
 * Version 1.04: September 13, 2020
 * * Bug Fixes!
 * ** Word wrap no longer affects specific battle messages. Fix made by Irina.
 * ** Word wrap now updates properly after using the 'Message: Properties'
 *    Plugin Command. Fix made by Arisu.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** Autoplacement of the name box window now takes its offset Y setting into
 *    account before sending it to the bottom of the message window. Fix made
 *    by Yanfly.
 * ** Added automatic feature setting to turn off word wrap when using the
 *    auto-size and auto-position text codes. This is because the auto-size and
 *    auto-position effects don't work properly with Word Wrap based on how
 *    they both clash when adjusting the window settings. Fix made by Irina.
 * ** New message pages after auto-sizing no longer put out empty messages.
 *    Fix made by Irina and Shiro.
 * * Documentation Update!
 * ** Extended the note for auto-size and auto-position text codes to include
 *    that they do not work with Word Wrap. Added by Irina.
 * 
 * Version 1.02: August 30, 2020
 * * New Features!
 * ** Added new hard-coded text codes for auto-sizing and auto-positioning:
 * *** <Auto>, <Auto Width>, <Auto Height>
 * *** <Auto Actor: x>, <Auto Party: x>, <Auto Enemy: x>
 * *** <Auto Player>, <Auto Actor: x>, <Auto Party: x>, <Auto Event: x>
 * **** New features added by Irina.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** </Wordwrap> now works.
 * ** \ActorFace[x] text code now fixed.
 * *** Users updating from version 1.00 will need to fix this problem by either
 *     removing the plugin from the Plugin Manager list and reinstalling it, or
 *     going to Plugin Parameters > Text Code Replacements > ActorFace >
 *     JS: Text > and changing "$gameActors.actor(1)" to
 *     "$gameActors.actor(actorId)"
 * ** Actors with empty names would cause auto hightlight problems. Fixed!
 * ** Auto-colors now ignore names with special characters like !, ?, [, ], and
 *    so on.
 * ** Line break spacing fixed.
 * * New Features!
 * ** Wordwrap now works with <left>, <center> and <right> alignment tags.
 *
 * Version 1.00: August 20, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MessageWindowProperties
 * @text Message: Properties
 * @desc Change the various properties of the Message Window.
 *
 * @arg Rows:num
 * @text Rows
 * @type number
 * @min 0
 * @desc Change the number of Message Window rows.
 * Leave at 0 to keep it unchanged.
 * @default 4
 *
 * @arg Width:num
 * @text Width
 * @type number
 * @min 0
 * @desc Change the Message Window width in pixels.
 * Leave at 0 to keep it unchanged.
 * @default 816
 *
 * @arg WordWrap:str
 * @text Word Wrap
 * @type select
 * @option No Change
 * @value No Change
 * @option Enable
 * @value true
 * @option Disable
 * @value false
 * @desc Enable or disable Word Wrap for the Message Window?
 * @default No Change
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MessageWindowXyOffsets
 * @text Message: X/Y Offsets
 * @desc Change the X and Y Offsets of the Message Window.
 * The offset value(s) will be saved and stored.
 *
 * @arg OffsetX:eval
 * @text Offset X
 * @desc Offset Message Window horizontally.
 * Negative: Left; Positive: Right
 * @default +0
 *
 * @arg OffsetY:eval
 * @text Offset Y
 * @desc Offset Message Window vertically.
 * Negative: Up; Positive: Down
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChoiceWindowProperties
 * @text Choices: Properties
 * @desc Change the properties found in the Show Choices event command.
 *
 * @arg LineHeight:num
 * @text Line Height
 * @type number
 * @min 0
 * @desc Change the line height for the show choices.
 * Leave at 0 to keep this unchanged.
 * @default 36
 *
 * @arg MaxRows:num
 * @text Max Rows
 * @type number
 * @min 0
 * @desc Maximum number of choice rows to be displayed.
 * Leave at 0 to keep this unchanged.
 * @default 8
 *
 * @arg MaxCols:num
 * @text Max Columns
 * @type number
 * @min 0
 * @desc Maximum number of choice columns to be displayed.
 * Leave at 0 to keep this unchanged.
 * @default 1
 *
 * @arg TextAlign:str
 * @text Text Alignment
 * @type select
 * @option Default
 * @value default
 * @option Left
 * @value left
 * @option Center
 * @value center
 * @option Right
 * @value right
 * @desc Text alignment for Show Choice window.
 * @default default
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureTextChange
 * @text Picture: Change Text
 * @desc Change text for target picture(s) to show.
 * You may use text codes.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc The ID(s) of the picture(s) to set text to.
 * @default ["1"]
 *
 * @arg Padding:eval
 * @text Padding
 * @parent PictureIDs:arraynum
 * @desc How much padding from the sides should there be?
 * @default $gameSystem.windowPadding()
 * 
 * @arg Text
 *
 * @arg upperleft:json
 * @text Upper Left
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg up:json
 * @text Upper Center
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg upperright:json
 * @text Upper Right
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg left:json
 * @text Middle Left
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg center:json
 * @text Middle Center
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg right:json
 * @text Middle Right
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg lowerleft:json
 * @text Lower Left
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg down:json
 * @text Lower Center
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg lowerright:json
 * @text Lower Right
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureTextErase
 * @text Picture: Erase Text
 * @desc Erase all text for target picture(s).
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc The ID(s) of the picture(s) to erase text for.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param MessageCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param General:struct
 * @text General Settings
 * @type struct<General>
 * @desc General settings involving the message system.
 * @default {"MessageWindow":"","MessageRows:num":"4","MessageWidth:num":"816","FastForwardKey:str":"pagedown","MessageTextDelay:num":"1","StretchDimmedBg:eval":"true","DefaultOutlineWidth:num":"3","NameBoxWindow":"","NameBoxWindowDefaultColor:num":"0","NameBoxWindowOffsetX:num":"0","NameBoxWindowOffsetY:num":"0","ChoiceListWindow":"","ChoiceWindowLineHeight:num":"36","ChoiceWindowMaxRows:num":"8","ChoiceWindowMaxCols:num":"1","ChoiceWindowTextAlign:str":"default","DefaultTextCodes":"","RelativePXPY:eval":"true","FontBiggerCap:eval":"108","FontSmallerCap:eval":"12","FontChangeValue:eval":"12"}
 *
 * @param AutoColor:struct
 * @text Auto-Color Settings
 * @type struct<AutoColor>
 * @desc Automatically color certain keywords a specific way.
 * @default {"DatabaseHighlighting":"","Actors:str":"0","Classes:str":"0","Skills:str":"0","Items:str":"0","Weapons:str":"0","Armors:str":"0","Enemies:str":"0","States:str":"0","WordHighlighting":"","TextColor1:arraystr":"[]","TextColor2:arraystr":"[]","TextColor3:arraystr":"[]","TextColor4:arraystr":"[]","TextColor5:arraystr":"[]","TextColor6:arraystr":"[]","TextColor7:arraystr":"[]","TextColor8:arraystr":"[]","TextColor9:arraystr":"[]","TextColor10:arraystr":"[]","TextColor11:arraystr":"[]","TextColor12:arraystr":"[]","TextColor13:arraystr":"[]","TextColor14:arraystr":"[]","TextColor15:arraystr":"[]","TextColor16:arraystr":"[]","TextColor17:arraystr":"[]","TextColor18:arraystr":"[]","TextColor19:arraystr":"[]","TextColor20:arraystr":"[]","TextColor21:arraystr":"[]","TextColor22:arraystr":"[]","TextColor23:arraystr":"[]","TextColor24:arraystr":"[]","TextColor25:arraystr":"[]","TextColor26:arraystr":"[]","TextColor27:arraystr":"[]","TextColor28:arraystr":"[]","TextColor29:arraystr":"[]","TextColor30:arraystr":"[]","TextColor31:arraystr":"[]"}
 *
 * @param TextCodeActions:arraystruct
 * @text Text Code Actions
 * @type struct<TextCodeAction>[]
 * @desc Text codes that perform actions.
 * @default ["{\"Match:str\":\"ChangeFace\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst data = this.obtainEscapeString(textState).split(',');\\\\nif (textState.drawing) {\\\\n    const filename = data[0].trim();\\\\n    const index = parseInt(data[1] || '0');\\\\n    $gameMessage.setFaceImage(filename, index);\\\\n    this.loadMessageFace();\\\\n    const rtl = $gameMessage.isRTL();\\\\n    const width = ImageManager.faceWidth;\\\\n    const height = this.innerHeight;\\\\n    const x = rtl ? this.innerWidth - width - 4 : 4;\\\\n    this.contents.clearRect(x, 0, width, height);\\\\n    this._faceBitmap.addLoadListener(this.drawMessageFace.bind(this));\\\\n}\\\"\"}","{\"Match:str\":\"FaceIndex\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst index = this.obtainEscapeParam(textState);\\\\nif (textState.drawing) {\\\\n    const filename = $gameMessage.faceName();\\\\n    $gameMessage.setFaceImage(filename, index);\\\\n    this.loadMessageFace();\\\\n    const rtl = $gameMessage.isRTL();\\\\n    const width = ImageManager.faceWidth;\\\\n    const height = this.innerHeight;\\\\n    const x = rtl ? this.innerWidth - width - 4 : 4;\\\\n    this.contents.clearRect(x, 0, width, height);\\\\n    this._faceBitmap.addLoadListener(this.drawMessageFace.bind(this));\\\\n}\\\"\"}","{\"Match:str\":\"TextDelay\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst delay = this.obtainEscapeParam(textState);\\\\nif (textState.drawing && this.constructor === Window_Message) {\\\\n    this.setTextDelay(delay);\\\\n}\\\"\"}","{\"Match:str\":\"NormalBG\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    this.setBackgroundType(0);\\\\n}\\\"\"}","{\"Match:str\":\"DimBG\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    this.setBackgroundType(1);\\\\n}\\\"\"}","{\"Match:str\":\"TransparentBG\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    this.setBackgroundType(2);\\\\n}\\\"\"}","{\"Match:str\":\"FontChange\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst fontName = this.obtainEscapeString(textState);\\\\nthis.contents.fontFace = fontName;\\\"\"}","{\"Match:str\":\"ResetFont\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"this.resetFontSettings();\\\"\"}","{\"Match:str\":\"ResetColor\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"this.resetTextColor();\\\"\"}","{\"Match:str\":\"HexColor\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst hexColor = this.obtainEscapeString(textState);\\\\nif (!this.isColorLocked() && textState.drawing) {\\\\n    this.changeTextColor(hexColor);\\\\n}\\\"\"}","{\"Match:str\":\"OutlineColor\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst colorIndex = this.obtainEscapeParam(textState);\\\\nif (!this.isColorLocked() && textState.drawing) {\\\\n    this.changeOutlineColor(ColorManager.textColor(colorIndex));\\\\n}\\\"\"}","{\"Match:str\":\"OutlineHexColor\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst hexColor = this.obtainEscapeString(textState);\\\\nif (!this.isColorLocked() && textState.drawing) {\\\\n    this.changeOutlineColor(hexColor);\\\\n}\\\"\"}","{\"Match:str\":\"OutlineWidth\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst width = this.obtainEscapeParam(textState);\\\\nif (textState.drawing) {\\\\n    this.contents.outlineWidth = width;\\\\n}\\\"\"}","{\"Match:str\":\"WindowMoveTo\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst data = this.obtainEscapeString(textState).split(',');\\\\nif (textState.drawing) {\\\\n    const x = !!data[0] ? Number(data[0].trim()) : this.x;\\\\n    const y = !!data[1] ? Number(data[1].trim()) : this.y;\\\\n    const width = !!data[2] ? Number(data[2].trim()) : this.width;\\\\n    const height = !!data[3] ? Number(data[3].trim()) : this.height;\\\\n    const duration = !!data[4] ? Number(data[4].trim()) : 20;\\\\n    const easingType = !!data[5] ? data[5].trim() : 0;\\\\n    this.moveTo(x, y, width, height, duration, easingType);\\\\n}\\\"\"}","{\"Match:str\":\"WindowMoveBy\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst data = this.obtainEscapeString(textState).split(',');\\\\nif (textState.drawing) {\\\\n    const x = !!data[0] ? Number(data[0].trim()) : 0;\\\\n    const y = !!data[1] ? Number(data[1].trim()) : 0;\\\\n    const width = !!data[2] ? Number(data[2].trim()) : 0;\\\\n    const height = !!data[3] ? Number(data[3].trim()) : 0;\\\\n    const duration = !!data[4] ? Number(data[4].trim()) : 20;\\\\n    const easingType = !!data[5] ? data[5].trim() : 0;\\\\n    this.moveBy(x, y, width, height, duration, easingType);\\\\n}\\\"\"}","{\"Match:str\":\"WindowReset\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    const frames = 20;\\\\n    const easingType = 0;\\\\n    this.resetRect(frames, easingType);\\\\n}\\\"\"}"]
 *
 * @param TextCodeReplace:arraystruct
 * @text Text Code Replacements
 * @type struct<TextCodeReplace>[]
 * @desc Text codes that replace themselves with text.
 * @default ["{\"Match:str\":\"ActorFace\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const actorId = parseInt(arguments[1]);\\\\nconst actor = $gameActors.actor(actorId);\\\\nif (this.constructor === Window_Message && actor) {\\\\n    $gameMessage.setFaceImage(\\\\n        actor.faceName(),\\\\n        actor.faceIndex()\\\\n    );\\\\n}\\\\nreturn '';\\\"\"}","{\"Match:str\":\"PartyFace\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const index = parseInt(arguments[1]) - 1;\\\\nconst actor = $gameParty.members()[index];\\\\nif (this.constructor === Window_Message && actor) {\\\\n    $gameMessage.setFaceImage(\\\\n        actor.faceName(),\\\\n        actor.faceIndex()\\\\n    );\\\\n}\\\\nreturn '';\\\"\"}","{\"Match:str\":\"Class\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataClasses;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ClassName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataClasses;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"Skill\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataSkills;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"SkillName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataSkills;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"Item\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ItemName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ItemQuantity\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nreturn $gameParty.numItems(database[id]);\\\"\"}","{\"Match:str\":\"Weapon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"WeaponName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"WeaponQuantity\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nreturn $gameParty.numItems(database[id]);\\\"\"}","{\"Match:str\":\"LastGainObj\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const icon = true;\\\\nreturn this.lastGainedObjectName(icon);\\\"\"}","{\"Match:str\":\"LastGainObjName\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const icon = false;\\\\nreturn this.lastGainedObjectName(icon);\\\"\"}","{\"Match:str\":\"LastGainObjQuantity\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"return this.lastGainedObjectQuantity();\\\"\"}","{\"Match:str\":\"Armor\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ArmorName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ArmorQuantity\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nreturn $gameParty.numItems(database[id]);\\\"\"}","{\"Match:str\":\"State\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataStates;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"StateName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataStates;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"Enemy\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataEnemies;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"EnemyName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataEnemies;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"Troop\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataTroops;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"TroopName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataTroops;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"TroopMember\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"if (!$gameParty.inBattle()) return \\\\\\\"\\\\\\\";\\\\nconst index = (parseInt(arguments[1]) - 1) || 0;\\\\nconst member = $gameTroop.members()[index];\\\\nconst database = $dataEnemies;\\\\nconst id = member ? member.enemyId() : 0;\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"TroopMemberName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"if (!$gameParty.inBattle()) return \\\\\\\"\\\\\\\";\\\\nconst index = (parseInt(arguments[1]) - 1) || 0;\\\\nconst member = $gameTroop.members()[index];\\\\nconst database = $dataEnemies;\\\\nconst id = member ? member.enemyId() : 0;\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}"]
 *
 * @param TextMacros:arraystruct
 * @text Text Macros
 * @type struct<TextMacro>[]
 * @desc Macros that are used to quickly write batches of text.
 * @default ["{\"Match:str\":\"Example Macro\",\"TextStr:str\":\"This is the text that will be displayed when you type [Example Macro].\",\"TextJS:func\":\"\\\"return 'Text';\\\"\"}","{\"Match:str\":\"Leader\",\"TextStr:str\":\"\\\\P[1]\",\"TextJS:func\":\"\\\"return 'Text';\\\"\"}"]
 *
 * @param TextSpeed:struct
 * @text Text Speed Option Settings
 * @type struct<TextSpeed>
 * @desc Text Speed Options Menu settings.
 * @default {"AddOption:eval":"true","AdjustRect:eval":"true","Name:str":"Text Speed","Default:num":"10","Instant:str":"Instant"}
 *
 * @param WordWrap:struct
 * @text Word Wrap Settings
 * @type struct<WordWrap>
 * @desc Settings involving Word Wrap.
 * @default {"EnableWordWrap":"","MessageWindow:eval":"false","HelpWindow:eval":"false","Rules":"","LineBreakSpace:eval":"true","TightWrap:eval":"false","EndPadding:num":"0"}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param MessageWindow
 * @text Message Window
 *
 * @param MessageRows:num
 * @text Default Rows
 * @parent MessageWindow
 * @type num
 * @min 1
 * @desc Default number of rows to display for the Message Window.
 * @default 4
 *
 * @param MessageWidth:num
 * @text Default Width
 * @parent MessageWindow
 * @type num
 * @min 1
 * @desc Default Message Window width in pixels.
 * @default 816
 *
 * @param FastForwardKey:str
 * @text Fast Forward Key
 * @parent MessageWindow
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc This is the key used for fast forwarding messages.
 * @default pagedown
 *
 * @param MessageTextDelay:num
 * @text Text Delay
 * @parent MessageWindow
 * @type number
 * @min 0
 * @desc How many frames to wait between characters drawn?
 * Use 0 for instant.
 * @default 1
 *
 * @param MsgWindowOffsetX:num
 * @text Offset X
 * @parent MessageWindow
 * @desc Offset Message Window horizontally.
 * Negative: Left; Positive: Right
 * @default +0
 *
 * @param MsgWindowOffsetY:num
 * @text Offset Y
 * @parent MessageWindow
 * @desc Offset Message Window vertically.
 * Negative: Up; Positive: Down
 * @default +0
 *
 * @param StretchDimmedBg:eval
 * @text Stretch Dimmed BG
 * @parent MessageWindow
 * @type boolean
 * @on Stretch
 * @off Don't
 * @desc Stretch dimmed window background to fit the whole screen.
 * @default true
 *
 * @param DefaultOutlineWidth:num
 * @text Default Outline Width
 * @parent MessageWindow
 * @type number
 * @min 0
 * @desc Changes the default outline width to this many pixels thick.
 * @default 3
 *
 * @param NameBoxWindow
 * @text Name Box Window
 *
 * @param NameBoxWindowDefaultColor:num
 * @text Default Color
 * @parent NameBoxWindow
 * @min 0
 * @max 31
 * @desc Default color for the Name Box Window's text.
 * @default 0
 *
 * @param NameBoxWindowOffsetX:num
 * @text Offset X
 * @parent NameBoxWindow
 * @desc How much to offset the name box window X by (as long as it doesn't go offscreen).
 * @default +0
 *
 * @param NameBoxWindowOffsetY:num
 * @text Offset Y
 * @parent NameBoxWindow
 * @desc How much to offset the name box window Y by (as long as it doesn't go offscreen).
 * @default +0
 *
 * @param ChoiceListWindow
 * @text Choice List Window
 *
 * @param ChoiceWindowLineHeight:num
 * @text Line Height
 * @parent ChoiceListWindow
 * @type number
 * @min 1
 * @desc What is the default line height for Show Choices?
 * @default 36
 *
 * @param ChoiceWindowMaxRows:num
 * @text Max Rows
 * @parent ChoiceListWindow
 * @type number
 * @min 1
 * @desc Maximum number of rows to visibly display?
 * @default 8
 *
 * @param ChoiceWindowMaxCols:num
 * @text Max Columns
 * @parent ChoiceListWindow
 * @type number
 * @min 1
 * @desc Maximum number of columns to visibly display?
 * @default 1
 *
 * @param ChoiceWindowTextAlign:str
 * @text Text Alignment
 * @parent ChoiceListWindow
 * @type select
 * @option Default
 * @value default
 * @option Left
 * @value left
 * @option Center
 * @value center
 * @option Right
 * @value right
 * @desc Default alignment for Show Choice window.
 * @default default
 *
 * @param DefaultTextCodes
 * @text Default Text Codes
 *
 * @param RelativePXPY:eval
 * @text Relative \PX \PY
 * @parent DefaultTextCodes
 * @type boolean
 * @on Better
 * @off Normal
 * @desc Make \PX[x] and \PY[x] adjust relative starting position than exact coordinates.
 * @default true
 *
 * @param FontBiggerCap:eval
 * @text \{ Maximum
 * @parent DefaultTextCodes
 * @type number
 * @min 1
 * @desc Determine the maximum size that \{ can reach.
 * @default 108
 *
 * @param FontSmallerCap:eval
 * @text \} Minimum
 * @parent DefaultTextCodes
 * @type number
 * @min 1
 * @desc Determine the minimum size that \} can reach.
 * @default 12
 *
 * @param FontChangeValue:eval
 * @text \{ Change \}
 * @parent DefaultTextCodes
 * @type number
 * @min 1
 * @desc How much does \{ and \} change font size by?
 * @default 12
 *
 */
/* ----------------------------------------------------------------------------
 * Auto Color Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~AutoColor:
 *
 * @param DatabaseHighlighting
 * @text Database Highlighting
 *
 * @param Actors:str
 * @text Actors
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Actor's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Classes:str
 * @text Classes
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a Class's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Skills:str
 * @text Skills
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a Skill's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Items:str
 * @text Items
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Item's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Weapons:str
 * @text Weapons
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a Weapon's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Armors:str
 * @text Armors
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Armor's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Enemies:str
 * @text Enemies
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Enemy's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param States:str
 * @text States
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a State's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param WordHighlighting
 * @text Word Highlighting
 *
 * @param TextColor1:arraystr
 * @text \C[1]: Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor2:arraystr
 * @text \C[2]: Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor3:arraystr
 * @text \C[3]: Green
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor4:arraystr
 * @text \C[4]: Sky Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor5:arraystr
 * @text \C[5]: Purple
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor6:arraystr
 * @text \C[6]: Yellow
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor7:arraystr
 * @text \C[7]: Gray
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor8:arraystr
 * @text \C[8]: Light Gray
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor9:arraystr
 * @text \C[9]: Dark Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor10:arraystr
 * @text \C[10]: Dark Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor11:arraystr
 * @text \C[11]: Dark Green
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor12:arraystr
 * @text \C[12]: Dark Sky Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor13:arraystr
 * @text \C[13]: Dark Purple
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor14:arraystr
 * @text \C[14]: Solid Yellow
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor15:arraystr
 * @text \C[15]: Black
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor16:arraystr
 * @text \C[16]: System Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor17:arraystr
 * @text \C[17]: Crisis Yellow
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor18:arraystr
 * @text \C[18]: Dead Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor19:arraystr
 * @text \C[19]: Outline Black
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor20:arraystr
 * @text \C[20]: HP Orange 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor21:arraystr
 * @text \C[21]: HP Orange 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor22:arraystr
 * @text \C[22]: MP Blue 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor23:arraystr
 * @text \C[23]: MP Blue 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor24:arraystr
 * @text \C[24]: Param Up Green
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor25:arraystr
 * @text \C[25]: Param Down Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor26:arraystr
 * @text \C[26]: System Purple
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor27:arraystr
 * @text \C[27]: System Pink
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor28:arraystr
 * @text \C[28]: TP Green 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor29:arraystr
 * @text \C[29]: TP Green 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor30:arraystr
 * @text \C[30]: EXP Purple 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor31:arraystr
 * @text \C[31]: EXP Purple 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Text Code Actions
 * ----------------------------------------------------------------------------
 */
/*~struct~TextCodeAction:
 *
 * @param Match:str
 * @text Match
 * @desc This is what needs to be matched in order for this text code to work.
 * @default Key
 *
 * @param Type:str
 * @text Type
 * @type select
 * @option none
 * @value 
 * @option [x] (number)
 * @value \[(\d+)\]
 * @option <x> (string)
 * @value \<(.*?)\>
 * @desc The type of parameter to obtain (none, number, or string).
 * @default 
 *
 * @param CommonEvent:num
 * @text Common Event
 * @type common_event
 * @desc Select a common event to run when this text code is used in a message.
 * @default 0
 *
 * @param ActionJS:func
 * @text JS: Action
 * @type note
 * @desc JavaScript code used to perform an action when this text code appears.
 * @default "const textState = arguments[0];"
 *
 */
/* ----------------------------------------------------------------------------
 * Text Code Replacements
 * ----------------------------------------------------------------------------
 */
/*~struct~TextCodeReplace:
 *
 * @param Match:str
 * @text Match
 * @desc This is what needs to be matched in order for this text code to work.
 * @default Key
 *
 * @param Type:str
 * @text Type
 * @type select
 * @option none
 * @value 
 * @option [x] (number)
 * @value \[(\d+)\]
 * @option <x> (string)
 * @value \<(.*?)\>
 * @desc The type of parameter to obtain (none, number, or string).
 * @default 
 *
 * @param TextStr:str
 * @text STR: Text
 * @desc The text that will appear if this match appears.
 * If this has a value, ignore the JS: Text version.
 * @default Undefined
 *
 * @param TextJS:func
 * @text JS: Text
 * @type note
 * @desc JavaScript code used to determine the text that will appear if this match appears.
 * @default "return 'Text';"
 *
 */
/* ----------------------------------------------------------------------------
 * Text Macro
 * ----------------------------------------------------------------------------
 */
/*~struct~TextMacro:
 *
 * @param Match:str
 * @text Match
 * @desc This is what needs to be matched in order for this macro to work.
 * @default Key
 *
 * @param TextStr:str
 * @text STR: Text
 * @desc The replacement text that will appear from the macro.
 * If this has a value, ignore the JS: Text version.
 * @default Undefined
 *
 * @param TextJS:func
 * @text JS: Text
 * @type note
 * @desc JavaScript code used to determine the text that will appear if this macro appears.
 * @default "return 'Text';"
 *
 */
/* ----------------------------------------------------------------------------
 * Text Speed Options Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TextSpeed:
 *
 * @param AddOption:eval
 * @text Add Option?
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Text Speed' option to the Options menu?
 * @default true
 *
 * @param AdjustRect:eval
 * @text Adjust Window Height
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param Name:str
 * @text Option Name
 * @desc Command name of the option.
 * @default Text Speed
 *
 * @param Default:num
 * @text Default Value
 * @type number
 * @min 1
 * @max 11
 * @desc 1 - 10, slowest to fastest.
 * 11 is instant value.
 * @default 10
 *
 * @param Instant:str
 * @text Instant Speed
 * @desc Text to show "instant" text.
 * @default Instant
 *
 */
/* ----------------------------------------------------------------------------
 * Word Wrap Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~WordWrap:
 *
 * @param EnableWordWrap
 * @text Enable Word Wrap
 *
 * @param MessageWindow:eval
 * @text Message Window
 * @parent EnableWordWrap
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Automatically enable Word Wrap for this window?
 * @default false
 *
 * @param HelpWindow:eval
 * @text Help Window
 * @parent EnableWordWrap
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Automatically enable Word Wrap for this window?
 * @default false
 *
 * @param Rules
 * @text Rules
 *
 * @param LineBreakSpace:eval
 * @text Link Break -> Space
 * @parent Rules
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Convert manually placed (non tagged) line breaks with spaces?
 * @default true
 *
 * @param TightWrap:eval
 * @text Tight Wrap
 * @parent Rules
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc If a face graphic is present in a message, word wrap will be tighter.
 * @default false
 *
 * @param EndPadding:num
 * @text End Padding
 * @parent Rules
 * @type number
 * @desc Add extra padding to your window to make text wrap further away from the end of the window.
 * @default 0
 *
 */
//=============================================================================

const _0xce50af=_0x1bbc;(function(_0x2215a5,_0x45cd97){const _0x40629e=_0x1bbc,_0x4b4b23=_0x2215a5();while(!![]){try{const _0x2d8712=parseInt(_0x40629e(0x268))/0x1*(-parseInt(_0x40629e(0x1ab))/0x2)+-parseInt(_0x40629e(0x1dc))/0x3*(-parseInt(_0x40629e(0x119))/0x4)+-parseInt(_0x40629e(0x105))/0x5*(parseInt(_0x40629e(0x1a0))/0x6)+-parseInt(_0x40629e(0x1f6))/0x7*(-parseInt(_0x40629e(0x12f))/0x8)+parseInt(_0x40629e(0x116))/0x9+-parseInt(_0x40629e(0x199))/0xa*(-parseInt(_0x40629e(0x359))/0xb)+parseInt(_0x40629e(0xd7))/0xc*(-parseInt(_0x40629e(0x331))/0xd);if(_0x2d8712===_0x45cd97)break;else _0x4b4b23['push'](_0x4b4b23['shift']());}catch(_0x4fe0b4){_0x4b4b23['push'](_0x4b4b23['shift']());}}}(_0x5e83,0xf23db));function _0x1bbc(_0x166b01,_0x974ddc){const _0x5e83a4=_0x5e83();return _0x1bbc=function(_0x1bbc8a,_0xd575b7){_0x1bbc8a=_0x1bbc8a-0x9e;let _0x246db5=_0x5e83a4[_0x1bbc8a];return _0x246db5;},_0x1bbc(_0x166b01,_0x974ddc);}var label=_0xce50af(0x329),tier=tier||0x0,dependencies=[],pluginData=$plugins['filter'](function(_0x480d68){const _0x238e7c=_0xce50af;return _0x480d68[_0x238e7c(0x1c1)]&&_0x480d68['description'][_0x238e7c(0x215)]('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0xce50af(0xa3)]||{},VisuMZ[_0xce50af(0x332)]=function(_0x4fb1b1,_0x2d022e){const _0x1c53eb=_0xce50af;for(const _0x218292 in _0x2d022e){if(_0x1c53eb(0xaa)!==_0x1c53eb(0xaa))return _0x41704d;else{if(_0x218292[_0x1c53eb(0x188)](/(.*):(.*)/i)){const _0x427c48=String(RegExp['$1']),_0x54be79=String(RegExp['$2'])[_0x1c53eb(0xfc)]()['trim']();let _0x1b3d42,_0x5b567f,_0x3069bc;switch(_0x54be79){case _0x1c53eb(0x367):_0x1b3d42=_0x2d022e[_0x218292]!==''?Number(_0x2d022e[_0x218292]):0x0;break;case _0x1c53eb(0x362):_0x5b567f=_0x2d022e[_0x218292]!==''?JSON[_0x1c53eb(0x198)](_0x2d022e[_0x218292]):[],_0x1b3d42=_0x5b567f[_0x1c53eb(0x28e)](_0x32cdb6=>Number(_0x32cdb6));break;case _0x1c53eb(0x320):_0x1b3d42=_0x2d022e[_0x218292]!==''?eval(_0x2d022e[_0x218292]):null;break;case _0x1c53eb(0x30b):_0x5b567f=_0x2d022e[_0x218292]!==''?JSON[_0x1c53eb(0x198)](_0x2d022e[_0x218292]):[],_0x1b3d42=_0x5b567f['map'](_0x517c09=>eval(_0x517c09));break;case _0x1c53eb(0x23e):_0x1b3d42=_0x2d022e[_0x218292]!==''?JSON['parse'](_0x2d022e[_0x218292]):'';break;case _0x1c53eb(0x272):_0x5b567f=_0x2d022e[_0x218292]!==''?JSON[_0x1c53eb(0x198)](_0x2d022e[_0x218292]):[],_0x1b3d42=_0x5b567f[_0x1c53eb(0x28e)](_0x16f59a=>JSON['parse'](_0x16f59a));break;case _0x1c53eb(0xb1):_0x1b3d42=_0x2d022e[_0x218292]!==''?new Function(JSON[_0x1c53eb(0x198)](_0x2d022e[_0x218292])):new Function('return\x200');break;case _0x1c53eb(0xd9):_0x5b567f=_0x2d022e[_0x218292]!==''?JSON[_0x1c53eb(0x198)](_0x2d022e[_0x218292]):[],_0x1b3d42=_0x5b567f[_0x1c53eb(0x28e)](_0x37996e=>new Function(JSON[_0x1c53eb(0x198)](_0x37996e)));break;case _0x1c53eb(0x122):_0x1b3d42=_0x2d022e[_0x218292]!==''?String(_0x2d022e[_0x218292]):'';break;case _0x1c53eb(0x279):_0x5b567f=_0x2d022e[_0x218292]!==''?JSON[_0x1c53eb(0x198)](_0x2d022e[_0x218292]):[],_0x1b3d42=_0x5b567f[_0x1c53eb(0x28e)](_0x3e2608=>String(_0x3e2608));break;case _0x1c53eb(0x197):_0x3069bc=_0x2d022e[_0x218292]!==''?JSON[_0x1c53eb(0x198)](_0x2d022e[_0x218292]):{},_0x4fb1b1[_0x427c48]={},VisuMZ[_0x1c53eb(0x332)](_0x4fb1b1[_0x427c48],_0x3069bc);continue;case _0x1c53eb(0x1f7):_0x5b567f=_0x2d022e[_0x218292]!==''?JSON['parse'](_0x2d022e[_0x218292]):[],_0x1b3d42=_0x5b567f['map'](_0x400bb8=>VisuMZ[_0x1c53eb(0x332)]({},JSON[_0x1c53eb(0x198)](_0x400bb8)));break;default:continue;}_0x4fb1b1[_0x427c48]=_0x1b3d42;}}}return _0x4fb1b1;},(_0x5c80fc=>{const _0xab09c2=_0xce50af,_0x223bbe=_0x5c80fc[_0xab09c2(0x277)];for(const _0x1f8a11 of dependencies){if(!Imported[_0x1f8a11]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'['format'](_0x223bbe,_0x1f8a11)),SceneManager[_0xab09c2(0x2e7)]();break;}}const _0x182f55=_0x5c80fc[_0xab09c2(0x205)];if(_0x182f55['match'](/\[Version[ ](.*?)\]/i)){const _0x483691=Number(RegExp['$1']);if(_0x483691!==VisuMZ[label][_0xab09c2(0x307)]){if(_0xab09c2(0x177)===_0xab09c2(0x177))alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'['format'](_0x223bbe,_0x483691)),SceneManager[_0xab09c2(0x2e7)]();else{for(const _0x44f5b7 of _0x4e486e[_0xab09c2(0x315)][0x0]){this['_list'][_0x12aa74]['parameters'][0x0][_0xab09c2(0x144)](_0x44f5b7);}this[_0xab09c2(0x213)][_0xab09c2(0x1f8)](this[_0xab09c2(0x34d)]-0x1,0x2);}}}if(_0x182f55[_0xab09c2(0x188)](/\[Tier[ ](\d+)\]/i)){if(_0xab09c2(0xdb)==='muXGb'){const _0x86d9b=Number(RegExp['$1']);if(_0x86d9b<tier){if('DJPIi'==='JCopK')return this['processAutoSize'](_0x5d9928,!![],!![]),this[_0xab09c2(0x1b4)](_0xab09c2(0x28b),_0x31b5c1(_0x49e771)||0x0),'';else alert(_0xab09c2(0x193)[_0xab09c2(0x186)](_0x223bbe,_0x86d9b,tier)),SceneManager[_0xab09c2(0x2e7)]();}else tier=Math[_0xab09c2(0x288)](_0x86d9b,tier);}else return![];}VisuMZ[_0xab09c2(0x332)](VisuMZ[label][_0xab09c2(0xa3)],_0x5c80fc[_0xab09c2(0x315)]);})(pluginData),PluginManager[_0xce50af(0xdd)](pluginData[_0xce50af(0x277)],'ChoiceWindowProperties',_0x4b76c5=>{const _0x18fecb=_0xce50af;VisuMZ[_0x18fecb(0x332)](_0x4b76c5,_0x4b76c5);const _0xf99745=_0x4b76c5[_0x18fecb(0x28c)]||$gameSystem[_0x18fecb(0xbf)]()||0x1,_0x19f7e6=_0x4b76c5[_0x18fecb(0x158)]||$gameSystem[_0x18fecb(0xc8)]()||0x1,_0x536a75=_0x4b76c5[_0x18fecb(0x304)]||$gameSystem[_0x18fecb(0x208)]()||0x1,_0x2722c5=_0x4b76c5[_0x18fecb(0x126)][_0x18fecb(0x18e)]()||'default';$gameSystem[_0x18fecb(0x134)](_0xf99745),$gameSystem[_0x18fecb(0x311)](_0x19f7e6),$gameSystem[_0x18fecb(0xcc)](_0x536a75),$gameSystem['setChoiceListTextAlign'](_0x2722c5);}),PluginManager[_0xce50af(0xdd)](pluginData[_0xce50af(0x277)],'MessageWindowProperties',_0x5a49c4=>{const _0x2b883b=_0xce50af;VisuMZ[_0x2b883b(0x332)](_0x5a49c4,_0x5a49c4);const _0x4f09bf=_0x5a49c4[_0x2b883b(0x216)]||$gameSystem[_0x2b883b(0x273)]()||0x1,_0x283475=_0x5a49c4[_0x2b883b(0xb9)]||$gameSystem[_0x2b883b(0x20e)]()||0x1;$gameTemp[_0x2b883b(0x11d)]=!![];const _0x20276f=_0x5a49c4[_0x2b883b(0x1ff)][_0x2b883b(0x18e)]();$gameSystem[_0x2b883b(0x2fb)](_0x4f09bf),$gameSystem[_0x2b883b(0x260)](_0x283475);[_0x2b883b(0x350),_0x2b883b(0x1b6)][_0x2b883b(0x215)](_0x20276f)&&$gameSystem[_0x2b883b(0x291)](eval(_0x20276f));const _0x2936ee=SceneManager[_0x2b883b(0x127)]['_messageWindow'];_0x2936ee&&(_0x2936ee[_0x2b883b(0x19d)](),_0x2936ee['updateDimensions'](),_0x2936ee[_0x2b883b(0x2c2)]());}),PluginManager[_0xce50af(0xdd)](pluginData[_0xce50af(0x277)],'MessageWindowXyOffsets',_0x411174=>{const _0x109a14=_0xce50af;VisuMZ['ConvertParams'](_0x411174,_0x411174),$gameSystem['setMessageWindowXyOffsets'](_0x411174['OffsetX'],_0x411174[_0x109a14(0x1fe)]);const _0x23ad85=SceneManager[_0x109a14(0x127)][_0x109a14(0x2e9)];_0x23ad85&&(_0x109a14(0x15b)===_0x109a14(0x15b)?(_0x23ad85[_0x109a14(0x19d)](),_0x23ad85[_0x109a14(0x35c)](),_0x23ad85[_0x109a14(0x2c2)]()):_0x3332e2[_0x42fff3]=this[_0x109a14(0x1e9)][_0x1910fd]);}),PluginManager[_0xce50af(0xdd)](pluginData[_0xce50af(0x277)],'PictureTextChange',_0x5e5ba1=>{const _0x2dcf21=_0xce50af;VisuMZ[_0x2dcf21(0x332)](_0x5e5ba1,_0x5e5ba1);const _0x10a8d1=_0x5e5ba1[_0x2dcf21(0xf8)]||[],_0x1e108f=_0x5e5ba1[_0x2dcf21(0xf2)]||0x0,_0x20ac8f=[_0x2dcf21(0x269),'up',_0x2dcf21(0xf1),_0x2dcf21(0x282),_0x2dcf21(0x1a6),'right',_0x2dcf21(0xc7),'down',_0x2dcf21(0x2d1)];for(const _0x4938dd of _0x10a8d1){if(_0x2dcf21(0x148)!==_0x2dcf21(0x2e1)){$gameScreen[_0x2dcf21(0x238)](_0x4938dd,_0x1e108f);for(const _0x3389a6 of _0x20ac8f){if(_0x2dcf21(0x157)!==_0x2dcf21(0x157))_0x436c81['textCodeResult']=_0x12420d[_0x2dcf21(0x36a)];else{if(_0x5e5ba1[_0x3389a6]===undefined)continue;$gameScreen[_0x2dcf21(0x23b)](_0x4938dd,_0x5e5ba1[_0x3389a6],_0x3389a6);}}}else return _0x5ede60[_0x2dcf21(0x1b2)](_0x5e34ae,this['_moveEasingType']);}}),PluginManager[_0xce50af(0xdd)](pluginData[_0xce50af(0x277)],_0xce50af(0x163),_0x5670b3=>{const _0x5ad23e=_0xce50af;VisuMZ[_0x5ad23e(0x332)](_0x5670b3,_0x5670b3);const _0x48b86d=_0x5670b3[_0x5ad23e(0xf8)]||[];for(const _0x425caf of _0x48b86d){if(_0x5ad23e(0x20a)!==_0x5ad23e(0x1b3))$gameScreen[_0x5ad23e(0x1a8)](_0x425caf),$gameScreen[_0x5ad23e(0x221)](_0x425caf);else{const _0x462209=this[_0x5ad23e(0x167)](_0x3dd9fb,0x0,0x0,0x0),_0x978356=this[_0x5ad23e(0x1f2)]();return _0x462209[_0x5ad23e(0x21e)]=![],this[_0x5ad23e(0x379)](![]),this[_0x5ad23e(0x26b)](_0x462209),this[_0x5ad23e(0x379)](!![]),this[_0x5ad23e(0x33d)](_0x978356),{'width':_0x462209[_0x5ad23e(0x366)],'height':_0x462209[_0x5ad23e(0x232)]};}}}),VisuMZ[_0xce50af(0x329)][_0xce50af(0x240)]=Scene_Boot[_0xce50af(0xe6)]['onDatabaseLoaded'],Scene_Boot['prototype'][_0xce50af(0x175)]=function(){const _0x256813=_0xce50af;VisuMZ[_0x256813(0x329)][_0x256813(0x240)][_0x256813(0x2aa)](this),this[_0x256813(0x336)](),this['process_VisuMZ_MessageCore_TextCodes_Replace'](),this[_0x256813(0x137)](),this[_0x256813(0x2f6)]();},VisuMZ[_0xce50af(0x329)][_0xce50af(0x2d8)]=function(_0x33e503){const _0x1e1a6c=_0xce50af,_0x442d3a=VisuMZ[_0x1e1a6c(0x329)]['Settings'][_0x33e503];_0x442d3a[_0x1e1a6c(0x305)]((_0x34131d,_0x21396a)=>{const _0x3f9296=_0x1e1a6c;if(!_0x34131d||!_0x21396a)return-0x1;return _0x21396a[_0x3f9296(0xa7)][_0x3f9296(0x25b)]-_0x34131d[_0x3f9296(0xa7)][_0x3f9296(0x25b)];});},Scene_Boot[_0xce50af(0xe6)][_0xce50af(0x336)]=function(){const _0x1bc6d5=_0xce50af;VisuMZ[_0x1bc6d5(0x329)][_0x1bc6d5(0x2d8)]('TextCodeActions');for(const _0x35b144 of VisuMZ[_0x1bc6d5(0x329)][_0x1bc6d5(0xa3)][_0x1bc6d5(0x246)]){if('bzZbC'===_0x1bc6d5(0xe3)){_0x35b144[_0x1bc6d5(0xa7)]=_0x35b144[_0x1bc6d5(0xa7)]['toUpperCase'](),_0x35b144[_0x1bc6d5(0x364)]=new RegExp('\x1b'+_0x35b144[_0x1bc6d5(0xa7)],'gi'),_0x35b144[_0x1bc6d5(0x2d0)]='\x1b'+_0x35b144['Match'];if(_0x35b144['Type']==='')_0x35b144['textCodeResult']+='[0]';}else _0x2ca322['MessageCore'][_0x1bc6d5(0xeb)]['call'](this),this['clampPlacementPosition']();}},Scene_Boot[_0xce50af(0xe6)]['process_VisuMZ_MessageCore_TextCodes_Replace']=function(){const _0x403aa4=_0xce50af;VisuMZ[_0x403aa4(0x329)][_0x403aa4(0x2d8)](_0x403aa4(0xba));for(const _0x3f3e07 of VisuMZ[_0x403aa4(0x329)][_0x403aa4(0xa3)]['TextCodeReplace']){_0x3f3e07['textCodeCheck']=new RegExp('\x1b'+_0x3f3e07[_0x403aa4(0xa7)]+_0x3f3e07[_0x403aa4(0x183)],'gi');if(_0x3f3e07['TextStr']!==''&&_0x3f3e07[_0x403aa4(0x21f)]!==_0x403aa4(0x1d8))_0x3f3e07[_0x403aa4(0x2d0)]=new Function(_0x403aa4(0x106)+_0x3f3e07[_0x403aa4(0x21f)]['replace'](/\\/g,'\x1b')+'\x27');else{if('DSMtt'!==_0x403aa4(0x1a7))return _0x5a015e[_0x403aa4(0xe6)]['preConvertEscapeCharacters'][_0x403aa4(0x2aa)](this,_0xe4701f);else _0x3f3e07['textCodeResult']=_0x3f3e07['TextJS'];}}},Scene_Boot[_0xce50af(0xe6)][_0xce50af(0x137)]=function(){const _0x2f94e2=_0xce50af;for(const _0x5d90c8 of VisuMZ['MessageCore'][_0x2f94e2(0xa3)][_0x2f94e2(0x15a)]){_0x5d90c8[_0x2f94e2(0x364)]=new RegExp('\x5c['+_0x5d90c8[_0x2f94e2(0xa7)]+'\x5c]','gi');if(_0x5d90c8[_0x2f94e2(0x21f)]!==''&&_0x5d90c8['TextStr']!==_0x2f94e2(0x1d8))_0x5d90c8[_0x2f94e2(0x2d0)]=new Function('return\x20\x27'+_0x5d90c8[_0x2f94e2(0x21f)]['replace'](/\\/g,'\x1b')+'\x27');else{if(_0x2f94e2(0x168)!==_0x2f94e2(0x168)){const _0x5c6a0f=this[_0x2f94e2(0x1e3)](_0x14be17);if(_0x32edbc[_0x2f94e2(0x21e)])this['setColorLock'](_0x5c6a0f>0x0);}else _0x5d90c8[_0x2f94e2(0x2d0)]=_0x5d90c8[_0x2f94e2(0x36a)];}}},Scene_Boot[_0xce50af(0xe6)][_0xce50af(0x2f6)]=function(){const _0x252cd4=_0xce50af,_0x46bbb3=VisuMZ[_0x252cd4(0x329)][_0x252cd4(0xa3)]['AutoColor'];!VisuMZ[_0x252cd4(0x140)]&&(VisuMZ[_0x252cd4(0x329)]['AddAutoColor']($dataClasses,_0x46bbb3[_0x252cd4(0xdc)]),VisuMZ[_0x252cd4(0x329)][_0x252cd4(0x21b)]($dataSkills,_0x46bbb3[_0x252cd4(0x290)]),VisuMZ['MessageCore']['AddAutoColor']($dataItems,_0x46bbb3[_0x252cd4(0xc2)]),VisuMZ[_0x252cd4(0x329)][_0x252cd4(0x21b)]($dataWeapons,_0x46bbb3[_0x252cd4(0x365)]),VisuMZ[_0x252cd4(0x329)][_0x252cd4(0x21b)]($dataArmors,_0x46bbb3[_0x252cd4(0x18a)]),VisuMZ[_0x252cd4(0x329)][_0x252cd4(0x21b)]($dataEnemies,_0x46bbb3['Enemies']),VisuMZ[_0x252cd4(0x329)]['AddAutoColor']($dataStates,_0x46bbb3['States'])),VisuMZ['MessageCore'][_0x252cd4(0x155)]();},VisuMZ['MessageCore'][_0xce50af(0x324)]=['V','N','P','C','I','PX','PY','G','{','}','<','>','FS','\x5c','$','.','|','!','<','>','^',_0xce50af(0x1dd),'</B>',_0xce50af(0xa1),'</I>',_0xce50af(0x349),_0xce50af(0x296),_0xce50af(0x1e1),_0xce50af(0x265),_0xce50af(0x1bb),_0xce50af(0xef),_0xce50af(0x245),_0xce50af(0xd3),_0xce50af(0x152),_0xce50af(0xdf),_0xce50af(0x22e),_0xce50af(0x2bc),_0xce50af(0x24a),_0xce50af(0x261),_0xce50af(0x237),_0xce50af(0x257),_0xce50af(0x292),_0xce50af(0x139),_0xce50af(0x2a6),'HIDE',_0xce50af(0x1d2),_0xce50af(0x29c),_0xce50af(0x178),_0xce50af(0x223),_0xce50af(0x34a),_0xce50af(0xc9)],VisuMZ[_0xce50af(0x329)][_0xce50af(0x21b)]=function(_0x22bc04,_0x3d7088){const _0x375ad9=_0xce50af;if(_0x3d7088<=0x0)return;const _0x17276a=_0x22bc04;for(const _0x1b4566 of _0x17276a){if(!_0x1b4566)continue;VisuMZ[_0x375ad9(0x329)][_0x375ad9(0x12a)](_0x1b4566,_0x3d7088);}},VisuMZ[_0xce50af(0x329)]['CreateAutoColorRegExpLists']=function(){const _0x376a48=_0xce50af;VisuMZ['MessageCore'][_0x376a48(0x1e6)]=[];for(let _0x50c2dd=0x1;_0x50c2dd<=0x1f;_0x50c2dd++){const _0x784ccc=_0x376a48(0x258)[_0x376a48(0x186)](_0x50c2dd),_0x51a48c=VisuMZ[_0x376a48(0x329)][_0x376a48(0xa3)][_0x376a48(0x149)][_0x784ccc];_0x51a48c[_0x376a48(0x305)]((_0xe90b4a,_0x1b7779)=>{const _0x1f06bd=_0x376a48;if(!_0xe90b4a||!_0x1b7779)return-0x1;return _0x1b7779[_0x1f06bd(0x25b)]-_0xe90b4a[_0x1f06bd(0x25b)];}),this[_0x376a48(0x142)](_0x51a48c,_0x50c2dd);}},VisuMZ[_0xce50af(0x329)][_0xce50af(0x142)]=function(_0x245f0c,_0x1e6a44){const _0x36e2e1=_0xce50af;for(const _0x2b03a8 of _0x245f0c){if(_0x2b03a8[_0x36e2e1(0x25b)]<=0x0)continue;if(/^\d+$/[_0x36e2e1(0x355)](_0x2b03a8))continue;let _0x37cf4c=VisuMZ[_0x36e2e1(0x329)][_0x36e2e1(0x26d)](_0x2b03a8);if(_0x2b03a8[_0x36e2e1(0x188)](/[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B/g))var _0x1ba75c=new RegExp(_0x37cf4c,'i');else{if('HvJnW'==='ikWuR')return!![];else var _0x1ba75c=new RegExp('\x5cb'+_0x37cf4c+'\x5cb','g');}VisuMZ[_0x36e2e1(0x329)][_0x36e2e1(0x1e6)][_0x36e2e1(0x144)]([_0x1ba75c,_0x36e2e1(0x29f)[_0x36e2e1(0x186)](_0x1e6a44,_0x2b03a8)]);}},VisuMZ[_0xce50af(0x329)][_0xce50af(0x26d)]=function(_0x443b26){const _0x2368fc=_0xce50af;return _0x443b26=_0x443b26['replace'](/(\W)/gi,(_0x5b9f34,_0x58b2cc)=>'\x5c%1'[_0x2368fc(0x186)](_0x58b2cc)),_0x443b26;},VisuMZ[_0xce50af(0x329)][_0xce50af(0x16b)]=VisuMZ[_0xce50af(0x16b)],VisuMZ[_0xce50af(0x16b)]=function(_0x19cf21){const _0x3970c4=_0xce50af;VisuMZ[_0x3970c4(0x329)][_0x3970c4(0x16b)][_0x3970c4(0x2aa)](this,_0x19cf21);const _0x2dcd9a=VisuMZ['MessageCore']['Settings'][_0x3970c4(0x149)];VisuMZ[_0x3970c4(0x329)][_0x3970c4(0x12a)](_0x19cf21,_0x2dcd9a[_0x3970c4(0xdc)]);},VisuMZ[_0xce50af(0x329)][_0xce50af(0x361)]=VisuMZ['ParseSkillNotetags'],VisuMZ[_0xce50af(0x361)]=function(_0x371c28){const _0x5d476c=_0xce50af;VisuMZ[_0x5d476c(0x329)]['ParseSkillNotetags'][_0x5d476c(0x2aa)](this,_0x371c28);const _0x2f7461=VisuMZ[_0x5d476c(0x329)]['Settings'][_0x5d476c(0x149)];VisuMZ[_0x5d476c(0x329)][_0x5d476c(0x12a)](_0x371c28,_0x2f7461[_0x5d476c(0x290)]);},0x7,VisuMZ[_0xce50af(0x329)][_0xce50af(0xee)]=VisuMZ[_0xce50af(0xee)],VisuMZ[_0xce50af(0xee)]=function(_0x4eae63){const _0x1eb087=_0xce50af;VisuMZ[_0x1eb087(0x329)][_0x1eb087(0xee)][_0x1eb087(0x2aa)](this,_0x4eae63);const _0x49fb07=VisuMZ[_0x1eb087(0x329)][_0x1eb087(0xa3)][_0x1eb087(0x149)];VisuMZ[_0x1eb087(0x329)][_0x1eb087(0x12a)](_0x4eae63,_0x49fb07[_0x1eb087(0xc2)]);},VisuMZ[_0xce50af(0x329)][_0xce50af(0x24d)]=VisuMZ[_0xce50af(0x24d)],VisuMZ[_0xce50af(0x24d)]=function(_0x255226){const _0x36ad05=_0xce50af;VisuMZ[_0x36ad05(0x329)]['ParseWeaponNotetags'][_0x36ad05(0x2aa)](this,_0x255226);const _0x62375c=VisuMZ[_0x36ad05(0x329)][_0x36ad05(0xa3)][_0x36ad05(0x149)];VisuMZ['MessageCore']['CreateAutoColorFor'](_0x255226,_0x62375c[_0x36ad05(0x365)]);},VisuMZ[_0xce50af(0x329)][_0xce50af(0x13f)]=VisuMZ['ParseArmorNotetags'],VisuMZ[_0xce50af(0x13f)]=function(_0x451fa1){const _0x3928db=_0xce50af;VisuMZ[_0x3928db(0x329)][_0x3928db(0x13f)][_0x3928db(0x2aa)](this,_0x451fa1);const _0x6b9bd8=VisuMZ[_0x3928db(0x329)][_0x3928db(0xa3)][_0x3928db(0x149)];VisuMZ[_0x3928db(0x329)][_0x3928db(0x12a)](_0x451fa1,_0x6b9bd8['Armors']);},VisuMZ[_0xce50af(0x329)]['ParseEnemyNotetags']=VisuMZ['ParseEnemyNotetags'],VisuMZ['ParseEnemyNotetags']=function(_0x2deab3){const _0x4f8242=_0xce50af;VisuMZ[_0x4f8242(0x329)][_0x4f8242(0x16d)]['call'](this,_0x2deab3);const _0x3b9318=VisuMZ[_0x4f8242(0x329)][_0x4f8242(0xa3)][_0x4f8242(0x149)];VisuMZ[_0x4f8242(0x329)]['CreateAutoColorFor'](_0x2deab3,_0x3b9318[_0x4f8242(0x2f5)]);},VisuMZ[_0xce50af(0x329)][_0xce50af(0x27c)]=VisuMZ[_0xce50af(0x27c)],VisuMZ[_0xce50af(0x27c)]=function(_0x36b1d1){const _0x53f88c=_0xce50af;VisuMZ['MessageCore']['ParseStateNotetags']['call'](this,_0x36b1d1);const _0x5820e7=VisuMZ[_0x53f88c(0x329)]['Settings'][_0x53f88c(0x149)];VisuMZ['MessageCore'][_0x53f88c(0x12a)](_0x36b1d1,_0x5820e7[_0x53f88c(0x24f)]);},VisuMZ[_0xce50af(0x329)]['CreateAutoColorFor']=function(_0x27b067,_0x207399){const _0x4dd27e=_0xce50af;if(_0x207399<=0x0)return;const _0x2bc189=VisuMZ['MessageCore']['Settings'][_0x4dd27e(0x149)][_0x4dd27e(0x1e5)+_0x207399];let _0x1ee94f=_0x27b067['name'][_0x4dd27e(0x1fc)]();if(/^\d+$/[_0x4dd27e(0x355)](_0x1ee94f))return;if(VisuMZ['MessageCore']['AutoColorBypassList']['includes'](_0x1ee94f[_0x4dd27e(0xfc)]()))return;_0x1ee94f=_0x1ee94f[_0x4dd27e(0x2c0)](/\\I\[(\d+)\]/gi,''),_0x1ee94f=_0x1ee94f[_0x4dd27e(0x2c0)](/\x1bI\[(\d+)\]/gi,'');if(_0x1ee94f['length']<=0x0)return;if(_0x1ee94f[_0x4dd27e(0x188)](/-----/i))return;_0x2bc189[_0x4dd27e(0x144)](_0x1ee94f);},SceneManager['isSceneBattle']=function(){const _0x2a8412=_0xce50af;return this[_0x2a8412(0x127)]&&this[_0x2a8412(0x127)][_0x2a8412(0x363)]===Scene_Battle;},SceneManager[_0xce50af(0xce)]=function(){const _0xc9341=_0xce50af;return this[_0xc9341(0x127)]&&this[_0xc9341(0x127)][_0xc9341(0x363)]===Scene_Map;},VisuMZ['MessageCore'][_0xce50af(0x1f5)]=TextManager['message'],TextManager['message']=function(_0x5b2874){const _0x1a0be4=_0xce50af,_0x169a6f=[_0x1a0be4(0x2dc),_0x1a0be4(0x1ec),_0x1a0be4(0xe0),_0x1a0be4(0x32a),_0x1a0be4(0x113),_0x1a0be4(0x153),_0x1a0be4(0x1d0),_0x1a0be4(0x13e),'obtainGold',_0x1a0be4(0x2cc)];let _0x5b6f49=VisuMZ[_0x1a0be4(0x329)][_0x1a0be4(0x1f5)][_0x1a0be4(0x2aa)](this,_0x5b2874);return _0x169a6f[_0x1a0be4(0x215)](_0x5b2874)&&(_0x5b6f49=_0x1a0be4(0x2bc)+_0x5b6f49),_0x5b6f49;},ConfigManager[_0xce50af(0x2a2)]=VisuMZ[_0xce50af(0x329)][_0xce50af(0xa3)][_0xce50af(0x35a)]['Default'],VisuMZ['MessageCore'][_0xce50af(0x10d)]=ConfigManager[_0xce50af(0x283)],ConfigManager[_0xce50af(0x283)]=function(){const _0x44baf1=_0xce50af,_0x1e1368=VisuMZ['MessageCore'][_0x44baf1(0x10d)][_0x44baf1(0x2aa)](this);return _0x1e1368[_0x44baf1(0x2a2)]=this[_0x44baf1(0x2a2)],_0x1e1368;},VisuMZ[_0xce50af(0x329)]['ConfigManager_applyData']=ConfigManager[_0xce50af(0x187)],ConfigManager[_0xce50af(0x187)]=function(_0x38974c){const _0x6b069d=_0xce50af;VisuMZ[_0x6b069d(0x329)][_0x6b069d(0x1c2)][_0x6b069d(0x2aa)](this,_0x38974c);if(_0x6b069d(0x2a2)in _0x38974c)this[_0x6b069d(0x2a2)]=Number(_0x38974c['textSpeed'])[_0x6b069d(0x1bc)](0x1,0xb);else{if(_0x6b069d(0x302)===_0x6b069d(0x1f3)){const _0x33f7d7=_0x457a23[_0x6b069d(0x1ce)]();let _0x5f5e68=0x0;for(let _0x1e49d1 of _0x33f7d7){_0x1e49d1=this[_0x6b069d(0x316)](_0x1e49d1);if(this[_0x6b069d(0x235)](_0x1e49d1)){const _0x33aa2e=this[_0x6b069d(0x256)](_0x1e49d1),_0x368b30=this[_0x6b069d(0x339)](_0x1e49d1);this[_0x6b069d(0x22d)](_0x33aa2e,_0x6b069d(0x346),_0x368b30,_0x5f5e68);}_0x5f5e68++;}}else this[_0x6b069d(0x2a2)]=VisuMZ[_0x6b069d(0x329)]['Settings'][_0x6b069d(0x35a)]['Default'];}},TextManager[_0xce50af(0x212)]=VisuMZ['MessageCore'][_0xce50af(0xa3)][_0xce50af(0x35a)][_0xce50af(0x2cd)],TextManager[_0xce50af(0xd2)]=VisuMZ[_0xce50af(0x329)][_0xce50af(0xa3)]['TextSpeed'][_0xce50af(0x23f)],VisuMZ[_0xce50af(0x329)][_0xce50af(0x2a5)]=Game_System[_0xce50af(0xe6)][_0xce50af(0x33c)],Game_System[_0xce50af(0xe6)][_0xce50af(0x33c)]=function(){const _0x4f54ea=_0xce50af;VisuMZ[_0x4f54ea(0x329)][_0x4f54ea(0x2a5)]['call'](this),this[_0x4f54ea(0x18b)]();},Game_System['prototype'][_0xce50af(0x18b)]=function(){const _0x1c6d8a=_0xce50af,_0x5017a7=VisuMZ[_0x1c6d8a(0x329)][_0x1c6d8a(0xa3)][_0x1c6d8a(0x15d)],_0x404e14=VisuMZ[_0x1c6d8a(0x329)][_0x1c6d8a(0xa3)][_0x1c6d8a(0x1ff)];this['_MessageCoreSettings']={'messageRows':_0x5017a7[_0x1c6d8a(0xcb)],'messageWidth':_0x5017a7[_0x1c6d8a(0x14f)],'messageWordWrap':_0x404e14['MessageWindow'],'helpWordWrap':_0x404e14[_0x1c6d8a(0x161)],'choiceLineHeight':_0x5017a7[_0x1c6d8a(0x24b)],'choiceRows':_0x5017a7['ChoiceWindowMaxRows'],'choiceCols':_0x5017a7[_0x1c6d8a(0x37a)],'choiceTextAlign':_0x5017a7['ChoiceWindowTextAlign']},this[_0x1c6d8a(0x162)]===undefined&&(this['_messageOffsetX']=_0x5017a7[_0x1c6d8a(0x2cb)],this[_0x1c6d8a(0x294)]=_0x5017a7[_0x1c6d8a(0x2ce)]);},Game_System[_0xce50af(0xe6)][_0xce50af(0x273)]=function(){const _0x64618d=_0xce50af;if(this['_MessageCoreSettings']===undefined)this[_0x64618d(0x18b)]();if(this['_MessageCoreSettings'][_0x64618d(0x2c4)]===undefined)this[_0x64618d(0x18b)]();return this[_0x64618d(0xf0)][_0x64618d(0x2c4)];},Game_System[_0xce50af(0xe6)][_0xce50af(0x2fb)]=function(_0x38944d){const _0x4fc2d1=_0xce50af;if(this[_0x4fc2d1(0xf0)]===undefined)this[_0x4fc2d1(0x18b)]();if(this[_0x4fc2d1(0xf0)][_0x4fc2d1(0x2c4)]===undefined)this[_0x4fc2d1(0x18b)]();this['_MessageCoreSettings'][_0x4fc2d1(0x2c4)]=_0x38944d||0x1;},Game_System[_0xce50af(0xe6)][_0xce50af(0x20e)]=function(){const _0x1d108b=_0xce50af;if(this['_MessageCoreSettings']===undefined)this[_0x1d108b(0x18b)]();if(this['_MessageCoreSettings'][_0x1d108b(0x33b)]===undefined)this[_0x1d108b(0x18b)]();return this[_0x1d108b(0xf0)][_0x1d108b(0x33b)];},Game_System[_0xce50af(0xe6)][_0xce50af(0x260)]=function(_0x59890e){const _0x133579=_0xce50af;if(this[_0x133579(0xf0)]===undefined)this[_0x133579(0x18b)]();if(this['_MessageCoreSettings'][_0x133579(0x33b)]===undefined)this['initMessageCore']();_0x59890e=Math[_0x133579(0x1f0)](_0x59890e);if(_0x59890e%0x2!==0x0)_0x59890e+=0x1;this[_0x133579(0xf0)][_0x133579(0x33b)]=_0x59890e||0x2;},Game_System[_0xce50af(0xe6)][_0xce50af(0x121)]=function(){const _0xf411d4=_0xce50af;if(this[_0xf411d4(0xf0)]===undefined)this[_0xf411d4(0x18b)]();if(this['_MessageCoreSettings'][_0xf411d4(0x1cc)]===undefined)this[_0xf411d4(0x18b)]();return this[_0xf411d4(0xf0)]['messageWordWrap'];},Game_System[_0xce50af(0xe6)][_0xce50af(0x291)]=function(_0x5e91e9){const _0x452474=_0xce50af;if(this['_MessageCoreSettings']===undefined)this[_0x452474(0x18b)]();if(this[_0x452474(0xf0)][_0x452474(0x1cc)]===undefined)this['initMessageCore']();this[_0x452474(0xf0)]['messageWordWrap']=_0x5e91e9;},Game_System[_0xce50af(0xe6)][_0xce50af(0xfa)]=function(){const _0x52b9e1=_0xce50af;if(this[_0x52b9e1(0x162)]===undefined){const _0x45888c=VisuMZ[_0x52b9e1(0x329)][_0x52b9e1(0xa3)][_0x52b9e1(0x15d)];this[_0x52b9e1(0x162)]=_0x45888c['MsgWindowOffsetX'],this['_messageOffsetY']=_0x45888c['MsgWindowOffsetY'];}return{'x':this[_0x52b9e1(0x162)]||0x0,'y':this[_0x52b9e1(0x294)]||0x0};},Game_System[_0xce50af(0xe6)]['setMessageWindowXyOffsets']=function(_0xdcc50e,_0x998c50){const _0x3cab1a=_0xce50af;if(this[_0x3cab1a(0xf0)]===undefined)this[_0x3cab1a(0x18b)]();this[_0x3cab1a(0x162)]=_0xdcc50e,this[_0x3cab1a(0x294)]=_0x998c50;},Game_System[_0xce50af(0xe6)][_0xce50af(0x284)]=function(){const _0x1e3e25=_0xce50af;if(this[_0x1e3e25(0xf0)]===undefined)this[_0x1e3e25(0x18b)]();if(this[_0x1e3e25(0xf0)][_0x1e3e25(0x141)]===undefined)this['initMessageCore']();return this[_0x1e3e25(0xf0)]['helpWordWrap'];},Game_System[_0xce50af(0xe6)][_0xce50af(0x206)]=function(_0x4c226f){const _0x283fbe=_0xce50af;if(this[_0x283fbe(0xf0)]===undefined)this[_0x283fbe(0x18b)]();if(this['_MessageCoreSettings'][_0x283fbe(0x141)]===undefined)this[_0x283fbe(0x18b)]();this['_MessageCoreSettings']['helpWordWrap']=_0x4c226f;},Game_System[_0xce50af(0xe6)][_0xce50af(0xbf)]=function(){const _0x21e6f4=_0xce50af;if(this['_MessageCoreSettings']===undefined)this[_0x21e6f4(0x18b)]();if(this[_0x21e6f4(0xf0)][_0x21e6f4(0x20b)]===undefined)this[_0x21e6f4(0x18b)]();return this[_0x21e6f4(0xf0)]['choiceLineHeight'];},Game_System[_0xce50af(0xe6)]['setChoiceListLineHeight']=function(_0x44d724){const _0x440178=_0xce50af;if(this[_0x440178(0xf0)]===undefined)this[_0x440178(0x18b)]();if(this[_0x440178(0xf0)][_0x440178(0x20b)]===undefined)this[_0x440178(0x18b)]();this['_MessageCoreSettings']['choiceLineHeight']=_0x44d724||0x1;},Game_System[_0xce50af(0xe6)]['getChoiceListMaxRows']=function(){const _0xac39d6=_0xce50af;if(this[_0xac39d6(0xf0)]===undefined)this[_0xac39d6(0x18b)]();if(this[_0xac39d6(0xf0)][_0xac39d6(0x2dd)]===undefined)this[_0xac39d6(0x18b)]();return this[_0xac39d6(0xf0)][_0xac39d6(0x2dd)];},Game_System[_0xce50af(0xe6)]['setChoiceListMaxRows']=function(_0x575d65){const _0x33a07a=_0xce50af;if(this[_0x33a07a(0xf0)]===undefined)this[_0x33a07a(0x18b)]();if(this['_MessageCoreSettings'][_0x33a07a(0x2dd)]===undefined)this[_0x33a07a(0x18b)]();this[_0x33a07a(0xf0)][_0x33a07a(0x2dd)]=_0x575d65||0x1;},Game_System['prototype'][_0xce50af(0x208)]=function(){const _0x5adb01=_0xce50af;if(this['_MessageCoreSettings']===undefined)this[_0x5adb01(0x18b)]();if(this[_0x5adb01(0xf0)][_0x5adb01(0x1c5)]===undefined)this[_0x5adb01(0x18b)]();return this[_0x5adb01(0xf0)][_0x5adb01(0x1c5)];},Game_System[_0xce50af(0xe6)][_0xce50af(0xcc)]=function(_0x3cd8db){const _0x48b123=_0xce50af;if(this[_0x48b123(0xf0)]===undefined)this[_0x48b123(0x18b)]();if(this[_0x48b123(0xf0)][_0x48b123(0x1c5)]===undefined)this['initMessageCore']();this[_0x48b123(0xf0)][_0x48b123(0x1c5)]=_0x3cd8db||0x1;},Game_System['prototype'][_0xce50af(0x1e0)]=function(){const _0x1c0915=_0xce50af;if(this[_0x1c0915(0xf0)]===undefined)this['initMessageCore']();if(this['_MessageCoreSettings'][_0x1c0915(0x239)]===undefined)this[_0x1c0915(0x18b)]();return this['_MessageCoreSettings'][_0x1c0915(0x239)];},Game_System[_0xce50af(0xe6)][_0xce50af(0x354)]=function(_0x388722){const _0x33a567=_0xce50af;if(this['_MessageCoreSettings']===undefined)this[_0x33a567(0x18b)]();if(this['_MessageCoreSettings'][_0x33a567(0x239)]===undefined)this[_0x33a567(0x18b)]();this[_0x33a567(0xf0)][_0x33a567(0x239)]=_0x388722[_0x33a567(0x18e)]();},VisuMZ[_0xce50af(0x329)]['Game_Screen_clearPictures']=Game_Screen['prototype']['clearPictures'],Game_Screen[_0xce50af(0xe6)][_0xce50af(0x25e)]=function(){const _0x26b752=_0xce50af;VisuMZ[_0x26b752(0x329)]['Game_Screen_clearPictures'][_0x26b752(0x2aa)](this),this[_0x26b752(0xf7)]();},Game_Screen['prototype'][_0xce50af(0xf7)]=function(){const _0x1e1dd8=_0xce50af;this[_0x1e1dd8(0x189)]=[],this[_0x1e1dd8(0x182)]=[];},Game_Screen[_0xce50af(0xe6)][_0xce50af(0xb0)]=function(_0x166f95){const _0x211f22=_0xce50af;if(this[_0x211f22(0x189)]===undefined)this[_0x211f22(0xf7)]();const _0x58f32d=this[_0x211f22(0xec)](_0x166f95);return this[_0x211f22(0x189)][_0x58f32d]=this[_0x211f22(0x189)][_0x58f32d]||{},this[_0x211f22(0x189)][_0x58f32d];},Game_Screen['prototype']['getPictureText']=function(_0x436777,_0x3b2279){const _0x242310=_0xce50af;return _0x3b2279=_0x3b2279[_0x242310(0x18e)]()[_0x242310(0x1fc)](),this[_0x242310(0xb0)](_0x436777)[_0x3b2279]||'';},Game_Screen[_0xce50af(0xe6)]['setPictureText']=function(_0x51ad52,_0x123a01,_0x2f86cc){const _0x663461=_0xce50af;_0x2f86cc=_0x2f86cc[_0x663461(0x18e)]()['trim'](),this['getPictureTextData'](_0x51ad52)[_0x2f86cc]=_0x123a01||'';},Game_Screen[_0xce50af(0xe6)][_0xce50af(0x1a8)]=function(_0x5ce9f9){const _0x23c3a0=_0xce50af;if(this[_0x23c3a0(0x189)]===undefined)this['clearAllPictureTexts']();const _0x17b94e=this[_0x23c3a0(0xec)](_0x5ce9f9);this[_0x23c3a0(0x189)][_0x17b94e]=null;},Game_Screen['prototype'][_0xce50af(0x34b)]=function(_0x15835b){const _0x4e26f6=_0xce50af;if(this[_0x4e26f6(0x189)]===undefined)this['clearAllPictureTexts']();const _0x96265=this[_0x4e26f6(0xec)](_0x15835b);return this['_pictureTextBuffer'][_0x96265]||0x0;},Game_Screen['prototype'][_0xce50af(0x238)]=function(_0x13e762,_0x5d8dfd){const _0x307238=_0xce50af;if(this['_pictureText']===undefined)this['clearAllPictureTexts']();const _0x2506a7=this[_0x307238(0xec)](_0x13e762);this[_0x307238(0x182)][_0x2506a7]=Math[_0x307238(0x288)](0x0,_0x5d8dfd);},Game_Screen[_0xce50af(0xe6)][_0xce50af(0x221)]=function(_0x31ac3c){const _0x2ad7ea=_0xce50af;if(this[_0x2ad7ea(0x189)]===undefined)this[_0x2ad7ea(0xf7)]();const _0x351581=this['realPictureId'](_0x31ac3c);this[_0x2ad7ea(0x182)][_0x351581]=undefined;},VisuMZ['MessageCore'][_0xce50af(0x1ae)]=Game_Screen[_0xce50af(0xe6)][_0xce50af(0xd1)],Game_Screen['prototype'][_0xce50af(0xd1)]=function(_0x2d4317){const _0x17f6cf=_0xce50af;VisuMZ['MessageCore'][_0x17f6cf(0x1ae)][_0x17f6cf(0x2aa)](this,_0x2d4317),this['eraseAllPictureTexts'](_0x2d4317),this[_0x17f6cf(0x221)](_0x2d4317);},VisuMZ['MessageCore'][_0xce50af(0x2f4)]=Game_Party['prototype']['initialize'],Game_Party['prototype'][_0xce50af(0x33c)]=function(){const _0x371de9=_0xce50af;VisuMZ[_0x371de9(0x329)][_0x371de9(0x2f4)][_0x371de9(0x2aa)](this),this[_0x371de9(0x18b)]();},Game_Party[_0xce50af(0xe6)][_0xce50af(0x18b)]=function(){const _0x566a5d=_0xce50af;this[_0x566a5d(0x262)]={'type':0x0,'id':0x0,'quantity':0x0};},Game_Party[_0xce50af(0xe6)][_0xce50af(0x14c)]=function(){const _0x233022=_0xce50af;if(this[_0x233022(0x262)]===undefined)this[_0x233022(0x18b)]();return this['_lastGainedItemData'];},Game_Party['prototype']['setLastGainedItemData']=function(_0x33f3c0,_0x47434c){const _0x5e05c9=_0xce50af;if(this[_0x5e05c9(0x262)]===undefined)this['initMessageCore']();if(!_0x33f3c0)return;if(DataManager[_0x5e05c9(0x14a)](_0x33f3c0))_0x5e05c9(0x2bb)!==_0x5e05c9(0x2bb)?this[_0x5e05c9(0x2fd)]>0x0&&(this[_0x5e05c9(0x1d6)]()&&(this['x']=this['applyMoveEasing'](this['x'],this['_moveTargetX']),this['y']=this[_0x5e05c9(0x1b2)](this['y'],this[_0x5e05c9(0x351)]),this[_0x5e05c9(0x321)]=this['applyMoveEasing'](this[_0x5e05c9(0x321)],this[_0x5e05c9(0x2f9)]),this[_0x5e05c9(0x15e)]=this[_0x5e05c9(0x1b2)](this[_0x5e05c9(0x15e)],this['_moveTargetHeight']),this['clampPlacementPosition']()),this[_0x5e05c9(0x2fd)]--):this[_0x5e05c9(0x262)][_0x5e05c9(0xbe)]=0x0;else{if(DataManager['isWeapon'](_0x33f3c0))this['_lastGainedItemData']['type']=0x1;else DataManager[_0x5e05c9(0x15c)](_0x33f3c0)&&(this[_0x5e05c9(0x262)]['type']=0x2);}this[_0x5e05c9(0x262)]['id']=_0x33f3c0['id'],this[_0x5e05c9(0x262)][_0x5e05c9(0x25a)]=_0x47434c;},VisuMZ[_0xce50af(0x329)][_0xce50af(0x154)]=Game_Party['prototype'][_0xce50af(0xe2)],Game_Party['prototype']['gainItem']=function(_0x320ccb,_0x3b2e7c,_0x1606d0){const _0xede7ef=_0xce50af;VisuMZ[_0xede7ef(0x329)][_0xede7ef(0x154)][_0xede7ef(0x2aa)](this,_0x320ccb,_0x3b2e7c,_0x1606d0),_0x3b2e7c>0x0&&this['setLastGainedItemData'](_0x320ccb,_0x3b2e7c);},VisuMZ[_0xce50af(0x329)][_0xce50af(0x360)]=Game_Map[_0xce50af(0xe6)][_0xce50af(0x33c)],Game_Map[_0xce50af(0xe6)]['initialize']=function(){const _0x2ffe27=_0xce50af;VisuMZ[_0x2ffe27(0x329)]['Game_Map_initialize'][_0x2ffe27(0x2aa)](this),this['_messageCommonEvents']=[];},VisuMZ[_0xce50af(0x329)]['Game_Map_setupEvents']=Game_Map[_0xce50af(0xe6)][_0xce50af(0xf6)],Game_Map['prototype'][_0xce50af(0xf6)]=function(){const _0x531091=_0xce50af;VisuMZ[_0x531091(0x329)]['Game_Map_setupEvents'][_0x531091(0x2aa)](this),this[_0x531091(0x340)]=[];},VisuMZ[_0xce50af(0x329)]['Game_Map_updateEvents']=Game_Map[_0xce50af(0xe6)][_0xce50af(0x19f)],Game_Map[_0xce50af(0xe6)][_0xce50af(0x19f)]=function(){const _0x20a0d8=_0xce50af;VisuMZ[_0x20a0d8(0x329)]['Game_Map_updateEvents'][_0x20a0d8(0x2aa)](this),this[_0x20a0d8(0x33a)]();},Game_Map[_0xce50af(0xe6)][_0xce50af(0x229)]=function(_0x49c562){const _0xd6e1b4=_0xce50af;if(!$dataCommonEvents[_0x49c562])return;this['_messageCommonEvents']=this[_0xd6e1b4(0x340)]||[];const _0x1b0c54=this[_0xd6e1b4(0x151)][_0xd6e1b4(0x1a4)],_0x15a022=new Game_MessageCommonEvent(_0x49c562,_0x1b0c54);this[_0xd6e1b4(0x340)][_0xd6e1b4(0x144)](_0x15a022);},Game_Map['prototype']['updateMessageCommonEvents']=function(){const _0x274e5a=_0xce50af;this[_0x274e5a(0x340)]=this['_messageCommonEvents']||[];for(const _0x226ba3 of this[_0x274e5a(0x340)]){if(!_0x226ba3[_0x274e5a(0x151)]){if('Ocrkp'===_0x274e5a(0x22f))return![];else this[_0x274e5a(0x340)][_0x274e5a(0x228)](_0x226ba3);}else _0x226ba3[_0x274e5a(0x2a7)]();}},Game_Interpreter[_0xce50af(0xe6)][_0xce50af(0x30a)]=function(_0x2e3c36){const _0x15a0e7=_0xce50af;if($gameMessage[_0x15a0e7(0x218)]())return![];return this[_0x15a0e7(0xbd)](_0x2e3c36),this[_0x15a0e7(0xb2)](_0x2e3c36),this['prepareShowTextFollowups'](_0x2e3c36),this[_0x15a0e7(0x27f)]('message'),!![];},Game_Interpreter[_0xce50af(0xe6)][_0xce50af(0xbd)]=function(_0x4f68f4){const _0x3ac6da=_0xce50af;$gameMessage[_0x3ac6da(0x2ed)](_0x4f68f4[0x0],_0x4f68f4[0x1]),$gameMessage['setBackground'](_0x4f68f4[0x2]),$gameMessage[_0x3ac6da(0x271)](_0x4f68f4[0x3]),$gameMessage[_0x3ac6da(0x1bf)](_0x4f68f4[0x4]);},Game_Interpreter['prototype'][_0xce50af(0xb2)]=function(_0x115145){const _0xe60201=_0xce50af;while(this[_0xe60201(0x10e)]()){this[_0xe60201(0x34d)]++;if(this['currentCommand']()[_0xe60201(0x16a)]===0x191){let _0x1047b0=this[_0xe60201(0x107)]()[_0xe60201(0x315)][0x0];_0x1047b0=VisuMZ[_0xe60201(0x329)]['ParseAddedText'](_0x1047b0),$gameMessage[_0xe60201(0x22b)](_0x1047b0);}if(this[_0xe60201(0x1c9)]()){if(_0xe60201(0x1a1)!==_0xe60201(0x23d))break;else this['x']=this[_0xe60201(0x1b2)](this['x'],this[_0xe60201(0x25f)]),this['y']=this[_0xe60201(0x1b2)](this['y'],this[_0xe60201(0x351)]),this[_0xe60201(0x321)]=this['applyMoveEasing'](this['width'],this['_moveTargetWidth']),this[_0xe60201(0x15e)]=this['applyMoveEasing'](this[_0xe60201(0x15e)],this[_0xe60201(0x31c)]),this[_0xe60201(0x36d)]();}}},Game_Interpreter[_0xce50af(0xe6)]['isContinuePrepareShowTextCommands']=function(){const _0xc8700f=_0xce50af;return this['nextEventCode']()===0x65&&$gameSystem['getMessageWindowRows']()>0x4?!![]:this[_0xc8700f(0x1f9)]()===0x191;},VisuMZ[_0xce50af(0x329)][_0xce50af(0x24c)]=function(_0x3a2edc){return _0x3a2edc=_0x3a2edc['replace'](/<(?:NEXT PAGE|NEXTPAGE)>/gi,''),_0x3a2edc;},Game_Interpreter[_0xce50af(0xe6)][_0xce50af(0x1c9)]=function(){const _0x32280b=_0xce50af;if(this['currentCommand']()&&this[_0x32280b(0x107)]()[_0x32280b(0x315)][0x0][_0x32280b(0x188)](/<(?:NEXT PAGE|NEXTPAGE)>/gi))return!![];return $gameMessage[_0x32280b(0x2a0)][_0x32280b(0x25b)]>=$gameSystem[_0x32280b(0x273)]()&&this[_0x32280b(0x1f9)]()!==0x191;},Game_Interpreter[_0xce50af(0xe6)]['prepareShowTextFollowups']=function(_0x470b62){const _0x42d644=_0xce50af;switch(this[_0x42d644(0x1f9)]()){case 0x66:this[_0x42d644(0x34d)]++,this[_0x42d644(0x2ff)](this[_0x42d644(0x107)]()[_0x42d644(0x315)]);break;case 0x67:this[_0x42d644(0x34d)]++,this[_0x42d644(0x114)](this['currentCommand']()['parameters']);break;case 0x68:this[_0x42d644(0x34d)]++,this['setupItemChoice'](this[_0x42d644(0x107)]()[_0x42d644(0x315)]);break;}},VisuMZ[_0xce50af(0x329)][_0xce50af(0x248)]=Game_Interpreter[_0xce50af(0xe6)][_0xce50af(0x2ff)],Game_Interpreter[_0xce50af(0xe6)]['setupChoices']=function(_0x3878bc){const _0x25130c=_0xce50af;_0x3878bc=this['addContinuousShowChoices'](),VisuMZ['MessageCore'][_0x25130c(0x248)][_0x25130c(0x2aa)](this,_0x3878bc);},Game_Interpreter[_0xce50af(0xe6)][_0xce50af(0x2ea)]=function(){const _0x4809c7=_0xce50af,_0x396fea=this['_index'],_0x5e27ba=[];let _0x4a1995=0x0;this[_0x4809c7(0x34d)]++;while(this[_0x4809c7(0x34d)]<this[_0x4809c7(0x213)]['length']){if(this[_0x4809c7(0x107)]()[_0x4809c7(0x9e)]===this[_0x4809c7(0xff)]){if(_0x4809c7(0x35f)===_0x4809c7(0x12c)){const _0x8db2b0=_0x332299['MessageCore']['Settings'][_0x4809c7(0x15d)],_0x4b3b2a=_0x4896cf[_0x4809c7(0x329)]['Settings'][_0x4809c7(0x1ff)];this[_0x4809c7(0xf0)]={'messageRows':_0x8db2b0['MessageRows'],'messageWidth':_0x8db2b0[_0x4809c7(0x14f)],'messageWordWrap':_0x4b3b2a[_0x4809c7(0x28f)],'helpWordWrap':_0x4b3b2a['HelpWindow'],'choiceLineHeight':_0x8db2b0[_0x4809c7(0x24b)],'choiceRows':_0x8db2b0[_0x4809c7(0x243)],'choiceCols':_0x8db2b0['ChoiceWindowMaxCols'],'choiceTextAlign':_0x8db2b0[_0x4809c7(0x2e5)]},this[_0x4809c7(0x162)]===_0x1f5dd8&&(this[_0x4809c7(0x162)]=_0x8db2b0[_0x4809c7(0x2cb)],this[_0x4809c7(0x294)]=_0x8db2b0[_0x4809c7(0x2ce)]);}else{if(this['currentCommand']()[_0x4809c7(0x16a)]===0x194&&this['nextEventCode']()!==0x66)break;else{if(this['currentCommand']()[_0x4809c7(0x16a)]===0x66)this[_0x4809c7(0x117)](_0x4a1995,this[_0x4809c7(0x107)](),_0x396fea),this['_index']-=0x2;else this[_0x4809c7(0x107)]()['code']===0x192&&(this['currentCommand']()['parameters'][0x0]=_0x4a1995,_0x4a1995++);}}}this[_0x4809c7(0x34d)]++;}return this[_0x4809c7(0x34d)]=_0x396fea,this[_0x4809c7(0x107)]()[_0x4809c7(0x315)];},Game_Interpreter[_0xce50af(0xe6)][_0xce50af(0x117)]=function(_0xb7b958,_0x489de8,_0x4d538a){const _0x4a7a12=_0xce50af;this[_0x4a7a12(0x32f)](_0xb7b958,_0x489de8,_0x4d538a),this[_0x4a7a12(0x17f)](_0xb7b958,_0x489de8,_0x4d538a),this[_0x4a7a12(0x1c7)](_0x489de8,_0x4d538a);},Game_Interpreter[_0xce50af(0xe6)][_0xce50af(0x32f)]=function(_0x41bebe,_0x34ad82,_0x21c3b1){const _0xae7eff=_0xce50af;if(_0x34ad82['parameters'][0x2]<0x0)return;const _0x53d75b=_0x34ad82[_0xae7eff(0x315)][0x2]+_0x41bebe;this['_list'][_0x21c3b1][_0xae7eff(0x315)][0x2]=_0x53d75b;},Game_Interpreter[_0xce50af(0xe6)][_0xce50af(0x17f)]=function(_0x3917bd,_0x2efe6c,_0x39cd17){const _0x3a2973=_0xce50af;if(_0x2efe6c[_0x3a2973(0x315)][0x1]>=0x0){var _0xb770aa=_0x2efe6c['parameters'][0x1]+_0x3917bd;this['_list'][_0x39cd17][_0x3a2973(0x315)][0x1]=_0xb770aa;}else _0x2efe6c[_0x3a2973(0x315)][0x1]===-0x2&&(this[_0x3a2973(0x213)][_0x39cd17]['parameters'][0x1]=_0x2efe6c[_0x3a2973(0x315)][0x1]);},Game_Interpreter['prototype']['addExtraShowChoices']=function(_0x57cda5,_0x4a0020){const _0x486403=_0xce50af;for(const _0x1eb4bc of _0x57cda5['parameters'][0x0]){this['_list'][_0x4a0020][_0x486403(0x315)][0x0]['push'](_0x1eb4bc);}this[_0x486403(0x213)]['splice'](this[_0x486403(0x34d)]-0x1,0x2);};function Game_MessageCommonEvent(){const _0x51015d=_0xce50af;this[_0x51015d(0x33c)](...arguments);}function _0x5e83(){const _0x5cc73d=['Window_Message_terminateMessage','DISABLE','FhxLj','easeIn','\x1bC[%1]%2\x1bPREVCOLOR[0]','_texts','gqbfl','textSpeed','itemPadding','MXKFT','Game_System_initialize','SHOW','update','clearFlags','TiyMk','call','NameBoxWindowOffsetY','moveTo','Game_Screen_clearPictures','gohCy','CgPvL','Window_Message_processEscapeCharacter','processEscapeCharacter','outlineWidth','getTextAlignment','processCustomWait','FRDsb','ksEKl','Window_Base_changeTextColor','ieUMi','convertBaseEscapeCharacters','COLORLOCK','MsOcE','</WORDWRAP>','convertFontSettingsEscapeCharacters','BOLD','oExYn','replace','changeOutlineColor','createContents','updateAutoSizePosition','messageRows','obtainEscapeString','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','selectDefault','lRieg','changeTextSpeed','fontSize','MsgWindowOffsetX','obtainItem','Name','MsgWindowOffsetY','addChildAt','textCodeResult','lowerright','ysSke','VvHOQ','ActionJS','updateBitmap','convertTextMacros','Window_Message_isTriggered','SortObjectByKeyLength','battleTargetName','members','OczUY','levelUp','choiceRows','bPsBa','map\x20party','setColorLock','TxkXh','inBattle','_pictureTextWindow','\x1bWrapBreak[0]','ChoiceWindowTextAlign','processControlCharacter','exit','actor','_messageWindow','addContinuousShowChoices','UtBkF','FastForwardKey','setFaceImage','ndnxr','AddOption','processWrapBreak','makeDeepCopy','textSizeEx','TightWrap','Game_Party_initialize','Enemies','process_VisuMZ_MessageCore_AutoColor','synchronizeNameBox','FIdtS','_moveTargetWidth','startY','setMessageWindowRows','_textAlignment','_moveDuration','clearActorNameAutoColor','setupChoices','\x1bTEXTALIGNMENT','startX','bVjCK','Window_NameBox_updatePlacement','MaxCols','sort','fVsUX','version','createPictureText','Window_Options_isVolumeSymbol','command101','ARRAYEVAL','contentsBack','none','isPressed','maxCols','battleUserName','setChoiceListMaxRows','messagePositionReset','resetFontSettings','_commonEventId','parameters','convertChoiceMacros','drawItem','resetRect','inputtingAction','processCommonEvent','makeCommandList','_moveTargetHeight','isRTL','Sprite_Picture_updateBitmap','paintOpacity','EVAL','width','processFontChangeItalic','textColor','AutoColorBypassList','FontBiggerCap','maxLines','isSceneBattle','currentExt','MessageCore','surprise','WqmrD','faceWidth','partyMemberName','processAutoColorWords','adjustShowChoiceDefault','processAutoSize','1661257fnalfb','ConvertParams','postConvertEscapeCharacters','newPage','Sprite_Picture_update','process_VisuMZ_MessageCore_TextCodes_Action','processActorNameAutoColorChanges','updatePictureText','isChoiceEnabled','updateMessageCommonEvents','messageWidth','initialize','returnPreservedFontSettings','drawBackPicture','updatePlacement','_messageCommonEvents','Window_Base_processNewLine','EonMJ','\x1bTEXTALIGNMENT[1]','_subject','registerActorNameAutoColorChanges','choice','VWCtm','choicePositionType','<LEFT>','ALL','getPictureTextBuffer','pQAZB','_index','LineBreakSpace','processColorLock','true','_moveTargetY','isAutoColorAffected','wlKrv','setChoiceListTextAlign','test','FontSmallerCap','_pictureTextHeight','_textMacroFound','986447dWuJgg','TextSpeed','DefaultOutlineWidth','updateDimensions','battle\x20actor','Window_Message_clearFlags','JvblE','Game_Map_initialize','ParseSkillNotetags','ARRAYNUM','constructor','textCodeCheck','Weapons','outputWidth','NUM','item','MyTcN','TextJS','registerResetRect','AXfvB','clampPlacementPosition','anchor','registerSelfEvent','_autoPosRegExp','\x1bi[%1]%2','updateNameBoxMove','attachPictureText','addedHeight','calcMoveEasing','HSnGa','Window_NameBox_refresh','textWidth','setWordWrap','ChoiceWindowMaxCols','_targets','indent','addGeneralOptions','anyPictureTextChanges','<I>','resetTextColor','Settings','min','_macroBypassWordWrap','\x1bBOLD[0]','Match','mainFontFace','processTextAlignmentChange','RXnLI','setup','exuMO','_textColorStack','exec','convertBackslashCharacters','getPictureTextData','FUNC','addContinuousShowTextCommands','maxCommands','follower','smTzj','hQSUu','_forcedPosition','fontBold','Width','TextCodeReplace','vtVAM','terminateMessage','prepareShowTextCommand','type','getChoiceListLineHeight','TEXTALIGNMENT','processFontChangeBold','Items','_cancelButton','wKrln','rtl','\x1bCOLORLOCK[0]','lowerleft','getChoiceListMaxRows','ANY','TGAOU','MessageRows','setChoiceListMaxColumns','innerHeight','isSceneMap','innerWidth','floor','erasePicture','instantTextSpeed','</COLORLOCK>','ldonm','rplIn','messageCoreWindowX','84XulyEw','onProcessCharacter','ARRAYFUNC','processDrawCenteredPicture','muXGb','Classes','registerCommand','currencyUnit',')))','preemptive','cAeOG','gainItem','bzZbC','_autoPositionTarget','\x1bTEXTALIGNMENT[3]','prototype','GQzxK','postFlushTextState','convertMessageCoreEscapeReplacements','EndPadding','Window_ChoiceList_updatePlacement','realPictureId','rbbYL','ParseItemNotetags','</RIGHT>','_MessageCoreSettings','upperright','Padding','Window_Base_processEscapeCharacter','textSizeExWordWrap','_moveEasingType','setupEvents','clearAllPictureTexts','PictureIDs','maxChoiceWidth','getMessageWindowXyOffsets','_wholeMoveDuration','toUpperCase','open','textSizeExTextAlignment','_indent','Window_Message_updatePlacement','RelativePXPY','getPictureText','convertTextAlignmentEscapeCharacters','setTextAlignment','156925TUajua','return\x20\x27','currentCommand','changePaintOpacity','Window_Base_processControlCharacter','Yfbnh','scale','KAOVa','ConfigManager_makeData','isContinuePrepareShowTextCommands','addMessageCoreCommands','_pictureTextWidth','refresh','_autoSizeCheck','victory','setupNumInput','fontItalic','11458359WtFzGg','adjustShowChoiceExtension','isColorLocked','124204pRofMh','hMaDa','slice','event','_centerMessageWindow','SQVyL','GnbvQ','VvOza','isMessageWindowWordWrap','STR','\x1bBOLD[1]','StretchDimmedBg','stretchDimmerSprite','TextAlign','_scene','windowWidth','<%1>','CreateAutoColorFor','_colorLock','HcaMd','prepareForcedPositionEscapeCharacters','AjGip','24ojiLpC','shift','windowX','QMhVC','findTargetSprite','setChoiceListLineHeight','normalColor','actorName','process_VisuMZ_MessageCore_TextMacros','outLineColor','WAIT','battleActionName','lineHeight','flushTextState','_positionType','obtainExp','ParseArmorNotetags','ParseAllNotetags','helpWordWrap','CreateAutoColorRegExpListEntries','updateAutoPosition','push','_pictureId','fLGIG','preConvertEscapeCharacters','fkvux','AutoColor','isItem','_messagePositionReset','getLastGainedItemData','KYUCw','VisuMZ_0_CoreEngine','MessageWidth','\x1bITALIC[0]','_interpreter','(((','defeat','Game_Party_gainItem','CreateAutoColorRegExpLists','itemHeight','VVLLW','MaxRows','followers','TextMacros','loZnF','isArmor','General','height','\x1bCOLORLOCK[1]','DjWIz','HelpWindow','_messageOffsetX','PictureTextErase','isTriggered','drawBackCenteredPicture','easeOut','createTextState','Wgrnp','isVolumeSymbol','code','ParseClassNotetags','changeValue','ParseEnemyNotetags','commandName','TnhrR','Window_Message_synchronizeNameBox','Scene_Options_maxCommands','mainFontSize','PREVCOLOR','easeInOut','onDatabaseLoaded','outlineColor','fKbZN','SWITCH','round','addWrapBreakAfterPunctuation','convertVariableEscapeCharacters','defaultColor','Window_Message_newPage','placeCancelButton','adjustShowChoiceCancel','_target','split','_pictureTextBuffer','Type','_showFast','messageWindowRect','format','applyData','match','_pictureText','Armors','initMessageCore','isInputting','setMessageWindowXyOffsets','toLowerCase','startWait','text','processTextAlignmentX','statusText','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','processPreviousColor','anchorPictureText','openness','STRUCT','parse','50qLYLbG','indexOf','battle\x20enemy','processFsTextCode','resetWordWrap','AdjustRect','updateEvents','54KfZCrk','OKRVO','convertNewPageTextStateMacros','boxHeight','_eventId','_dimmerSprite','center','DSMtt','eraseAllPictureTexts','commandSymbol','resizePictureText','20862eQinJm','_autoSizeRegexp','bXADD','Game_Screen_erasePicture','join','convertMessageCoreEscapeActions','_nameBoxWindow','applyMoveEasing','uUOUv','processAutoPosition','fGryu','false','xpZjU','\x1bTEXTALIGNMENT[0]','makeFontBigger','Window_Options_statusText','<RIGHT>','clamp','map\x20actor','_resetRect','setSpeakerName','drawPictureText','status','ConfigManager_applyData','\x1bITALIC[1]','activate','choiceCols','tnvKi','addExtraShowChoices','KUFcs','isBreakShowTextCommands','nHFjX','padding','messageWordWrap','updateForcedPlacement','choices','applyDatabaseAutoColor','escapeStart','BHrXY','ENABLE','WRAPBREAK','boxWidth','isWordWrapEnabled','canMove','faceName','Undefined','ZolTP','databaseObjectName','updateOffsetPosition','78BZfEGY','<B>','pbQAP','isRunning','getChoiceListTextAlign','<CENTER>','maxFontSizeInLine','obtainEscapeParam','updateMove','TextColor','AutoColorRegExp','textSpeedStatusText','CYcWa','contents','GeTWW','itemRectWithPadding','emerge','TFOSe','leTAi','qfeVi','ceil','calcWindowHeight','getPreservedFontSettings','VSRhf','processPyTextCode','TextManager_message','742840xBlwUO','ARRAYSTRUCT','splice','nextEventCode','hpWiL','UjOvO','trim','updateRelativePosition','OffsetY','WordWrap','processStoredAutoColorChanges','NameBoxWindowOffsetX','preFlushTextState','MoTkS','FontChangeValue','description','setHelpWindowWordWrap','_action','getChoiceListMaxColumns','Actors','tRgOs','choiceLineHeight','addedWidth','prepareWordWrapEscapeCharacters','getMessageWindowWidth','kNOMA','iconIndex','Window_Help_refresh','messageCoreTextSpeed','_list','value','includes','Rows','TdcbI','isBusy','KjLjR','initTextAlignement','AddAutoColor','updateBackground','refreshDimmerBitmap','drawing','TextStr','Window_ChoiceList_windowX','erasePictureTextBuffer','substring','SWITCHES','processCharacter','Window_Base_textSizeEx','processDrawPicture','prepareAutoSizeEscapeCharacters','remove','addMessageCommonEvent','callOkHandler','add','ROlsJ','addCommand','<WORDWRAP>','ptHkg','default','processNewLine','outputHeight','contentsHeight','changeTextColor','isChoiceVisible','start','PICTURE','setPictureTextBuffer','choiceTextAlign','clear','setPictureText','getConfigValue','uFvMk','JSON','Instant','Scene_Boot_onDatabaseLoaded','list','updateXyOffsets','ChoiceWindowMaxRows','visible','<COLORLOCK>','TextCodeActions','_pictureTextSprite','Game_Interpreter_setupChoices','onNewPageMessageCore','<BR>','ChoiceWindowLineHeight','ParseAddedText','ParseWeaponNotetags','numVisibleRows','States','moveBy','Window_Base_processAllText','makeFontSmaller','NameBoxWindowDefaultColor','TSFEu','changeVolume','parseChoiceText','CENTERPICTURE','TextColor%1','setTextDelay','quantity','length','lastGainedObjectName','_wordWrap','clearPictures','_moveTargetX','setMessageWindowWidth','<LINE\x20BREAK>','_lastGainedItemData','_spriteset','updateOverlappingY','</CENTER>','hmXCE','setRelativePosition','65BdUGnM','upperleft','map\x20event','processAllText','MessageTextDelay','ConvertTextAutoColorRegExpFriendly','bind','convertShowChoiceEscapeCodes','_relativePosition','setPositionType','ARRAYJSON','getMessageWindowRows','CommonEvent','_autoColorActorNames','_textDelay','name','convertLockColorsEscapeCharacters','ARRAYSTR','unshift','addLoadListener','ParseStateNotetags','index','down','setWaitMode','colSpacing','right','left','makeData','isHelpWindowWordWrap','convertHardcodedEscapeReplacements','map\x20player','resetPositionX','max','Window_Base_update','launchMessageCommonEvent','battle\x20party','LineHeight','Window_Options_addGeneralOptions','map','MessageWindow','Skills','setMessageWindowWordWrap','COMMONEVENT','uLHwM','_messageOffsetY','_textDelayCount','</LEFT>','_pictureTextCache','blt','Window_Options_changeVolume','processPxTextCode'];_0x5e83=function(){return _0x5cc73d;};return _0x5e83();}Game_MessageCommonEvent['prototype'][_0xce50af(0x33c)]=function(_0x2c6425,_0x1617c1){const _0x544e5a=_0xce50af;this['_commonEventId']=_0x2c6425,this['_eventId']=_0x1617c1||0x0,this[_0x544e5a(0x111)]();},Game_MessageCommonEvent[_0xce50af(0xe6)][_0xce50af(0x11c)]=function(){const _0x55c1cf=_0xce50af;return $dataCommonEvents[this[_0x55c1cf(0x314)]];},Game_MessageCommonEvent[_0xce50af(0xe6)][_0xce50af(0x241)]=function(){const _0x35c0f0=_0xce50af;return this[_0x35c0f0(0x11c)]()[_0x35c0f0(0x241)];},Game_MessageCommonEvent['prototype'][_0xce50af(0x111)]=function(){const _0x3353f4=_0xce50af;this[_0x3353f4(0x151)]=new Game_Interpreter(),this['_interpreter'][_0x3353f4(0xab)](this[_0x3353f4(0x241)](),this[_0x3353f4(0x1a4)]);},Game_MessageCommonEvent['prototype'][_0xce50af(0x2a7)]=function(){const _0x4571d1=_0xce50af;this['_interpreter']&&(this['_interpreter'][_0x4571d1(0x1df)]()?this['_interpreter']['update']():_0x4571d1(0xca)!==_0x4571d1(0x1b7)?this[_0x4571d1(0x23a)]():(_0x35b711['x']=this[_0x4571d1(0x1e3)](_0xa955bc),_0x51ca23[_0x4571d1(0x329)]['Settings'][_0x4571d1(0x15d)][_0x4571d1(0x101)]&&(_0x10c53a['x']+=_0xde17db[_0x4571d1(0x301)])));},Game_MessageCommonEvent[_0xce50af(0xe6)][_0xce50af(0x23a)]=function(){const _0x54ba63=_0xce50af;this[_0x54ba63(0x151)]=null;},Scene_Message['prototype'][_0xce50af(0x185)]=function(){const _0x1451d3=_0xce50af,_0x1894e9=Math[_0x1451d3(0xa4)](Graphics['width'],$gameSystem[_0x1451d3(0x20e)]()),_0x3320c0=$gameSystem[_0x1451d3(0x273)](),_0x2a8c97=this[_0x1451d3(0x1f1)](_0x3320c0,![]),_0xf53d53=(Graphics[_0x1451d3(0x1d4)]-_0x1894e9)/0x2,_0x1e0e3f=0x0;return new Rectangle(_0xf53d53,_0x1e0e3f,_0x1894e9,_0x2a8c97);},VisuMZ['MessageCore'][_0xce50af(0x171)]=Scene_Options['prototype'][_0xce50af(0xb3)],Scene_Options['prototype'][_0xce50af(0xb3)]=function(){const _0x4c7917=_0xce50af;let _0x19dea0=VisuMZ['MessageCore']['Scene_Options_maxCommands'][_0x4c7917(0x2aa)](this);const _0x4c8a55=VisuMZ[_0x4c7917(0x329)][_0x4c7917(0xa3)];if(_0x4c8a55[_0x4c7917(0x35a)][_0x4c7917(0x2ef)]&&_0x4c8a55[_0x4c7917(0x35a)][_0x4c7917(0x19e)])_0x19dea0++;return _0x19dea0;},VisuMZ[_0xce50af(0x329)][_0xce50af(0x31e)]=Sprite_Picture['prototype'][_0xce50af(0x2d5)],Sprite_Picture[_0xce50af(0xe6)][_0xce50af(0x2d5)]=function(){const _0x5bec3a=_0xce50af;VisuMZ[_0x5bec3a(0x329)][_0x5bec3a(0x31e)][_0x5bec3a(0x2aa)](this),this[_0x5bec3a(0x308)]();},VisuMZ['MessageCore'][_0xce50af(0x335)]=Sprite_Picture[_0xce50af(0xe6)]['update'],Sprite_Picture[_0xce50af(0xe6)][_0xce50af(0x2a7)]=function(){const _0x381465=_0xce50af;VisuMZ[_0x381465(0x329)]['Sprite_Picture_update'][_0x381465(0x2aa)](this),this[_0x381465(0x338)]();},Sprite_Picture[_0xce50af(0xe6)][_0xce50af(0x338)]=function(){const _0x4f271e=_0xce50af;if(!this[_0x4f271e(0x244)])return;this[_0x4f271e(0x1aa)](),this[_0x4f271e(0x195)](),this[_0x4f271e(0x1c0)](),this[_0x4f271e(0x373)]();},Sprite_Picture[_0xce50af(0xe6)][_0xce50af(0x308)]=function(){const _0x3e4c8e=_0xce50af;if(this[_0x3e4c8e(0x2e3)])return;if(this[_0x3e4c8e(0x247)])return;const _0x223dcc=new Rectangle(0x0,0x0,0x0,0x0);this[_0x3e4c8e(0x2e3)]=new Window_Base(_0x223dcc),this['_pictureTextWindow']['padding']=0x0,this[_0x3e4c8e(0x247)]=new Sprite(),this[_0x3e4c8e(0x2cf)](this['_pictureTextSprite'],0x0),this[_0x3e4c8e(0x110)]=0x0,this['_pictureTextHeight']=0x0,this[_0x3e4c8e(0x297)]={};},Sprite_Picture[_0xce50af(0xe6)][_0xce50af(0x1aa)]=function(){const _0x1a88a8=_0xce50af;if(!this['_pictureTextWindow'])return;if(this[_0x1a88a8(0x110)]===this[_0x1a88a8(0x321)]&&this[_0x1a88a8(0x357)]===this[_0x1a88a8(0x15e)])return;this[_0x1a88a8(0x110)]=this[_0x1a88a8(0x321)],this[_0x1a88a8(0x357)]=this[_0x1a88a8(0x15e)],this[_0x1a88a8(0x297)]={},this[_0x1a88a8(0x2e3)]['move'](0x0,0x0,this[_0x1a88a8(0x321)],this['height']);},Sprite_Picture[_0xce50af(0xe6)]['anchorPictureText']=function(){const _0xe67a08=_0xce50af;if(!this[_0xe67a08(0x247)])return;this[_0xe67a08(0x247)][_0xe67a08(0x36e)]['x']=this[_0xe67a08(0x36e)]['x'],this[_0xe67a08(0x247)][_0xe67a08(0x36e)]['y']=this[_0xe67a08(0x36e)]['y'];},Sprite_Picture[_0xce50af(0xe6)][_0xce50af(0x1c0)]=function(){const _0x4f0808=_0xce50af;if(!this[_0x4f0808(0x2e3)])return;if(!this[_0x4f0808(0xa0)]())return;const _0x43d8a6=[_0x4f0808(0x269),'up',_0x4f0808(0xf1),_0x4f0808(0x282),'center','right',_0x4f0808(0xc7),_0x4f0808(0x27e),_0x4f0808(0x2d1)];this[_0x4f0808(0x2e3)][_0x4f0808(0x2c2)]();for(const _0x4b3858 of _0x43d8a6){if('gohCy'!==_0x4f0808(0x2ae))return _0x54905d[_0x4f0808(0xc8)]();else this['drawPictureTextZone'](_0x4b3858);}},Sprite_Picture[_0xce50af(0xe6)][_0xce50af(0xa0)]=function(){const _0x2cefc0=_0xce50af,_0x40b7d9=[_0x2cefc0(0x269),'up',_0x2cefc0(0xf1),_0x2cefc0(0x282),_0x2cefc0(0x1a6),_0x2cefc0(0x281),_0x2cefc0(0xc7),_0x2cefc0(0x27e),_0x2cefc0(0x2d1)];for(const _0x2101c4 of _0x40b7d9){const _0x34cd0f=$gameScreen['getPictureText'](this['_pictureId'],_0x2101c4);if(this[_0x2cefc0(0x297)][_0x2101c4]===_0x34cd0f)continue;return!![];}return![];},Sprite_Picture['prototype']['drawPictureTextZone']=function(_0x5e27fc){const _0x568dc4=_0xce50af,_0x2274c8=$gameScreen[_0x568dc4(0x102)](this[_0x568dc4(0x145)],_0x5e27fc);this[_0x568dc4(0x297)][_0x5e27fc]=_0x2274c8;const _0x50ce7e=this[_0x568dc4(0x2e3)][_0x568dc4(0x2f2)](_0x2274c8);let _0x50c2e1=$gameScreen['getPictureTextBuffer'](this[_0x568dc4(0x145)]),_0x30a4a6=_0x50c2e1,_0x5ac26c=_0x50c2e1;if(['up',_0x568dc4(0x1a6),_0x568dc4(0x27e)][_0x568dc4(0x215)](_0x5e27fc))_0x30a4a6=Math[_0x568dc4(0xd0)]((this['width']-_0x50ce7e['width'])/0x2);else[_0x568dc4(0xf1),_0x568dc4(0x281),'lowerright'][_0x568dc4(0x215)](_0x5e27fc)&&(_0x30a4a6=Math[_0x568dc4(0xd0)](this[_0x568dc4(0x321)]-_0x50ce7e[_0x568dc4(0x321)]-_0x50c2e1));if([_0x568dc4(0x282),'center','right'][_0x568dc4(0x215)](_0x5e27fc))_0x5ac26c=Math[_0x568dc4(0xd0)]((this['height']-_0x50ce7e[_0x568dc4(0x15e)])/0x2);else[_0x568dc4(0xc7),_0x568dc4(0x27e),'lowerright']['includes'](_0x5e27fc)&&(_0x5ac26c=Math[_0x568dc4(0xd0)](this[_0x568dc4(0x15e)]-_0x50ce7e[_0x568dc4(0x15e)]-_0x50c2e1));this[_0x568dc4(0x2e3)]['drawTextEx'](_0x2274c8,_0x30a4a6,_0x5ac26c);},Sprite_Picture['prototype']['attachPictureText']=function(){const _0x2b70d0=_0xce50af;if(!this['_pictureTextWindow'])return;if(!this[_0x2b70d0(0x247)])return;this[_0x2b70d0(0x247)]['bitmap']=this['_pictureTextWindow']['contents'];},VisuMZ['MessageCore']['Window_Base_initialize']=Window_Base['prototype'][_0xce50af(0x33c)],Window_Base[_0xce50af(0xe6)][_0xce50af(0x33c)]=function(_0x1b3764){const _0x4add83=_0xce50af;this[_0x4add83(0x18b)](_0x1b3764),VisuMZ[_0x4add83(0x329)]['Window_Base_initialize'][_0x4add83(0x2aa)](this,_0x1b3764);},Window_Base[_0xce50af(0xe6)][_0xce50af(0x18b)]=function(_0x20df33){const _0x4c00ac=_0xce50af;this[_0x4c00ac(0x21a)](),this[_0x4c00ac(0x19d)](),this[_0x4c00ac(0x36b)](_0x20df33);},Window_Base['prototype']['initTextAlignement']=function(){const _0x2dfcbb=_0xce50af;this[_0x2dfcbb(0x104)](_0x2dfcbb(0x230));},Window_Base[_0xce50af(0xe6)][_0xce50af(0x104)]=function(_0x25929e){const _0x5a7e6f=_0xce50af;this[_0x5a7e6f(0x2fc)]=_0x25929e;},Window_Base['prototype']['getTextAlignment']=function(){const _0x1c5609=_0xce50af;return this[_0x1c5609(0x2fc)];},VisuMZ[_0xce50af(0x329)][_0xce50af(0x225)]=Window_Base[_0xce50af(0xe6)][_0xce50af(0x2f2)],Window_Base[_0xce50af(0xe6)]['textSizeEx']=function(_0xdd6c6){const _0x3b7234=_0xce50af;return this[_0x3b7234(0x19d)](),VisuMZ['MessageCore'][_0x3b7234(0x225)]['call'](this,_0xdd6c6);},VisuMZ[_0xce50af(0x329)][_0xce50af(0x251)]=Window_Base[_0xce50af(0xe6)][_0xce50af(0x26b)],Window_Base[_0xce50af(0xe6)]['processAllText']=function(_0x3fffe3){const _0x4b2577=_0xce50af;VisuMZ['MessageCore'][_0x4b2577(0x251)][_0x4b2577(0x2aa)](this,_0x3fffe3);if(_0x3fffe3[_0x4b2577(0x21e)])this[_0x4b2577(0x104)](_0x4b2577(0x230));},Window_Base[_0xce50af(0xe6)][_0xce50af(0x19d)]=function(){const _0x1cf75a=_0xce50af;this[_0x1cf75a(0x379)](![]);},Window_Base[_0xce50af(0xe6)][_0xce50af(0x1d5)]=function(){const _0x13160c=_0xce50af;return this[_0x13160c(0x25d)];},Window_Base['prototype']['setWordWrap']=function(_0x12bc2b){const _0x46e5bf=_0xce50af;return this[_0x46e5bf(0x25d)]=_0x12bc2b,'';},Window_Base[_0xce50af(0xe6)]['registerResetRect']=function(_0x38cfa5){const _0x13fcc3=_0xce50af;this[_0x13fcc3(0x1be)]=JsonEx[_0x13fcc3(0x2f1)](_0x38cfa5);},Window_Base[_0xce50af(0xe6)][_0xce50af(0x313)]=function(){const _0x54a1f7=_0xce50af;this[_0x54a1f7(0x1e9)]['fontFace']=$gameSystem[_0x54a1f7(0xa8)](),this[_0x54a1f7(0x1e9)][_0x54a1f7(0x2ca)]=$gameSystem[_0x54a1f7(0x172)](),this['contents']['fontBold']=![],this['contents'][_0x54a1f7(0x115)]=![],this[_0x54a1f7(0xa2)]();},Window_Base[_0xce50af(0xe6)]['resetTextColor']=function(){const _0x2e84a2=_0xce50af;this[_0x2e84a2(0x234)](ColorManager[_0x2e84a2(0x135)]()),this[_0x2e84a2(0x2c1)](ColorManager[_0x2e84a2(0x176)]());const _0x4ac9ca=VisuMZ[_0x2e84a2(0x329)][_0x2e84a2(0xa3)][_0x2e84a2(0x15d)];_0x4ac9ca['DefaultOutlineWidth']===undefined&&(_0x4ac9ca[_0x2e84a2(0x35b)]=0x3),this[_0x2e84a2(0x1e9)]['outlineWidth']=_0x4ac9ca['DefaultOutlineWidth'],this[_0x2e84a2(0x2e0)](![]);},Window_Base['prototype'][_0xce50af(0x2e0)]=function(_0x184379){const _0x422615=_0xce50af;this[_0x422615(0x12b)]=_0x184379;},Window_Base[_0xce50af(0xe6)][_0xce50af(0x118)]=function(){const _0x4a641d=_0xce50af;return this[_0x4a641d(0x12b)];},Window_Base[_0xce50af(0xe6)]['isAutoColorAffected']=function(){return![];},Window_Base[_0xce50af(0xe6)][_0xce50af(0x1f2)]=function(){const _0x33daab=_0xce50af,_0x1acd10=['fontFace',_0x33daab(0x2ca),_0x33daab(0xb8),_0x33daab(0x115),_0x33daab(0x323),_0x33daab(0x138),_0x33daab(0x2b2),_0x33daab(0x31f)];let _0x28fbd1={};for(const _0x8fb66a of _0x1acd10){_0x28fbd1[_0x8fb66a]=this[_0x33daab(0x1e9)][_0x8fb66a];}return _0x28fbd1;},Window_Base[_0xce50af(0xe6)][_0xce50af(0x33d)]=function(_0x43bb05){for(const _0x12a4ca in _0x43bb05){this['contents'][_0x12a4ca]=_0x43bb05[_0x12a4ca];}},VisuMZ[_0xce50af(0x329)][_0xce50af(0x289)]=Window_Base[_0xce50af(0xe6)][_0xce50af(0x2a7)],Window_Base[_0xce50af(0xe6)][_0xce50af(0x2a7)]=function(){const _0x1073d3=_0xce50af;VisuMZ['MessageCore'][_0x1073d3(0x289)]['call'](this),this[_0x1073d3(0x1e4)]();},Window_Base[_0xce50af(0xe6)][_0xce50af(0x1d6)]=function(){return![];},Window_Base[_0xce50af(0xe6)][_0xce50af(0x1e4)]=function(){const _0x109272=_0xce50af;this['_moveDuration']>0x0&&(this[_0x109272(0x1d6)]()&&(_0x109272(0x2db)===_0x109272(0x2db)?(this['x']=this[_0x109272(0x1b2)](this['x'],this['_moveTargetX']),this['y']=this[_0x109272(0x1b2)](this['y'],this[_0x109272(0x351)]),this[_0x109272(0x321)]=this[_0x109272(0x1b2)](this[_0x109272(0x321)],this[_0x109272(0x2f9)]),this[_0x109272(0x15e)]=this['applyMoveEasing'](this['height'],this['_moveTargetHeight']),this[_0x109272(0x36d)]()):(_0x307b76=_0x327d3a[_0x109272(0x18e)]()[_0x109272(0x1fc)](),this[_0x109272(0xb0)](_0x5b009d)[_0x3eba3a]=_0x18184f||'')),this[_0x109272(0x2fd)]--);},Window_Base['prototype'][_0xce50af(0x36d)]=function(_0xf9ce31,_0x3c04cf){const _0x5824f1=_0xce50af;if(!_0xf9ce31){if(_0x5824f1(0x2b5)===_0x5824f1(0x2b5))this[_0x5824f1(0x321)]=Math[_0x5824f1(0xa4)](this[_0x5824f1(0x321)],Graphics[_0x5824f1(0x321)]),this[_0x5824f1(0x15e)]=Math[_0x5824f1(0xa4)](this[_0x5824f1(0x15e)],Graphics[_0x5824f1(0x15e)]);else{const _0xca5efd=_0x566812>=0x1?_0x3c03c4[_0x5824f1(0x2e8)](_0x5118db):null,_0xc840db=_0xca5efd?_0xca5efd[_0x5824f1(0x277)]():'',_0x3a90f2=_0x34decb(_0x2c0665[_0x5824f1(0x329)][_0x5824f1(0xa3)][_0x5824f1(0x149)]['Actors']);return this['isAutoColorAffected']()&&_0x3a90f2!==0x0?_0x5824f1(0x29f)['format'](_0x3a90f2,_0xc840db):_0xc840db;}}if(!_0x3c04cf){if(_0x5824f1(0x1c6)!==_0x5824f1(0x1c6))this[_0x5824f1(0x2fe)](),_0x153725['MessageCore']['Window_Help_refresh'][_0x5824f1(0x2aa)](this),this[_0x5824f1(0x19d)]();else{const _0x43f6d5=-(Math['floor'](Graphics['width']-Graphics[_0x5824f1(0x1d4)])/0x2),_0xde00c9=_0x43f6d5+Graphics[_0x5824f1(0x321)]-this[_0x5824f1(0x321)],_0xe07159=-(Math[_0x5824f1(0xd0)](Graphics['height']-Graphics[_0x5824f1(0x1a3)])/0x2),_0x590deb=_0xe07159+Graphics['height']-this[_0x5824f1(0x15e)];this['x']=this['x']['clamp'](_0x43f6d5,_0xde00c9),this['y']=this['y'][_0x5824f1(0x1bc)](_0xe07159,_0x590deb);}}},Window_Base[_0xce50af(0xe6)]['applyMoveEasing']=function(_0x38b387,_0x274835){const _0x45ce30=_0xce50af,_0x3bbbda=this[_0x45ce30(0x2fd)],_0x513f1a=this['_wholeMoveDuration'],_0xd84255=this[_0x45ce30(0x375)]((_0x513f1a-_0x3bbbda)/_0x513f1a),_0x1ec094=this[_0x45ce30(0x375)]((_0x513f1a-_0x3bbbda+0x1)/_0x513f1a),_0x5881fc=(_0x38b387-_0x274835*_0xd84255)/(0x1-_0xd84255);return _0x5881fc+(_0x274835-_0x5881fc)*_0x1ec094;},Window_Base[_0xce50af(0xe6)][_0xce50af(0x375)]=function(_0x36e470){const _0x235e4c=_0xce50af,_0x3a3672=0x2;switch(this['_moveEasingType']){case 0x0:return _0x36e470;case 0x1:return this[_0x235e4c(0x29e)](_0x36e470,_0x3a3672);case 0x2:return this[_0x235e4c(0x166)](_0x36e470,_0x3a3672);case 0x3:return this[_0x235e4c(0x174)](_0x36e470,_0x3a3672);default:if(Imported[_0x235e4c(0x14e)]){if('FnxbG'!=='FnxbG'){const _0x4b339a=_0xb34386[_0x235e4c(0x14c)]();if(_0x4b339a['id']<0x0)return'';let _0x543b87=null;if(_0x4b339a[_0x235e4c(0xbe)]===0x0)_0x543b87=_0x8d0430[_0x4b339a['id']];if(_0x4b339a[_0x235e4c(0xbe)]===0x1)_0x543b87=_0x475dbc[_0x4b339a['id']];if(_0x4b339a['type']===0x2)_0x543b87=_0x2da768[_0x4b339a['id']];if(!_0x543b87)return'';return _0x2559ad?'\x1bi[%1]%2'[_0x235e4c(0x186)](_0x543b87[_0x235e4c(0x210)],_0x543b87['name']):_0x543b87[_0x235e4c(0x277)];}else return VisuMZ[_0x235e4c(0x1b2)](_0x36e470,this[_0x235e4c(0xf5)]);}else return _0x36e470;}},Window_Base['prototype'][_0xce50af(0x2ac)]=function(_0x1d3f9d,_0x2d07e9,_0x3a7005,_0x27435a,_0x292352,_0x55d79b){const _0x34da80=_0xce50af;this[_0x34da80(0x25f)]=_0x1d3f9d,this[_0x34da80(0x351)]=_0x2d07e9,this[_0x34da80(0x2f9)]=_0x3a7005||this[_0x34da80(0x321)],this[_0x34da80(0x31c)]=_0x27435a||this[_0x34da80(0x15e)],this[_0x34da80(0x2fd)]=_0x292352||0x1;if(this[_0x34da80(0x2fd)]<=0x0)this[_0x34da80(0x2fd)]=0x1;this[_0x34da80(0xfb)]=this['_moveDuration'],this['_moveEasingType']=_0x55d79b||0x0;if(_0x292352<=0x0)this['updateMove']();},Window_Base[_0xce50af(0xe6)][_0xce50af(0x250)]=function(_0x41df94,_0xa144de,_0x50f35e,_0x27b35a,_0x520bba,_0x1841f7){const _0x388d09=_0xce50af;this['_moveTargetX']=this['x']+_0x41df94,this['_moveTargetY']=this['y']+_0xa144de,this[_0x388d09(0x2f9)]=this[_0x388d09(0x321)]+(_0x50f35e||0x0),this[_0x388d09(0x31c)]=this[_0x388d09(0x15e)]+(_0x27b35a||0x0),this['_moveDuration']=_0x520bba||0x1;if(this['_moveDuration']<=0x0)this[_0x388d09(0x2fd)]=0x1;this[_0x388d09(0xfb)]=this['_moveDuration'],this[_0x388d09(0xf5)]=_0x1841f7||0x0;if(_0x520bba<=0x0)this[_0x388d09(0x1e4)]();},Window_Base[_0xce50af(0xe6)][_0xce50af(0x318)]=function(_0x28e58e,_0x43f6dd){const _0x42305e=_0xce50af;this[_0x42305e(0x2ac)](this[_0x42305e(0x1be)]['x'],this['_resetRect']['y'],this[_0x42305e(0x1be)][_0x42305e(0x321)],this[_0x42305e(0x1be)][_0x42305e(0x15e)],_0x28e58e,_0x43f6dd);},VisuMZ[_0xce50af(0x329)][_0xce50af(0x2b7)]=Window_Base['prototype'][_0xce50af(0x234)],Window_Base['prototype'][_0xce50af(0x234)]=function(_0x4ff1f0){const _0xe5ae92=_0xce50af;if(this['isColorLocked']())return;_0x4ff1f0=_0x4ff1f0[_0xe5ae92(0x2c0)](/\,/g,''),this[_0xe5ae92(0xad)]=this['_textColorStack']||[],this['_textColorStack'][_0xe5ae92(0x27a)](this[_0xe5ae92(0x1e9)][_0xe5ae92(0x323)]),VisuMZ[_0xe5ae92(0x329)][_0xe5ae92(0x2b7)][_0xe5ae92(0x2aa)](this,_0x4ff1f0);},Window_Base[_0xce50af(0xe6)][_0xce50af(0x194)]=function(_0x1e10e7){const _0x23b25d=_0xce50af;this['obtainEscapeParam'](_0x1e10e7);if(this[_0x23b25d(0x118)]())return;_0x1e10e7[_0x23b25d(0x21e)]&&(this[_0x23b25d(0xad)]=this[_0x23b25d(0xad)]||[],this[_0x23b25d(0x1e9)][_0x23b25d(0x323)]=this[_0x23b25d(0xad)][_0x23b25d(0x130)]()||ColorManager['normalColor']());},Window_Base[_0xce50af(0xe6)]['convertEscapeCharacters']=function(_0x84088e){const _0x515e7e=_0xce50af;return _0x84088e=this[_0x515e7e(0x2d6)](_0x84088e),_0x84088e=this[_0x515e7e(0xaf)](_0x84088e),_0x84088e=this[_0x515e7e(0x17b)](_0x84088e),_0x84088e=this['preConvertEscapeCharacters'](_0x84088e),_0x84088e=this['convertShowChoiceEscapeCodes'](_0x84088e),_0x84088e=this[_0x515e7e(0x2bd)](_0x84088e),_0x84088e=this[_0x515e7e(0x103)](_0x84088e),_0x84088e=this[_0x515e7e(0x278)](_0x84088e),_0x84088e=this[_0x515e7e(0x2b9)](_0x84088e),_0x84088e=this['convertHardcodedEscapeReplacements'](_0x84088e),_0x84088e=this[_0x515e7e(0x1b0)](_0x84088e),_0x84088e=this[_0x515e7e(0xe9)](_0x84088e),_0x84088e=this[_0x515e7e(0x333)](_0x84088e),_0x84088e=this[_0x515e7e(0x17b)](_0x84088e),_0x84088e=this[_0x515e7e(0x32e)](_0x84088e),_0x84088e=this[_0x515e7e(0x20d)](_0x84088e),_0x84088e;},Window_Base[_0xce50af(0xe6)][_0xce50af(0x2d6)]=function(_0x3da378){const _0x45086a=_0xce50af;this[_0x45086a(0x358)]=![];for(const _0x3df2fb of VisuMZ[_0x45086a(0x329)][_0x45086a(0xa3)][_0x45086a(0x15a)]){_0x3da378[_0x45086a(0x188)](_0x3df2fb[_0x45086a(0x364)])&&(this['_textMacroFound']=!![],_0x3da378=_0x3da378[_0x45086a(0x2c0)](_0x3df2fb['textCodeCheck'],_0x3df2fb[_0x45086a(0x2d0)][_0x45086a(0x26e)](this)));}return _0x3da378;},Window_Base[_0xce50af(0xe6)]['convertBackslashCharacters']=function(_0x56b476){const _0x2dc700=_0xce50af;return _0x56b476=_0x56b476[_0x2dc700(0x2c0)](/\\/g,'\x1b'),_0x56b476=_0x56b476['replace'](/\x1b\x1b/g,'\x5c'),_0x56b476;},Window_Base[_0xce50af(0xe6)][_0xce50af(0x17b)]=function(_0x3cb5b4){const _0x364de7=_0xce50af;for(;;){if(_0x3cb5b4[_0x364de7(0x188)](/\\V\[(\d+)\]/gi))_0x364de7(0x2a4)===_0x364de7(0x1ee)?(this[_0x364de7(0x14b)]=![],this[_0x364de7(0xe4)]=_0x611b7f,_0x207d45[_0x364de7(0x18b)](),this[_0x364de7(0x2c3)](),this['openness']=0x0):_0x3cb5b4=_0x3cb5b4[_0x364de7(0x2c0)](/\\V\[(\d+)\]/gi,(_0x419382,_0x1d6f73)=>this[_0x364de7(0xaf)](String($gameVariables[_0x364de7(0x214)](parseInt(_0x1d6f73)))));else{if(_0x3cb5b4[_0x364de7(0x188)](/\x1bV\[(\d+)\]/gi))_0x3cb5b4=_0x3cb5b4[_0x364de7(0x2c0)](/\x1bV\[(\d+)\]/gi,(_0x3e970b,_0x1cafc3)=>this[_0x364de7(0xaf)](String($gameVariables[_0x364de7(0x214)](parseInt(_0x1cafc3)))));else break;}}return _0x3cb5b4;},Window_Base['prototype'][_0xce50af(0x147)]=function(_0x418088){const _0x33ffe1=_0xce50af;return this[_0x33ffe1(0x345)](),_0x418088;},Window_Base[_0xce50af(0xe6)][_0xce50af(0x333)]=function(_0xfad26){return _0xfad26;},Window_Base[_0xce50af(0xe6)][_0xce50af(0x26f)]=function(_0x509a08){const _0x4ed93b=_0xce50af;return _0x509a08=_0x509a08['replace'](/<(?:SHOW|HIDE|DISABLE|ENABLE)>/gi,''),_0x509a08=_0x509a08[_0x4ed93b(0x2c0)](/<(?:SHOW|HIDE|DISABLE|ENABLE)[ ](?:SWITCH|SWITCHES):[ ](.*?)>/gi,''),_0x509a08=_0x509a08['replace'](/<(?:SHOW|HIDE|DISABLE|ENABLE)[ ](?:ALL|ANY)[ ](?:SWITCH|SWITCHES):[ ](.*?)>/gi,''),_0x509a08;},Window_Base['prototype']['convertFontSettingsEscapeCharacters']=function(_0x55b276){const _0x5ef943=_0xce50af;return _0x55b276=_0x55b276[_0x5ef943(0x2c0)](/<B>/gi,_0x5ef943(0x123)),_0x55b276=_0x55b276[_0x5ef943(0x2c0)](/<\/B>/gi,_0x5ef943(0xa6)),_0x55b276=_0x55b276[_0x5ef943(0x2c0)](/<I>/gi,'\x1bITALIC[1]'),_0x55b276=_0x55b276[_0x5ef943(0x2c0)](/<\/I>/gi,_0x5ef943(0x150)),_0x55b276;},Window_Base[_0xce50af(0xe6)]['convertTextAlignmentEscapeCharacters']=function(_0x4285f6){const _0x5f3a1f=_0xce50af;return _0x4285f6=_0x4285f6[_0x5f3a1f(0x2c0)](/<LEFT>/gi,_0x5f3a1f(0x343)),_0x4285f6=_0x4285f6[_0x5f3a1f(0x2c0)](/<\/LEFT>/gi,_0x5f3a1f(0x1b8)),_0x4285f6=_0x4285f6['replace'](/<CENTER>/gi,'\x1bTEXTALIGNMENT[2]'),_0x4285f6=_0x4285f6['replace'](/<\/CENTER>/gi,_0x5f3a1f(0x1b8)),_0x4285f6=_0x4285f6[_0x5f3a1f(0x2c0)](/<RIGHT>/gi,_0x5f3a1f(0xe5)),_0x4285f6=_0x4285f6[_0x5f3a1f(0x2c0)](/<\/RIGHT>/gi,_0x5f3a1f(0x1b8)),_0x4285f6;},Window_Base[_0xce50af(0xe6)][_0xce50af(0x278)]=function(_0x4bf54f){const _0x307cca=_0xce50af;return _0x4bf54f=_0x4bf54f[_0x307cca(0x2c0)](/<COLORLOCK>/gi,_0x307cca(0x15f)),_0x4bf54f=_0x4bf54f[_0x307cca(0x2c0)](/<\/COLORLOCK>/gi,_0x307cca(0xc6)),_0x4bf54f=_0x4bf54f['replace'](/\(\(\(/gi,'\x1bCOLORLOCK[1]'),_0x4bf54f=_0x4bf54f[_0x307cca(0x2c0)](/\)\)\)/gi,_0x307cca(0xc6)),_0x4bf54f;},Window_Base['prototype']['convertBaseEscapeCharacters']=function(_0x59a041){const _0x5abd72=_0xce50af;return _0x59a041=_0x59a041[_0x5abd72(0x2c0)](/\x1bN\[(\d+)\]/gi,(_0x565346,_0x53569c)=>this[_0x5abd72(0x136)](parseInt(_0x53569c))),_0x59a041=_0x59a041[_0x5abd72(0x2c0)](/\x1bP\[(\d+)\]/gi,(_0x4d04f9,_0x59d134)=>this[_0x5abd72(0x32d)](parseInt(_0x59d134))),_0x59a041=_0x59a041[_0x5abd72(0x2c0)](/\x1bG/gi,TextManager[_0x5abd72(0xde)]),_0x59a041;},Window_Base[_0xce50af(0xe6)][_0xce50af(0x285)]=function(_0x467a7e){const _0x58a273=_0xce50af;return _0x467a7e=_0x467a7e[_0x58a273(0x2c0)](/\<(?:BATTLE|CURRENT BATTLE) TARGET\>/gi,this['battleTargetName']()),_0x467a7e=_0x467a7e[_0x58a273(0x2c0)](/\<(?:BATTLE|CURRENT BATTLE) (?:USER|SUBJECT)\>/gi,this[_0x58a273(0x310)]()),_0x467a7e=_0x467a7e['replace'](/\<(?:BATTLE|CURRENT BATTLE) (?:ITEM|SKILL|ACTION)\>/gi,this[_0x58a273(0x13a)](!![])),_0x467a7e=_0x467a7e[_0x58a273(0x2c0)](/\<(?:BATTLE|CURRENT BATTLE) (?:ITEM|SKILL|ACTION) NAME\>/gi,this['battleActionName'](![])),_0x467a7e;},Window_Base['prototype'][_0xce50af(0x2d9)]=function(){const _0x24e118=_0xce50af;if(!SceneManager[_0x24e118(0x327)]())return'';if(BattleManager[_0x24e118(0x180)])return BattleManager[_0x24e118(0x180)][_0x24e118(0x277)]();if(BattleManager['_targets'][0x0])return BattleManager[_0x24e118(0x37b)][0x0][_0x24e118(0x277)]();return'';},Window_Base[_0xce50af(0xe6)][_0xce50af(0x310)]=function(){const _0x59a0e6=_0xce50af;if(!SceneManager[_0x59a0e6(0x327)]())return'';let _0x559395=null;_0x559395=BattleManager[_0x59a0e6(0x344)];if(!_0x559395&&BattleManager['isInputting']()){if('VqbBv'!=='YmEDn')_0x559395=BattleManager[_0x59a0e6(0x2e8)]();else{if(!_0x491e88['value'](_0x34999a))return!![];}}return _0x559395?_0x559395[_0x59a0e6(0x277)]():'';},Window_Base[_0xce50af(0xe6)][_0xce50af(0x13a)]=function(_0x321711){const _0x2ae6fa=_0xce50af;if(!SceneManager[_0x2ae6fa(0x327)]())return'';let _0x4c39dd=BattleManager[_0x2ae6fa(0x207)]||null;!_0x4c39dd&&BattleManager[_0x2ae6fa(0x18c)]()&&(_0x4c39dd=BattleManager[_0x2ae6fa(0x319)]());if(_0x4c39dd&&_0x4c39dd[_0x2ae6fa(0x368)]()){let _0x5c7a7a='';if(_0x321711)_0x5c7a7a+='\x1bI[%1]'[_0x2ae6fa(0x186)](_0x4c39dd[_0x2ae6fa(0x368)]()[_0x2ae6fa(0x210)]);return _0x5c7a7a+=_0x4c39dd[_0x2ae6fa(0x368)]()[_0x2ae6fa(0x277)],_0x5c7a7a;}return'';},Window_Base['prototype'][_0xce50af(0x1b0)]=function(_0x40b59e){const _0xa45c6a=_0xce50af;for(const _0x4ec9bf of VisuMZ[_0xa45c6a(0x329)][_0xa45c6a(0xa3)][_0xa45c6a(0x246)]){'UtBkF'!==_0xa45c6a(0x2eb)?_0x522b90['textCodeResult']=new _0x45c19e(_0xa45c6a(0x106)+_0x3762c2['TextStr'][_0xa45c6a(0x2c0)](/\\/g,'\x1b')+'\x27'):_0x40b59e[_0xa45c6a(0x188)](_0x4ec9bf[_0xa45c6a(0x364)])&&(_0x40b59e=_0x40b59e['replace'](_0x4ec9bf[_0xa45c6a(0x364)],_0x4ec9bf['textCodeResult']),_0x40b59e=this[_0xa45c6a(0x17b)](_0x40b59e));}return _0x40b59e;},Window_Base[_0xce50af(0xe6)][_0xce50af(0xe9)]=function(_0x1b81de){const _0x119f86=_0xce50af;for(const _0x1fe9ee of VisuMZ[_0x119f86(0x329)][_0x119f86(0xa3)][_0x119f86(0xba)]){if(_0x119f86(0x2c8)!=='lRieg'){if(_0xd7e196[_0x119f86(0x31d)]())return;this[_0x119f86(0x270)]=this['_relativePosition']||0x0;const _0x57a345=this[_0x119f86(0x2e9)],_0x447e11=_0x3bf4c8[_0x119f86(0xd0)](_0x57a345[_0x119f86(0x321)]*this[_0x119f86(0x270)]/0xa);this['x']=_0x57a345['x']+_0x447e11-_0x459b31['floor'](this[_0x119f86(0x321)]/0x2),this['x']=this['x']['clamp'](_0x57a345['x'],_0x57a345['x']+_0x57a345[_0x119f86(0x321)]-this[_0x119f86(0x321)]);}else _0x1b81de['match'](_0x1fe9ee[_0x119f86(0x364)])&&(_0x1b81de=_0x1b81de['replace'](_0x1fe9ee[_0x119f86(0x364)],_0x1fe9ee[_0x119f86(0x2d0)][_0x119f86(0x26e)](this)),_0x1b81de=this['convertVariableEscapeCharacters'](_0x1b81de));}return _0x1b81de;},Window_Base[_0xce50af(0xe6)][_0xce50af(0x136)]=function(_0x10f995){const _0x28d110=_0xce50af,_0x38673d=_0x10f995>=0x1?$gameActors[_0x28d110(0x2e8)](_0x10f995):null,_0x772002=_0x38673d?_0x38673d[_0x28d110(0x277)]():'',_0x51b8de=Number(VisuMZ['MessageCore']['Settings']['AutoColor']['Actors']);return this[_0x28d110(0x352)]()&&_0x51b8de!==0x0?_0x28d110(0x29f)[_0x28d110(0x186)](_0x51b8de,_0x772002):_0x28d110(0x29d)===_0x28d110(0xed)?'\x1bC[%1]%2\x1bPREVCOLOR[0]'['format'](_0x25a138,_0x584e81):_0x772002;},Window_Base[_0xce50af(0xe6)][_0xce50af(0x32d)]=function(_0x3ee6ca){const _0x4745f3=_0xce50af,_0x385275=_0x3ee6ca>=0x1?$gameParty[_0x4745f3(0x2da)]()[_0x3ee6ca-0x1]:null,_0x5ed469=_0x385275?_0x385275[_0x4745f3(0x277)]():'',_0x3e0af6=Number(VisuMZ[_0x4745f3(0x329)]['Settings'][_0x4745f3(0x149)][_0x4745f3(0x209)]);if(this[_0x4745f3(0x352)]()&&_0x3e0af6!==0x0)return _0x4745f3(0x2b6)===_0x4745f3(0x160)?(this[_0x4745f3(0x330)](_0x2d174a,!![],!![]),this[_0x4745f3(0x1b4)]('battle\x20actor',_0x48dc86(_0x4e801e)||0x1),''):'\x1bC[%1]%2\x1bPREVCOLOR[0]'['format'](_0x3e0af6,_0x5ed469);else{if(_0x4745f3(0x36c)===_0x4745f3(0x2d2))this[_0x4745f3(0x379)](_0x5975ee[_0x4745f3(0x121)]());else return _0x5ed469;}},Window_Base['prototype']['processAutoColorWords']=function(_0xb0bd61){const _0x901364=_0xce50af;return this[_0x901364(0x352)]()&&(_0xb0bd61=this[_0x901364(0x200)](_0xb0bd61),_0xb0bd61=this['processActorNameAutoColorChanges'](_0xb0bd61)),_0xb0bd61;},Window_Base[_0xce50af(0xe6)][_0xce50af(0x200)]=function(_0x284353){const _0x4727c0=_0xce50af;for(autoColor of VisuMZ['MessageCore'][_0x4727c0(0x1e6)]){_0x284353=_0x284353[_0x4727c0(0x2c0)](autoColor[0x0],autoColor[0x1]);}return _0x284353;},Window_Base[_0xce50af(0xe6)][_0xce50af(0x2fe)]=function(){const _0x451bc1=_0xce50af;this[_0x451bc1(0x275)]=[];},Window_Base[_0xce50af(0xe6)]['registerActorNameAutoColorChanges']=function(){const _0x1eae62=_0xce50af;this['clearActorNameAutoColor']();const _0x222941=VisuMZ[_0x1eae62(0x329)]['Settings'][_0x1eae62(0x149)],_0x3f8116=_0x222941[_0x1eae62(0x209)];if(_0x3f8116<=0x0)return;for(const _0x597ad9 of $gameActors['_data']){if(!_0x597ad9)continue;const _0x16d992=_0x597ad9[_0x1eae62(0x277)]();if(_0x16d992[_0x1eae62(0x1fc)]()[_0x1eae62(0x25b)]<=0x0)continue;if(/^\d+$/[_0x1eae62(0x355)](_0x16d992))continue;if(_0x16d992[_0x1eae62(0x188)](/-----/i))continue;let _0x48267e=VisuMZ[_0x1eae62(0x329)]['ConvertTextAutoColorRegExpFriendly'](_0x16d992);const _0x32b353=new RegExp('\x5cb'+_0x48267e+'\x5cb','g'),_0x321f9f='\x1bC[%1]%2\x1bPREVCOLOR[0]'[_0x1eae62(0x186)](_0x3f8116,_0x16d992);this[_0x1eae62(0x275)]['push']([_0x32b353,_0x321f9f]);}},Window_Base['prototype'][_0xce50af(0x337)]=function(_0x1d966f){const _0x3f1d71=_0xce50af;this[_0x3f1d71(0x275)]===undefined&&this[_0x3f1d71(0x345)]();for(autoColor of this[_0x3f1d71(0x275)]){_0x1d966f=_0x1d966f['replace'](autoColor[0x0],autoColor[0x1]);}return _0x1d966f;},Window_Base[_0xce50af(0xe6)][_0xce50af(0x1da)]=function(_0x479410,_0x248367,_0x4b16e4){const _0x43204f=_0xce50af;if(!_0x479410)return'';const _0x825be=_0x479410[_0x248367];let _0x56fef0='';if(_0x825be&&_0x4b16e4&&_0x825be['iconIndex']){if(_0x43204f(0x146)!==_0x43204f(0x2f8)){const _0x416268='\x1bi[%1]%2';_0x56fef0=_0x416268[_0x43204f(0x186)](_0x825be[_0x43204f(0x210)],_0x825be[_0x43204f(0x277)]);}else this[_0x43204f(0x107)]()[_0x43204f(0x315)][0x0]=_0x41d945,_0x539660++;}else{if(_0x825be)_0x43204f(0x266)===_0x43204f(0x266)?_0x56fef0=_0x825be[_0x43204f(0x277)]:_0x593286['x']+=_0x4dde75['startX'];else{if(_0x43204f(0x1ed)===_0x43204f(0x1ed))_0x56fef0='';else return this[_0x43204f(0x2e9)]['x']+this[_0x43204f(0x2e9)][_0x43204f(0x321)]-this[_0x43204f(0x128)]();}}if(this[_0x43204f(0x352)]()){if('bPsBa'!==_0x43204f(0x2de))return this[_0x43204f(0x345)](),_0x20d934;else _0x56fef0=this[_0x43204f(0x1cf)](_0x56fef0,_0x479410);}return _0x56fef0;},Window_Base['prototype'][_0xce50af(0x25c)]=function(_0x32fcaf){const _0x52d59b=_0xce50af,_0x38af6d=$gameParty[_0x52d59b(0x14c)]();if(_0x38af6d['id']<0x0)return'';let _0x2a41b0=null;if(_0x38af6d[_0x52d59b(0xbe)]===0x0)_0x2a41b0=$dataItems[_0x38af6d['id']];if(_0x38af6d[_0x52d59b(0xbe)]===0x1)_0x2a41b0=$dataWeapons[_0x38af6d['id']];if(_0x38af6d['type']===0x2)_0x2a41b0=$dataArmors[_0x38af6d['id']];if(!_0x2a41b0)return'';return _0x32fcaf?_0x52d59b(0x371)['format'](_0x2a41b0[_0x52d59b(0x210)],_0x2a41b0['name']):_0x2a41b0[_0x52d59b(0x277)];},Window_Base[_0xce50af(0xe6)]['lastGainedObjectQuantity']=function(){const _0x4f1b76=_0xce50af,_0x41a73a=$gameParty[_0x4f1b76(0x14c)]();if(_0x41a73a['id']<=0x0)return'';return _0x41a73a['quantity'];},Window_Base[_0xce50af(0xe6)][_0xce50af(0x1cf)]=function(_0x5367e0,_0x22147e){const _0x5ea254=_0xce50af,_0x5d0091=VisuMZ[_0x5ea254(0x329)][_0x5ea254(0xa3)][_0x5ea254(0x149)];let _0x4a3ce4=0x0;if(_0x22147e===$dataActors)_0x4a3ce4=_0x5d0091['Actors'];if(_0x22147e===$dataClasses)_0x4a3ce4=_0x5d0091[_0x5ea254(0xdc)];if(_0x22147e===$dataSkills)_0x4a3ce4=_0x5d0091[_0x5ea254(0x290)];if(_0x22147e===$dataItems)_0x4a3ce4=_0x5d0091['Items'];if(_0x22147e===$dataWeapons)_0x4a3ce4=_0x5d0091[_0x5ea254(0x365)];if(_0x22147e===$dataArmors)_0x4a3ce4=_0x5d0091[_0x5ea254(0x18a)];if(_0x22147e===$dataEnemies)_0x4a3ce4=_0x5d0091['Enemies'];if(_0x22147e===$dataStates)_0x4a3ce4=_0x5d0091['States'];return _0x4a3ce4>0x0&&(_0x5367e0=_0x5ea254(0x29f)['format'](_0x4a3ce4,_0x5367e0)),_0x5367e0;},Window_Base[_0xce50af(0xe6)][_0xce50af(0x20d)]=function(_0x106523){const _0x3a375c=_0xce50af;_0x106523=_0x106523[_0x3a375c(0x2c0)](/<(?:WORDWRAP|WORD WRAP)>/gi,(_0x4e3e54,_0x397d0b)=>this[_0x3a375c(0x379)](!![])),_0x106523=_0x106523[_0x3a375c(0x2c0)](/<(?:NOWORDWRAP|NO WORD WRAP)>/gi,(_0x4de093,_0x31e8da)=>this[_0x3a375c(0x379)](![])),_0x106523=_0x106523[_0x3a375c(0x2c0)](/<\/(?:WORDWRAP|WORD WRAP)>/gi,(_0x10b54a,_0x52ba5d)=>this['setWordWrap'](![]));if(_0x106523[_0x3a375c(0x188)](Window_Message[_0x3a375c(0x1ac)]))_0x3a375c(0xac)==='exuMO'?this['setWordWrap'](![]):_0x2c0c9d=this[_0x3a375c(0x1e9)][_0x3a375c(0x2ca)];else{if(_0x106523[_0x3a375c(0x188)](Window_Message['_autoPosRegExp'])){if(_0x3a375c(0x306)===_0x3a375c(0x1fb))for(const _0x5573cb in _0x29ec1a){this[_0x3a375c(0x1e9)][_0x5573cb]=_0x6f4175[_0x5573cb];}else this[_0x3a375c(0x379)](![]);}}if(!this[_0x3a375c(0x1d5)]())return _0x106523;if(_0x106523[_0x3a375c(0x25b)]<=0x0)return _0x106523;if(VisuMZ[_0x3a375c(0x329)][_0x3a375c(0xa3)][_0x3a375c(0x1ff)][_0x3a375c(0x34e)])_0x106523=_0x106523['replace'](/[\n\r]+/g,'\x20'),_0x106523=_0x106523[_0x3a375c(0x2c0)](/<(?:BR|LINEBREAK)>/gi,'\x20\x0a');else{if(_0x3a375c(0xe1)===_0x3a375c(0x376)){const _0x225483=_0x5c6d8a['$1'][_0x3a375c(0x181)](',')[_0x3a375c(0x28e)](_0x327ccf=>_0x518d7f(_0x327ccf)||0x0);for(const _0x3bd3cf of _0x225483){if(_0x455b0c[_0x3a375c(0x214)](_0x3bd3cf))return![];}return!![];}else _0x106523=_0x106523[_0x3a375c(0x2c0)](/[\n\r]+/g,''),_0x106523=_0x106523['replace'](/<(?:BR|LINEBREAK)>/gi,'\x0a');}return _0x106523=this[_0x3a375c(0x17a)](_0x106523),_0x106523=_0x106523[_0x3a375c(0x181)]('\x20')[_0x3a375c(0x1af)](_0x3a375c(0x2e4)),_0x106523=_0x106523[_0x3a375c(0x2c0)](/<(?:BR|LINEBREAK)>/gi,'\x0a'),_0x106523=_0x106523['replace'](/<LINE\x1bWrapBreak[0]BREAK>/gi,'\x0a'),_0x106523;},Window_Base[_0xce50af(0xe6)][_0xce50af(0x17a)]=function(_0x15d1e2){return _0x15d1e2;},VisuMZ[_0xce50af(0x329)][_0xce50af(0x341)]=Window_Base[_0xce50af(0xe6)][_0xce50af(0x231)],Window_Base[_0xce50af(0xe6)][_0xce50af(0x231)]=function(_0x4bc6b3){const _0xb59a64=_0xce50af;VisuMZ[_0xb59a64(0x329)][_0xb59a64(0x341)][_0xb59a64(0x2aa)](this,_0x4bc6b3),this[_0xb59a64(0x191)](_0x4bc6b3);},VisuMZ['MessageCore'][_0xce50af(0x109)]=Window_Base[_0xce50af(0xe6)][_0xce50af(0x2e6)],Window_Base[_0xce50af(0xe6)]['processControlCharacter']=function(_0x386a0b,_0x59474f){const _0xd7ae0e=_0xce50af;VisuMZ[_0xd7ae0e(0x329)][_0xd7ae0e(0x109)][_0xd7ae0e(0x2aa)](this,_0x386a0b,_0x59474f),_0x59474f==='\x1bWrapBreak[0]'&&this['processWrapBreak'](_0x386a0b);},Window_Base[_0xce50af(0xe6)][_0xce50af(0x2c5)]=function(_0xb1a58c){const _0x9f648a=_0xce50af;var _0x3ac163=/^\<(.*?)\>/[_0x9f648a(0xae)](_0xb1a58c[_0x9f648a(0x190)][_0x9f648a(0x11b)](_0xb1a58c[_0x9f648a(0x27d)]));if(_0x3ac163)return _0xb1a58c['index']+=_0x3ac163[0x0]['length'],String(_0x3ac163[0x0][_0x9f648a(0x11b)](0x1,_0x3ac163[0x0]['length']-0x1));else{if(_0x9f648a(0x347)!==_0x9f648a(0x2bf))return'';else this[_0x9f648a(0x111)](),this[_0x9f648a(0x2c7)](),this[_0x9f648a(0xfd)](),this[_0x9f648a(0x1c4)]();}},VisuMZ['MessageCore']['Window_Base_processEscapeCharacter']=Window_Base[_0xce50af(0xe6)]['processEscapeCharacter'],Window_Base[_0xce50af(0xe6)][_0xce50af(0x2b1)]=function(_0x276f51,_0x36ea12){const _0x2e2e8f=_0xce50af;switch(_0x276f51){case'C':if(_0x36ea12['drawing']){if('elaJC'===_0x2e2e8f(0xb6)){if(this[_0x2e2e8f(0xf0)]===_0xdc3f41)this[_0x2e2e8f(0x18b)]();if(this[_0x2e2e8f(0xf0)][_0x2e2e8f(0x33b)]===_0x174437)this['initMessageCore']();_0x581dcb=_0x2170aa['ceil'](_0x6f4a9b);if(_0x2e5b42%0x2!==0x0)_0xa9291f+=0x1;this['_MessageCoreSettings'][_0x2e2e8f(0x33b)]=_0x185849||0x2;}else VisuMZ[_0x2e2e8f(0x329)][_0x2e2e8f(0xf3)]['call'](this,_0x276f51,_0x36ea12);}else this[_0x2e2e8f(0x1e3)](_0x36ea12);break;case'I':case'{':case'}':VisuMZ[_0x2e2e8f(0x329)][_0x2e2e8f(0xf3)][_0x2e2e8f(0x2aa)](this,_0x276f51,_0x36ea12);break;case'FS':this[_0x2e2e8f(0x19c)](_0x36ea12);break;case'PX':this[_0x2e2e8f(0x29a)](_0x36ea12);break;case'PY':this[_0x2e2e8f(0x1f4)](_0x36ea12);break;case _0x2e2e8f(0x2be):this[_0x2e2e8f(0xc1)](this[_0x2e2e8f(0x1e3)](_0x36ea12));break;case _0x2e2e8f(0x257):this['processDrawCenteredPicture'](_0x36ea12);break;case _0x2e2e8f(0x2ba):this[_0x2e2e8f(0x34f)](_0x36ea12);break;case _0x2e2e8f(0x292):this[_0x2e2e8f(0x31a)](_0x36ea12);break;case'ITALIC':this[_0x2e2e8f(0x322)](this[_0x2e2e8f(0x1e3)](_0x36ea12));break;case _0x2e2e8f(0x237):this['processDrawPicture'](_0x36ea12);break;case _0x2e2e8f(0x173):this['processPreviousColor'](_0x36ea12);break;case _0x2e2e8f(0xc0):this[_0x2e2e8f(0xa9)](_0x36ea12);break;case'WAIT':this['processCustomWait'](_0x36ea12);break;case _0x2e2e8f(0x1d3):this[_0x2e2e8f(0x2f0)](_0x36ea12);break;default:this['processMessageCoreEscapeActions'](_0x276f51,_0x36ea12);}},Window_Base[_0xce50af(0xe6)]['processMessageCoreEscapeActions']=function(_0x597fca,_0x4886aa){const _0x3ae5e9=_0xce50af;for(const _0x300bf6 of VisuMZ[_0x3ae5e9(0x329)]['Settings']['TextCodeActions']){if(_0x3ae5e9(0xe7)==='GQzxK'){if(_0x300bf6['Match']===_0x597fca){if(_0x300bf6[_0x3ae5e9(0x183)]==='')this['obtainEscapeParam'](_0x4886aa);_0x300bf6[_0x3ae5e9(0x2d4)][_0x3ae5e9(0x2aa)](this,_0x4886aa);if(this['constructor']===Window_Message){if(_0x3ae5e9(0x293)===_0x3ae5e9(0xd5))_0x4dbde2['x']-=_0x236824[_0x3ae5e9(0x301)];else{const _0x344b78=_0x300bf6[_0x3ae5e9(0x274)]||0x0;if(_0x344b78>0x0)this[_0x3ae5e9(0x28a)](_0x344b78);}}}}else{const _0x1c6f35=this[_0x3ae5e9(0x2fd)],_0xd58d53=this[_0x3ae5e9(0xfb)],_0x2d506c=this[_0x3ae5e9(0x375)]((_0xd58d53-_0x1c6f35)/_0xd58d53),_0x53c90b=this[_0x3ae5e9(0x375)]((_0xd58d53-_0x1c6f35+0x1)/_0xd58d53),_0x51188b=(_0x59b22d-_0x3fd019*_0x2d506c)/(0x1-_0x2d506c);return _0x51188b+(_0x389a83-_0x51188b)*_0x53c90b;}}},Window_Base[_0xce50af(0xe6)][_0xce50af(0x1b9)]=function(){const _0x489967=_0xce50af;this['contents']['fontSize']+=VisuMZ[_0x489967(0x329)][_0x489967(0xa3)]['General'][_0x489967(0x204)],this['contents']['fontSize']=Math[_0x489967(0xa4)](this[_0x489967(0x1e9)][_0x489967(0x2ca)],VisuMZ[_0x489967(0x329)]['Settings'][_0x489967(0x15d)][_0x489967(0x325)]);},Window_Base[_0xce50af(0xe6)]['makeFontSmaller']=function(){const _0x20a2c2=_0xce50af;this[_0x20a2c2(0x1e9)][_0x20a2c2(0x2ca)]-=VisuMZ[_0x20a2c2(0x329)][_0x20a2c2(0xa3)][_0x20a2c2(0x15d)]['FontChangeValue'],this[_0x20a2c2(0x1e9)][_0x20a2c2(0x2ca)]=Math['max'](this[_0x20a2c2(0x1e9)]['fontSize'],VisuMZ[_0x20a2c2(0x329)][_0x20a2c2(0xa3)][_0x20a2c2(0x15d)][_0x20a2c2(0x356)]);},Window_Base[_0xce50af(0xe6)][_0xce50af(0x19c)]=function(_0x3a4eee){const _0x30a04b=_0xce50af,_0x258703=this[_0x30a04b(0x1e3)](_0x3a4eee);this[_0x30a04b(0x1e9)]['fontSize']=_0x258703['clamp'](VisuMZ['MessageCore'][_0x30a04b(0xa3)]['General'][_0x30a04b(0x356)],VisuMZ[_0x30a04b(0x329)][_0x30a04b(0xa3)][_0x30a04b(0x15d)][_0x30a04b(0x325)]);},Window_Base['prototype'][_0xce50af(0x1e2)]=function(_0x5bae9c){const _0x365243=_0xce50af;let _0x2ec3d9=this['contents'][_0x365243(0x2ca)];const _0x3e8ade=/\x1b({|}|FS)(\[(\d+)])?/gi;for(;;){const _0x2414b2=_0x3e8ade[_0x365243(0xae)](_0x5bae9c);if(!_0x2414b2)break;const _0x4c74fd=String(_0x2414b2[0x1])[_0x365243(0xfc)]();if(_0x4c74fd==='{')this[_0x365243(0x1b9)]();else{if(_0x4c74fd==='}')this[_0x365243(0x252)]();else _0x4c74fd==='FS'&&(this[_0x365243(0x1e9)][_0x365243(0x2ca)]=parseInt(_0x2414b2[0x3])[_0x365243(0x1bc)](VisuMZ[_0x365243(0x329)][_0x365243(0xa3)]['General'][_0x365243(0x356)],VisuMZ['MessageCore'][_0x365243(0xa3)][_0x365243(0x15d)]['FontBiggerCap']));}this['contents'][_0x365243(0x2ca)]>_0x2ec3d9&&(_0x2ec3d9=this[_0x365243(0x1e9)][_0x365243(0x2ca)]);}return _0x2ec3d9;},Window_Base[_0xce50af(0xe6)]['processPxTextCode']=function(_0x7eceda){const _0x5c98e9=_0xce50af;_0x7eceda['x']=this[_0x5c98e9(0x1e3)](_0x7eceda);if(VisuMZ['MessageCore']['Settings'][_0x5c98e9(0x15d)][_0x5c98e9(0x101)]){if(_0x5c98e9(0x11f)===_0x5c98e9(0x11f))_0x7eceda['x']+=_0x7eceda['startX'];else{for(_0x2affac of _0x45472d[_0x5c98e9(0x329)][_0x5c98e9(0x1e6)]){_0x1d9be3=_0x22e6db[_0x5c98e9(0x2c0)](_0x432b35[0x0],_0x2ed2be[0x1]);}return _0x6094c;}}},Window_Base['prototype']['processPyTextCode']=function(_0x598b8f){const _0x5a4006=_0xce50af;_0x598b8f['y']=this['obtainEscapeParam'](_0x598b8f),VisuMZ[_0x5a4006(0x329)][_0x5a4006(0xa3)][_0x5a4006(0x15d)]['RelativePXPY']&&(_0x598b8f['y']+=_0x598b8f[_0x5a4006(0x2fa)]);},Window_Base[_0xce50af(0xe6)][_0xce50af(0xc1)]=function(_0xb785d8){const _0xac558a=_0xce50af;this[_0xac558a(0x1e9)][_0xac558a(0xb8)]=!!_0xb785d8;},Window_Base[_0xce50af(0xe6)][_0xce50af(0x322)]=function(_0x5e1f9b){const _0x4be0f9=_0xce50af;this[_0x4be0f9(0x1e9)][_0x4be0f9(0x115)]=!!_0x5e1f9b;},Window_Base[_0xce50af(0xe6)][_0xce50af(0xa9)]=function(_0x3081ba){const _0x91d2c2=_0xce50af,_0x5a458f=this[_0x91d2c2(0x1e3)](_0x3081ba);if(!_0x3081ba[_0x91d2c2(0x21e)])return;switch(_0x5a458f){case 0x0:this['setTextAlignment']('default');return;case 0x1:this['setTextAlignment'](_0x91d2c2(0x282));break;case 0x2:this['setTextAlignment'](_0x91d2c2(0x1a6));break;case 0x3:this[_0x91d2c2(0x104)](_0x91d2c2(0x281));break;}this[_0x91d2c2(0x191)](_0x3081ba);},Window_Base[_0xce50af(0xe6)][_0xce50af(0x191)]=function(_0x3125de){const _0xc2a7b=_0xce50af;if(!_0x3125de[_0xc2a7b(0x21e)])return;if(_0x3125de[_0xc2a7b(0xc5)])return;if(this[_0xc2a7b(0x2b3)]()===_0xc2a7b(0x230))return;let _0x3f38ba=_0x3125de[_0xc2a7b(0x190)]['indexOf'](_0xc2a7b(0x300),_0x3125de[_0xc2a7b(0x27d)]+0x1),_0x3bb67d=_0x3125de[_0xc2a7b(0x190)][_0xc2a7b(0x19a)]('\x0a',_0x3125de[_0xc2a7b(0x27d)]+0x1);if(_0x3f38ba<0x0)_0x3f38ba=_0x3125de[_0xc2a7b(0x190)][_0xc2a7b(0x25b)]+0x1;if(_0x3bb67d>0x0)_0x3f38ba=Math[_0xc2a7b(0xa4)](_0x3f38ba,_0x3bb67d);const _0x2f7017=_0x3125de[_0xc2a7b(0x190)][_0xc2a7b(0x222)](_0x3125de[_0xc2a7b(0x27d)],_0x3f38ba),_0x571d99=this[_0xc2a7b(0xfe)](_0x2f7017)[_0xc2a7b(0x321)],_0x35e138=_0x3125de[_0xc2a7b(0x321)]||this[_0xc2a7b(0xcf)]-0x8,_0x34a9ad=this[_0xc2a7b(0x363)]===Window_Message&&$gameMessage['faceName']()!=='';switch(this[_0xc2a7b(0x2b3)]()){case _0xc2a7b(0x282):_0x3125de['x']=_0x3125de[_0xc2a7b(0x301)];break;case _0xc2a7b(0x1a6):_0x3125de['x']=_0x3125de[_0xc2a7b(0x301)],_0x3125de['x']+=Math[_0xc2a7b(0xd0)]((_0x35e138-_0x571d99)/0x2);_0x34a9ad&&(_0xc2a7b(0x11a)==='hMaDa'?_0x3125de['x']-=_0x3125de[_0xc2a7b(0x301)]/0x2:this[_0xc2a7b(0xe4)]=_0x1de401[_0xc2a7b(0x159)]()[_0xc2a7b(0xb4)](_0x13c0da-0x1));break;case _0xc2a7b(0x281):_0x3125de['x']=_0x35e138-_0x571d99+_0x3125de[_0xc2a7b(0x301)];if(_0x34a9ad){if(_0xc2a7b(0x10a)!==_0xc2a7b(0x10a))return _0x146994[_0xc2a7b(0x208)]();else _0x3125de['x']-=_0x3125de['startX'];}break;}},Window_Base[_0xce50af(0xe6)]['textSizeExTextAlignment']=function(_0x52f2d4){const _0x5067ce=_0xce50af;_0x52f2d4=_0x52f2d4[_0x5067ce(0x2c0)](/\x1b!/g,''),_0x52f2d4=_0x52f2d4[_0x5067ce(0x2c0)](/\x1b\|/g,''),_0x52f2d4=_0x52f2d4['replace'](/\x1b\./g,'');const _0x566c4a=this['createTextState'](_0x52f2d4,0x0,0x0,0x0),_0x394c24=this['getPreservedFontSettings']();return _0x566c4a[_0x5067ce(0x21e)]=![],this['processAllText'](_0x566c4a),this[_0x5067ce(0x33d)](_0x394c24),{'width':_0x566c4a['outputWidth'],'height':_0x566c4a['outputHeight']};},Window_Base['WORD_WRAP_PADDING']=VisuMZ['MessageCore']['Settings'][_0xce50af(0x1ff)][_0xce50af(0xea)]||0x0,Window_Base[_0xce50af(0xe6)][_0xce50af(0x2f0)]=function(_0x20b097){const _0x5ead22=_0xce50af,_0x1d3b67=(_0x20b097[_0x5ead22(0xc5)]?-0x1:0x1)*this[_0x5ead22(0x378)]('\x20');_0x20b097['x']+=_0x1d3b67;if(this[_0x5ead22(0x1e3)](_0x20b097)>0x0)_0x20b097['x']+=_0x1d3b67;if(_0x20b097[_0x5ead22(0xc5)])return;let _0x3b0f44=_0x20b097[_0x5ead22(0x190)][_0x5ead22(0x19a)](_0x5ead22(0x2e4),_0x20b097['index']+0x1),_0x1deeaf=_0x20b097['text']['indexOf']('\x0a',_0x20b097['index']+0x1);if(_0x3b0f44<0x0)_0x3b0f44=_0x20b097[_0x5ead22(0x190)][_0x5ead22(0x25b)]+0x1;if(_0x1deeaf>0x0)_0x3b0f44=Math[_0x5ead22(0xa4)](_0x3b0f44,_0x1deeaf);const _0x294291=_0x20b097[_0x5ead22(0x190)]['substring'](_0x20b097[_0x5ead22(0x27d)],_0x3b0f44),_0x26eb05=this[_0x5ead22(0xf4)](_0x294291)['width'];let _0x6bb597=_0x20b097[_0x5ead22(0x321)]||this[_0x5ead22(0xcf)];_0x6bb597-=Window_Base['WORD_WRAP_PADDING'];if(this[_0x5ead22(0x363)]===Window_Message){const _0x5b7bf2=$gameMessage[_0x5ead22(0x1d7)]()===''?0x0:ImageManager['faceWidth']+0x14;_0x6bb597-=_0x5b7bf2,VisuMZ[_0x5ead22(0x329)][_0x5ead22(0xa3)][_0x5ead22(0x1ff)]['TightWrap']&&(_0x6bb597-=_0x5b7bf2);}let _0x4c0586=![];if(_0x20b097['x']+_0x26eb05>_0x20b097[_0x5ead22(0x301)]+_0x6bb597)_0x4c0586=!![];if(_0x26eb05===0x0)_0x4c0586=!![];if(_0x4c0586){if(_0x5ead22(0x1c8)===_0x5ead22(0x1c8))_0x20b097['text']=_0x20b097[_0x5ead22(0x190)]['slice'](0x0,_0x20b097[_0x5ead22(0x27d)])+'\x0a'+_0x20b097['text']['substr'](_0x20b097[_0x5ead22(0x27d)]);else return _0x3fbe2d=_0x4a38c7[_0x5ead22(0x2c0)](/<B>/gi,'\x1bBOLD[1]'),_0xab6cbb=_0x57944a[_0x5ead22(0x2c0)](/<\/B>/gi,_0x5ead22(0xa6)),_0xc295a5=_0x226a55[_0x5ead22(0x2c0)](/<I>/gi,_0x5ead22(0x1c3)),_0x12691f=_0x47e639[_0x5ead22(0x2c0)](/<\/I>/gi,_0x5ead22(0x150)),_0x1d1ec1;}},Window_Base[_0xce50af(0xe6)][_0xce50af(0xf4)]=function(_0x109d3f){const _0x3cf380=_0xce50af,_0x20d467=this[_0x3cf380(0x167)](_0x109d3f,0x0,0x0,0x0),_0x2a6f61=this[_0x3cf380(0x1f2)]();return _0x20d467[_0x3cf380(0x21e)]=![],this[_0x3cf380(0x379)](![]),this[_0x3cf380(0x26b)](_0x20d467),this['setWordWrap'](!![]),this[_0x3cf380(0x33d)](_0x2a6f61),{'width':_0x20d467[_0x3cf380(0x366)],'height':_0x20d467[_0x3cf380(0x232)]};},Window_Base['prototype'][_0xce50af(0x31a)]=function(_0x5e4097){const _0x220eeb=_0xce50af;return this[_0x220eeb(0x1e3)](_0x5e4097);},Window_Base[_0xce50af(0xe6)][_0xce50af(0x226)]=function(_0xb3d07d){const _0x1a14b9=_0xce50af,_0x49b4cd=this[_0x1a14b9(0x2c5)](_0xb3d07d)[_0x1a14b9(0x181)](',');if(!_0xb3d07d[_0x1a14b9(0x21e)])return;const _0x5ec20a=_0x49b4cd[0x0][_0x1a14b9(0x1fc)](),_0x46e594=_0x49b4cd[0x1]||0x0,_0x353105=_0x49b4cd[0x2]||0x0,_0x2e5ccd=ImageManager['loadPicture'](_0x5ec20a),_0x452d8b=this[_0x1a14b9(0x1e9)]['paintOpacity'];_0x2e5ccd[_0x1a14b9(0x27b)](this[_0x1a14b9(0x33e)][_0x1a14b9(0x26e)](this,_0x2e5ccd,_0xb3d07d['x'],_0xb3d07d['y'],_0x46e594,_0x353105,_0x452d8b));},Window_Base[_0xce50af(0xe6)]['drawBackPicture']=function(_0x5bd11f,_0x378fab,_0x131fce,_0x5b6932,_0x31833a,_0xb7ddfb){const _0xb6dc9a=_0xce50af;_0x5b6932=_0x5b6932||_0x5bd11f[_0xb6dc9a(0x321)],_0x31833a=_0x31833a||_0x5bd11f[_0xb6dc9a(0x15e)],this['contentsBack'][_0xb6dc9a(0x31f)]=_0xb7ddfb,this[_0xb6dc9a(0x30c)][_0xb6dc9a(0x298)](_0x5bd11f,0x0,0x0,_0x5bd11f[_0xb6dc9a(0x321)],_0x5bd11f['height'],_0x378fab,_0x131fce,_0x5b6932,_0x31833a),this[_0xb6dc9a(0x30c)][_0xb6dc9a(0x31f)]=0xff;},Window_Base[_0xce50af(0xe6)][_0xce50af(0xda)]=function(_0x267003){const _0x4d4199=_0xce50af,_0x30c5f5=this[_0x4d4199(0x2c5)](_0x267003)[_0x4d4199(0x181)](',');if(!_0x267003[_0x4d4199(0x21e)])return;const _0x20fbdf=_0x30c5f5[0x0][_0x4d4199(0x1fc)](),_0x1b4812=ImageManager['loadPicture'](_0x20fbdf),_0x607eb1=JsonEx[_0x4d4199(0x2f1)](_0x267003),_0x506d7d=this[_0x4d4199(0x1e9)][_0x4d4199(0x31f)];_0x1b4812[_0x4d4199(0x27b)](this[_0x4d4199(0x165)][_0x4d4199(0x26e)](this,_0x1b4812,_0x607eb1,_0x506d7d));},Window_Base[_0xce50af(0xe6)][_0xce50af(0x165)]=function(_0x435869,_0x56c241,_0x3cf8f7){const _0xa5f9c6=_0xce50af,_0xbd09c8=_0x56c241[_0xa5f9c6(0x321)]||this[_0xa5f9c6(0xcf)],_0x5eb56d=this[_0xa5f9c6(0x34d)]!==undefined?this[_0xa5f9c6(0x156)]():this[_0xa5f9c6(0xcd)],_0xb4d4d1=_0xbd09c8/_0x435869[_0xa5f9c6(0x321)],_0x1a86ea=_0x5eb56d/_0x435869['height'],_0x3099c3=Math['min'](_0xb4d4d1,_0x1a86ea,0x1),_0xbd6ccd=this[_0xa5f9c6(0x34d)]!==undefined?(this[_0xa5f9c6(0x1eb)](0x0)['height']-this[_0xa5f9c6(0x13b)]())/0x2:0x0,_0x541aae=_0x435869['width']*_0x3099c3,_0x5f1621=_0x435869['height']*_0x3099c3,_0x1a18f7=Math['floor']((_0xbd09c8-_0x541aae)/0x2)+_0x56c241['startX'],_0x45880c=Math['floor']((_0x5eb56d-_0x5f1621)/0x2)+_0x56c241[_0xa5f9c6(0x2fa)]-_0xbd6ccd*0x2;this[_0xa5f9c6(0x30c)][_0xa5f9c6(0x31f)]=_0x3cf8f7,this['contentsBack'][_0xa5f9c6(0x298)](_0x435869,0x0,0x0,_0x435869[_0xa5f9c6(0x321)],_0x435869['height'],_0x1a18f7,_0x45880c,_0x541aae,_0x5f1621),this['contentsBack'][_0xa5f9c6(0x31f)]=0xff;},Window_Base[_0xce50af(0xe6)][_0xce50af(0x34f)]=function(_0x30d880){const _0x2eb065=_0xce50af,_0x5c1204=this[_0x2eb065(0x1e3)](_0x30d880);if(_0x30d880[_0x2eb065(0x21e)])this['setColorLock'](_0x5c1204>0x0);},Window_Base[_0xce50af(0xe6)][_0xce50af(0x2b4)]=function(_0x34df12){const _0x209f94=_0xce50af,_0x297fde=this[_0x209f94(0x1e3)](_0x34df12);this[_0x209f94(0x363)]===Window_Message&&_0x34df12[_0x209f94(0x21e)]&&(_0x209f94(0x369)==='kCfYM'?(_0x558bca=_0x3d8476||_0x461735['width'],_0x477f1c=_0x330d23||_0x282741[_0x209f94(0x15e)],this[_0x209f94(0x30c)][_0x209f94(0x31f)]=_0x584647,this[_0x209f94(0x30c)][_0x209f94(0x298)](_0x3a0b0f,0x0,0x0,_0x19402a[_0x209f94(0x321)],_0xb2abec[_0x209f94(0x15e)],_0x3a696e,_0x16e826,_0x10b1ea,_0x3fc61e),this[_0x209f94(0x30c)]['paintOpacity']=0xff):this[_0x209f94(0x18f)](_0x297fde));},Window_Help[_0xce50af(0xe6)]['resetWordWrap']=function(){this['setWordWrap']($gameSystem['isHelpWindowWordWrap']());},Window_Help['prototype']['isAutoColorAffected']=function(){return!![];},VisuMZ[_0xce50af(0x329)][_0xce50af(0x211)]=Window_Help[_0xce50af(0xe6)][_0xce50af(0x111)],Window_Help['prototype']['refresh']=function(){const _0x206295=_0xce50af;this['clearActorNameAutoColor'](),VisuMZ[_0x206295(0x329)][_0x206295(0x211)][_0x206295(0x2aa)](this),this[_0x206295(0x19d)]();},VisuMZ[_0xce50af(0x329)][_0xce50af(0x28d)]=Window_Options[_0xce50af(0xe6)][_0xce50af(0x9f)],Window_Options['prototype'][_0xce50af(0x9f)]=function(){const _0x347559=_0xce50af;VisuMZ[_0x347559(0x329)][_0x347559(0x28d)][_0x347559(0x2aa)](this),this[_0x347559(0x10f)]();},Window_Options[_0xce50af(0xe6)]['addMessageCoreCommands']=function(){const _0x386ed6=_0xce50af;if(VisuMZ[_0x386ed6(0x329)][_0x386ed6(0xa3)][_0x386ed6(0x35a)]['AddOption']){if(_0x386ed6(0x1fa)!==_0x386ed6(0x1fa))return!![];else this['addMessageCoreTextSpeedCommand']();}},Window_Options[_0xce50af(0xe6)]['addMessageCoreTextSpeedCommand']=function(){const _0x5a0aae=_0xce50af,_0x36e0cb=TextManager['messageCoreTextSpeed'],_0x43872b='textSpeed';this[_0x5a0aae(0x22d)](_0x36e0cb,_0x43872b);},VisuMZ[_0xce50af(0x329)][_0xce50af(0x1ba)]=Window_Options[_0xce50af(0xe6)][_0xce50af(0x192)],Window_Options[_0xce50af(0xe6)][_0xce50af(0x192)]=function(_0x4b6bdc){const _0xdbd637=_0xce50af,_0x5581c5=this[_0xdbd637(0x1a9)](_0x4b6bdc);if(_0x5581c5===_0xdbd637(0x2a2))return this['textSpeedStatusText']();return VisuMZ['MessageCore'][_0xdbd637(0x1ba)]['call'](this,_0x4b6bdc);},VisuMZ[_0xce50af(0x329)][_0xce50af(0x309)]=Window_Options[_0xce50af(0xe6)][_0xce50af(0x169)],Window_Options[_0xce50af(0xe6)][_0xce50af(0x169)]=function(_0x565105){const _0x1986f1=_0xce50af;if(_0x565105===_0x1986f1(0x2a2))return!![];return VisuMZ[_0x1986f1(0x329)][_0x1986f1(0x309)]['call'](this,_0x565105);},Window_Options[_0xce50af(0xe6)][_0xce50af(0x1e7)]=function(){const _0x471ac9=_0xce50af,_0x39ea53=this[_0x471ac9(0x23c)]('textSpeed');if(_0x39ea53>0xa)return'Mhflm'!=='Mhflm'?(this['processAutoSize'](_0x3a1d55,![],!![]),this['processAutoPosition']('none'),''):TextManager[_0x471ac9(0xd2)];else{if(_0x471ac9(0x132)===_0x471ac9(0x132))return _0x39ea53;else!_0x119b66[_0x471ac9(0x21e)]?_0x4ebaed[_0x471ac9(0xe6)][_0x471ac9(0x2b1)][_0x471ac9(0x2aa)](this,_0xc591a1,_0x15ec96):_0x5a92d3[_0x471ac9(0x329)]['Window_Message_processEscapeCharacter'][_0x471ac9(0x2aa)](this,_0x39c32f,_0x12395c);}},VisuMZ[_0xce50af(0x329)][_0xce50af(0x299)]=Window_Options['prototype'][_0xce50af(0x255)],Window_Options[_0xce50af(0xe6)][_0xce50af(0x255)]=function(_0x1b6b99,_0x332182,_0x15afaa){const _0x58bcad=_0xce50af;if(_0x1b6b99==='textSpeed')return this[_0x58bcad(0x2c9)](_0x1b6b99,_0x332182,_0x15afaa);VisuMZ[_0x58bcad(0x329)][_0x58bcad(0x299)][_0x58bcad(0x2aa)](this,_0x1b6b99,_0x332182,_0x15afaa);},Window_Options[_0xce50af(0xe6)][_0xce50af(0x2c9)]=function(_0x507d32,_0x26c69c,_0x8a56c1){const _0x35bced=_0xce50af,_0x24c643=this[_0x35bced(0x23c)](_0x507d32),_0x2d3d8c=0x1,_0x24d097=_0x24c643+(_0x26c69c?_0x2d3d8c:-_0x2d3d8c);_0x24d097>0xb&&_0x8a56c1?this[_0x35bced(0x16c)](_0x507d32,0x1):this[_0x35bced(0x16c)](_0x507d32,_0x24d097[_0x35bced(0x1bc)](0x1,0xb));},Window_Message['prototype'][_0xce50af(0x233)]=function(){const _0x544e0a=_0xce50af;let _0x3c8004=Window_Base['prototype'][_0x544e0a(0x233)][_0x544e0a(0x2aa)](this);return _0x3c8004-=this[_0x544e0a(0x374)](),_0x3c8004;},Window_Message[_0xce50af(0xe6)][_0xce50af(0x21d)]=function(){const _0x3ba78e=_0xce50af;Window_Base[_0x3ba78e(0xe6)][_0x3ba78e(0x21d)][_0x3ba78e(0x2aa)](this);if(VisuMZ[_0x3ba78e(0x329)]['Settings'][_0x3ba78e(0x15d)][_0x3ba78e(0x124)]){if(_0x3ba78e(0x1e8)!==_0x3ba78e(0xc4))this[_0x3ba78e(0x125)]();else return this['processAutoSize'](_0x2c2763,!![],!![]),this[_0x3ba78e(0x1b4)]('none'),'';}},Window_Message[_0xce50af(0xe6)][_0xce50af(0x125)]=function(){const _0x2571a4=_0xce50af;this[_0x2571a4(0x1a5)]['x']=Math['round'](this[_0x2571a4(0x321)]/0x2),this[_0x2571a4(0x1a5)][_0x2571a4(0x36e)]['x']=0.5,this[_0x2571a4(0x1a5)][_0x2571a4(0x10b)]['x']=Graphics[_0x2571a4(0x321)];},VisuMZ['MessageCore'][_0xce50af(0x35e)]=Window_Message[_0xce50af(0xe6)][_0xce50af(0x2a8)],Window_Message[_0xce50af(0xe6)][_0xce50af(0x2a8)]=function(){const _0x1e9bd4=_0xce50af;VisuMZ[_0x1e9bd4(0x329)][_0x1e9bd4(0x35e)][_0x1e9bd4(0x2aa)](this),this[_0x1e9bd4(0x2fe)](),this[_0x1e9bd4(0x19d)](),this[_0x1e9bd4(0x2e0)](![]),this['setTextAlignment'](_0x1e9bd4(0x230)),this[_0x1e9bd4(0x259)](VisuMZ[_0x1e9bd4(0x329)]['Settings'][_0x1e9bd4(0x15d)][_0x1e9bd4(0x26c)]);},Window_Message[_0xce50af(0xe6)][_0xce50af(0x19d)]=function(){this['setWordWrap']($gameSystem['isMessageWindowWordWrap']());},Window_Message[_0xce50af(0xe6)][_0xce50af(0x352)]=function(){return!![];},Window_Message[_0xce50af(0xe6)][_0xce50af(0x259)]=function(_0x458e11){const _0x2fc730=_0xce50af,_0x4c0fac=0xb-ConfigManager[_0x2fc730(0x2a2)];_0x458e11=Math[_0x2fc730(0x179)](_0x458e11*_0x4c0fac),this[_0x2fc730(0x295)]=_0x458e11,this[_0x2fc730(0x276)]=_0x458e11;},VisuMZ[_0xce50af(0x329)][_0xce50af(0x2d7)]=Window_Message[_0xce50af(0xe6)]['isTriggered'],Window_Message[_0xce50af(0xe6)][_0xce50af(0x164)]=function(){const _0x448c78=_0xce50af;return VisuMZ[_0x448c78(0x329)][_0x448c78(0x2d7)][_0x448c78(0x2aa)](this)||Input[_0x448c78(0x30e)](VisuMZ[_0x448c78(0x329)][_0x448c78(0xa3)][_0x448c78(0x15d)][_0x448c78(0x2ec)]);},VisuMZ[_0xce50af(0x329)][_0xce50af(0x100)]=Window_Message[_0xce50af(0xe6)][_0xce50af(0x33f)],Window_Message[_0xce50af(0xe6)][_0xce50af(0x33f)]=function(){const _0x5e6e37=_0xce50af;let _0x418e86=this['y'];this['x']=Math[_0x5e6e37(0x179)]((Graphics[_0x5e6e37(0x1d4)]-this[_0x5e6e37(0x321)])/0x2),VisuMZ[_0x5e6e37(0x329)][_0x5e6e37(0x100)][_0x5e6e37(0x2aa)](this);if(this[_0x5e6e37(0xe4)])this['y']=_0x418e86;this[_0x5e6e37(0x242)](),this['updateForcedPlacement'](),this[_0x5e6e37(0x36d)]();},VisuMZ['MessageCore'][_0xce50af(0x17d)]=Window_Message[_0xce50af(0xe6)][_0xce50af(0x334)],Window_Message[_0xce50af(0xe6)]['newPage']=function(_0x55b2ff){const _0x1650eb=_0xce50af;this[_0x1650eb(0x1a2)](_0x55b2ff),this[_0x1650eb(0x249)](_0x55b2ff),VisuMZ[_0x1650eb(0x329)][_0x1650eb(0x17d)][_0x1650eb(0x2aa)](this,_0x55b2ff),this[_0x1650eb(0x2c2)]();},Window_Message[_0xce50af(0xe6)]['convertNewPageTextStateMacros']=function(_0x517edc){const _0x4d5dba=_0xce50af;if(!_0x517edc)return;this['_macroBypassWordWrap']=![],_0x517edc[_0x4d5dba(0x190)]=this[_0x4d5dba(0x2d6)](_0x517edc[_0x4d5dba(0x190)]),this[_0x4d5dba(0x358)]&&(_0x517edc[_0x4d5dba(0x190)]=this[_0x4d5dba(0x20d)](_0x517edc['text']),this['_macroBypassWordWrap']=!![]);},Window_Message[_0xce50af(0xe6)][_0xce50af(0x20d)]=function(_0x39d695){const _0x2415d9=_0xce50af;if(this[_0x2415d9(0xa5)])return _0x39d695;return Window_Base[_0x2415d9(0xe6)][_0x2415d9(0x20d)][_0x2415d9(0x2aa)](this,_0x39d695);},Window_Message['prototype'][_0xce50af(0x249)]=function(_0xc2351d){const _0x20f3bb=_0xce50af;this[_0x20f3bb(0x12d)](_0xc2351d),this[_0x20f3bb(0x227)](_0xc2351d),this['updateDimensions']();},VisuMZ[_0xce50af(0x329)][_0xce50af(0x29b)]=Window_Message[_0xce50af(0xe6)]['terminateMessage'],Window_Message[_0xce50af(0xe6)][_0xce50af(0xbc)]=function(){const _0x3a43b1=_0xce50af;VisuMZ[_0x3a43b1(0x329)][_0x3a43b1(0x29b)]['call'](this),this['clearFlags']();if(this['_messagePositionReset'])this[_0x3a43b1(0x312)]();},Window_Message[_0xce50af(0xe6)][_0xce50af(0x35c)]=function(){const _0x2c7683=_0xce50af;this['width']=$gameSystem[_0x2c7683(0x20e)]()+this[_0x2c7683(0x20c)]();;this['width']=Math['min'](Graphics[_0x2c7683(0x321)],this['width']);const _0x1b642d=$gameSystem['getMessageWindowRows']();this[_0x2c7683(0x15e)]=SceneManager[_0x2c7683(0x127)][_0x2c7683(0x1f1)](_0x1b642d,![])+this[_0x2c7683(0x374)](),this['height']=Math['min'](Graphics[_0x2c7683(0x15e)],this['height']);if($gameTemp[_0x2c7683(0x11d)])this[_0x2c7683(0x287)]();},Window_Message[_0xce50af(0xe6)][_0xce50af(0x20c)]=function(){return 0x0;},Window_Message['prototype'][_0xce50af(0x374)]=function(){return 0x0;},Window_Message['prototype'][_0xce50af(0x287)]=function(){const _0x5b0283=_0xce50af;this['x']=(Graphics[_0x5b0283(0x1d4)]-this[_0x5b0283(0x321)])/0x2,$gameTemp['_centerMessageWindow']=undefined,this[_0x5b0283(0x36d)]();},Window_Message[_0xce50af(0xe6)][_0xce50af(0x1e4)]=function(){const _0x10418d=_0xce50af,_0x40c467={'x':this['x'],'y':this['y']};Window_Base[_0x10418d(0xe6)][_0x10418d(0x1e4)][_0x10418d(0x2aa)](this),this[_0x10418d(0x372)](_0x40c467);},Window_Message['prototype']['canMove']=function(){return!![];},Window_Message[_0xce50af(0xe6)][_0xce50af(0x372)]=function(_0x37852e){const _0x14e795=_0xce50af;this[_0x14e795(0x1b1)]&&(this[_0x14e795(0x1b1)]['x']+=this['x']-_0x37852e['x'],this[_0x14e795(0x1b1)]['y']+=this['y']-_0x37852e['y']);},Window_Message[_0xce50af(0xe6)][_0xce50af(0x318)]=function(_0x4cd0e0,_0x14a6b7){const _0x17da95=_0xce50af;this[_0x17da95(0x2ac)](this[_0x17da95(0x1be)]['x'],this[_0x17da95(0x13d)]*(Graphics[_0x17da95(0x1a3)]-this['height'])/0x2,this[_0x17da95(0x1be)]['width'],this[_0x17da95(0x1be)][_0x17da95(0x15e)],_0x4cd0e0,_0x14a6b7);},Window_Message[_0xce50af(0xe6)][_0xce50af(0x31a)]=function(_0x11e061){const _0x541d2b=_0xce50af,_0x10baac=Window_Base[_0x541d2b(0xe6)][_0x541d2b(0x31a)]['call'](this,_0x11e061);_0x11e061[_0x541d2b(0x21e)]&&this[_0x541d2b(0x28a)](_0x10baac);},Window_Message['prototype'][_0xce50af(0x28a)]=function(_0x4d218d){const _0x203ec5=_0xce50af;if($gameParty[_0x203ec5(0x2e2)]()){}else $gameMap[_0x203ec5(0x229)](_0x4d218d);},Window_Message[_0xce50af(0xe6)][_0xce50af(0x224)]=function(_0x244ec6){const _0x1ad3b5=_0xce50af;this['_textDelayCount']--,this[_0x1ad3b5(0x295)]<=0x0&&(this[_0x1ad3b5(0xd8)](_0x244ec6),Window_Base[_0x1ad3b5(0xe6)][_0x1ad3b5(0x224)][_0x1ad3b5(0x2aa)](this,_0x244ec6));},Window_Message[_0xce50af(0xe6)][_0xce50af(0xd8)]=function(_0x5350ae){const _0x149a63=_0xce50af;this['_textDelayCount']=this[_0x149a63(0x276)];if(this['_textDelay']<=0x0)this[_0x149a63(0x184)]=!![];},VisuMZ[_0xce50af(0x329)][_0xce50af(0x2b0)]=Window_Message[_0xce50af(0xe6)][_0xce50af(0x2b1)],Window_Message[_0xce50af(0xe6)][_0xce50af(0x2b1)]=function(_0x5a3686,_0x7b7f4a){const _0x1e23db=_0xce50af;!_0x7b7f4a[_0x1e23db(0x21e)]?Window_Base['prototype'][_0x1e23db(0x2b1)][_0x1e23db(0x2aa)](this,_0x5a3686,_0x7b7f4a):VisuMZ[_0x1e23db(0x329)]['Window_Message_processEscapeCharacter'][_0x1e23db(0x2aa)](this,_0x5a3686,_0x7b7f4a);},Window_Message[_0xce50af(0xe6)]['prepareForcedPositionEscapeCharacters']=function(_0x4a4358){const _0x595f93=_0xce50af;let _0xa1c5b2=_0x4a4358[_0x595f93(0x190)];this[_0x595f93(0xb7)]={};if(this['isWordWrapEnabled']())return _0xa1c5b2;_0xa1c5b2=_0xa1c5b2['replace'](/<POSITION:[ ]*(.*)>/gi,(_0x28d71f,_0x2c1ea0)=>{const _0x5f0bfe=_0x595f93,_0x354bf9=_0x2c1ea0[_0x5f0bfe(0x181)](',')[_0x5f0bfe(0x28e)](_0x5d5a76=>Number(_0x5d5a76)||0x0);if(_0x354bf9[0x0]!==undefined)this[_0x5f0bfe(0xb7)]['x']=Number(_0x354bf9[0x0]);if(_0x354bf9[0x1]!==undefined)this[_0x5f0bfe(0xb7)]['y']=Number(_0x354bf9[0x1]);if(_0x354bf9[0x2]!==undefined)this[_0x5f0bfe(0xb7)][_0x5f0bfe(0x321)]=Number(_0x354bf9[0x2]);if(_0x354bf9[0x3]!==undefined)this['_forcedPosition']['height']=Number(_0x354bf9[0x3]);return'';}),_0xa1c5b2=_0xa1c5b2['replace'](/<COORDINATES:[ ]*(.*)>/gi,(_0x427df4,_0x3a5a04)=>{const _0x56291a=_0x595f93,_0x1b8f9b=_0x3a5a04[_0x56291a(0x181)](',')['map'](_0x23172b=>Number(_0x23172b)||0x0);if(_0x1b8f9b[0x0]!==undefined)this[_0x56291a(0xb7)]['x']=Number(_0x1b8f9b[0x0]);if(_0x1b8f9b[0x1]!==undefined)this['_forcedPosition']['y']=Number(_0x1b8f9b[0x1]);return'';}),_0xa1c5b2=_0xa1c5b2[_0x595f93(0x2c0)](/<DIMENSIONS:[ ]*(.*)>/gi,(_0x2cc480,_0x37dff6)=>{const _0x433346=_0x595f93,_0x3f8797=_0x37dff6[_0x433346(0x181)](',')[_0x433346(0x28e)](_0x224cf8=>Number(_0x224cf8)||0x0);if(_0x3f8797[0x0]!==undefined)this['_forcedPosition']['width']=Number(_0x3f8797[0x2]);if(_0x3f8797[0x1]!==undefined)this[_0x433346(0xb7)]['height']=Number(_0x3f8797[0x3]);return'';}),_0xa1c5b2=_0xa1c5b2[_0x595f93(0x2c0)](/<OFFSET:[ ]*(.*)>/gi,(_0x3ac666,_0x320c95)=>{const _0x5841d8=_0x595f93;if('jhxCx'!=='uEMtB'){const _0x4c3fac=_0x320c95[_0x5841d8(0x181)](',')[_0x5841d8(0x28e)](_0x29b5ce=>Number(_0x29b5ce)||0x0);let _0x223f00=_0x4c3fac[0x0]||0x0,_0x34ea89=_0x4c3fac[0x1]||0x0;return $gameSystem[_0x5841d8(0x18d)](_0x223f00,_0x34ea89),'';}else _0x3ac530='';}),_0x4a4358['text']=_0xa1c5b2;},Window_Message['prototype'][_0xce50af(0x242)]=function(){const _0x3a4c0f=_0xce50af,_0x2f57e9=$gameSystem[_0x3a4c0f(0xfa)]();this['x']+=_0x2f57e9['x'],this['y']+=_0x2f57e9['y'];},Window_Message[_0xce50af(0xe6)][_0xce50af(0x1cd)]=function(){const _0x517c90=_0xce50af;this[_0x517c90(0xb7)]=this['_forcedPosition']||{};const _0x208e37=['x','y',_0x517c90(0x321),_0x517c90(0x15e)];for(const _0x441a0b of _0x208e37){this[_0x517c90(0xb7)][_0x441a0b]!==undefined&&(this[_0x441a0b]=Number(this[_0x517c90(0xb7)][_0x441a0b]));}},Window_Message[_0xce50af(0xe6)][_0xce50af(0x227)]=function(_0x496c40){const _0x2045d6=_0xce50af;let _0x45ba06=_0x496c40[_0x2045d6(0x190)];_0x45ba06=_0x45ba06[_0x2045d6(0x2c0)](/<(?:AUTO|AUTOSIZE|AUTO SIZE)>/gi,()=>{const _0x370380=_0x2045d6;return this[_0x370380(0x330)](_0x45ba06,!![],!![]),this[_0x370380(0x1b4)]('none'),'';}),_0x45ba06=_0x45ba06[_0x2045d6(0x2c0)](/<(?:AUTOWIDTH|AUTO WIDTH)>/gi,()=>{const _0x5573f5=_0x2045d6;if('pauId'!=='XQZgn')return this[_0x5573f5(0x330)](_0x45ba06,!![],![]),this[_0x5573f5(0x1b4)](_0x5573f5(0x30d)),'';else{const _0x11e2eb=this[_0x5573f5(0x2e9)],_0x116d3b=_0x11e2eb?_0x11e2eb['y']:0x0,_0x58afda=_0x11e2eb?_0x11e2eb[_0x5573f5(0x15e)]:0x0,_0x20c625=_0x5bbde5['boxHeight']/0x2;return _0x116d3b<_0x20c625&&_0x116d3b+_0x58afda>_0x20c625?0x4:_0xe95b56['getChoiceListMaxRows']();}}),_0x45ba06=_0x45ba06[_0x2045d6(0x2c0)](/<(?:AUTOHEIGHT|AUTO HEIGHT)>/gi,()=>{return this['processAutoSize'](_0x45ba06,![],!![]),this['processAutoPosition']('none'),'';});if(SceneManager[_0x2045d6(0x327)]())_0x45ba06=_0x45ba06[_0x2045d6(0x2c0)](/<(?:AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi,(_0x4c98eb,_0x2f2510)=>{const _0xd05d02=_0x2045d6;return this[_0xd05d02(0x330)](_0x45ba06,!![],!![]),this[_0xd05d02(0x1b4)](_0xd05d02(0x35d),Number(_0x2f2510)||0x1),'';}),_0x45ba06=_0x45ba06['replace'](/<(?:AUTOPARTY|AUTO PARTY):[ ](.*?)>/gi,(_0x513ba8,_0x40ece2)=>{const _0x351f41=_0x2045d6;if(_0x351f41(0x2a1)===_0x351f41(0x120))this[_0x351f41(0x2f0)](_0x1a31d3);else return this[_0x351f41(0x330)](_0x45ba06,!![],!![]),this[_0x351f41(0x1b4)](_0x351f41(0x28b),Number(_0x40ece2)||0x0),'';}),_0x45ba06=_0x45ba06[_0x2045d6(0x2c0)](/<(?:AUTOENEMY|AUTO ENEMY):[ ](.*?)>/gi,(_0xac8aba,_0x124475)=>{const _0x30dad0=_0x2045d6;return _0x30dad0(0x32b)!=='fsiom'?(this[_0x30dad0(0x330)](_0x45ba06,!![],!![]),this[_0x30dad0(0x1b4)](_0x30dad0(0x19b),Number(_0x124475)||0x0),''):(_0x49a876=_0x1c8cf1['replace'](/(\W)/gi,(_0x30e5b5,_0x13d37d)=>'\x5c%1'[_0x30dad0(0x186)](_0x13d37d)),_0x1925bc);});else SceneManager[_0x2045d6(0xce)]()&&(_0x2045d6(0x254)!=='URiox'?(_0x45ba06=_0x45ba06[_0x2045d6(0x2c0)](/<(?:AUTOPLAYER|AUTO PLAYER)>/gi,(_0x280851,_0x850ea2)=>{const _0x2713d8=_0x2045d6;return this['processAutoSize'](_0x45ba06,!![],!![]),this[_0x2713d8(0x1b4)](_0x2713d8(0x286),0x0),'';}),_0x45ba06=_0x45ba06[_0x2045d6(0x2c0)](/<(?:AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi,(_0x5a64a0,_0x10c102)=>{const _0x2dfa1b=_0x2045d6;return this[_0x2dfa1b(0x330)](_0x45ba06,!![],!![]),this[_0x2dfa1b(0x1b4)](_0x2dfa1b(0x1bd),Number(_0x10c102)||0x1),'';}),_0x45ba06=_0x45ba06[_0x2045d6(0x2c0)](/<(?:AUTOPARTY|AUTO PARTY):[ ](.*?)>/gi,(_0x45422e,_0x372155)=>{const _0x5be4d4=_0x2045d6;if(_0x5be4d4(0x2b8)===_0x5be4d4(0x11e))_0x57cf0f[_0x5be4d4(0x188)](_0x272195[_0x5be4d4(0x364)])&&(this[_0x5be4d4(0x358)]=!![],_0x44a09b=_0x4d53a6[_0x5be4d4(0x2c0)](_0x1227b7[_0x5be4d4(0x364)],_0x51f2dc[_0x5be4d4(0x2d0)][_0x5be4d4(0x26e)](this)));else return this[_0x5be4d4(0x330)](_0x45ba06,!![],!![]),this[_0x5be4d4(0x1b4)](_0x5be4d4(0x2df),Number(_0x372155)||0x0),'';}),_0x45ba06=_0x45ba06['replace'](/<(?:AUTOEVENT|AUTO EVENT):[ ](.*?)>/gi,(_0x42e32,_0x5b1142)=>{const _0x5caec5=_0x2045d6;if(_0x5caec5(0x10c)!==_0x5caec5(0x342))return this['processAutoSize'](_0x45ba06,!![],!![]),this[_0x5caec5(0x1b4)](_0x5caec5(0x26a),Number(_0x5b1142)||0x0),'';else{const _0x359bb6=_0x5ce013['$1'][_0x5caec5(0x181)](',')['map'](_0xa59136=>_0x265744(_0xa59136)||0x0);for(const _0x38f53e of _0x359bb6){if(!_0xf592bf['value'](_0x38f53e))return!![];}return![];}})):this[_0x2045d6(0x379)](_0x5abde9[_0x2045d6(0x284)]()));_0x496c40['text']=_0x45ba06;},Window_Message[_0xce50af(0x1ac)]=/<(?:AUTO|AUTOSIZE|AUTO SIZE|AUTOWIDTH|AUTO WIDTH|AUTOHEIGHT|AUTO HEIGHT|AUTOPLAYER|AUTO PLAYER)>/gi,Window_Message[_0xce50af(0x370)]=/<(?:AUTOPARTY|AUTO PARTY|AUTOPLAYER|AUTO PLAYER|AUTOEVENT|AUTO EVENT|AUTOENEMY|AUTO ENEMY|AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi,Window_Message['prototype'][_0xce50af(0x330)]=function(_0x28c6d6,_0x837800,_0x57cdd5){const _0x5a91cc=_0xce50af;_0x28c6d6=_0x28c6d6[_0x5a91cc(0x2c0)](Window_Message[_0x5a91cc(0x1ac)],''),_0x28c6d6=_0x28c6d6[_0x5a91cc(0x2c0)](Window_Message[_0x5a91cc(0x370)],''),this[_0x5a91cc(0x112)]=!![];const _0x94b455=this[_0x5a91cc(0x2f2)](_0x28c6d6);if(_0x837800){if(_0x5a91cc(0x20f)===_0x5a91cc(0x20f)){let _0x16333e=_0x94b455[_0x5a91cc(0x321)]+$gameSystem['windowPadding']()*0x2+0x6;const _0x25b383=$gameMessage[_0x5a91cc(0x1d7)]()!=='',_0x1079af=ImageManager[_0x5a91cc(0x32c)],_0x321256=0x14;_0x16333e+=_0x25b383?_0x1079af+_0x321256:0x4;if(_0x16333e%0x2!==0x0)_0x16333e+=0x1;$gameSystem[_0x5a91cc(0x260)](_0x16333e);}else{_0x3f39c1[_0x5a91cc(0x329)][_0x5a91cc(0x16d)]['call'](this,_0x3e7c40);const _0x4f9719=_0x1bd5fa['MessageCore']['Settings'][_0x5a91cc(0x149)];_0x11160d['MessageCore']['CreateAutoColorFor'](_0xd21dec,_0x4f9719['Enemies']);}}if(_0x57cdd5){let _0x3a8b4d=Math['ceil'](_0x94b455[_0x5a91cc(0x15e)]/this[_0x5a91cc(0x13b)]());$gameSystem['setMessageWindowRows'](_0x3a8b4d);}this[_0x5a91cc(0x2c3)](),this[_0x5a91cc(0x112)]=![],this[_0x5a91cc(0x14b)]=!![];},Window_Message[_0xce50af(0xe6)][_0xce50af(0x2c3)]=function(){const _0x4ce243=_0xce50af;this[_0x4ce243(0x35c)](),this[_0x4ce243(0x33f)](),this[_0x4ce243(0x287)](),this['updateTransform'](),this[_0x4ce243(0x1e9)][_0x4ce243(0x23a)](),this['createContents']();},Window_Message[_0xce50af(0xe6)][_0xce50af(0x1b4)]=function(_0x2626f3,_0x3f0339){const _0x38fcbf=_0xce50af;switch(_0x2626f3[_0x38fcbf(0x18e)]()[_0x38fcbf(0x1fc)]()){case'battle\x20actor':this[_0x38fcbf(0xe4)]=$gameActors['actor'](_0x3f0339);break;case _0x38fcbf(0x28b):this['_autoPositionTarget']=$gameParty[_0x38fcbf(0x2da)]()[_0x3f0339-0x1];break;case _0x38fcbf(0x19b):this['_autoPositionTarget']=$gameTroop[_0x38fcbf(0x2da)]()[_0x3f0339-0x1];break;case'map\x20player':this[_0x38fcbf(0xe4)]=$gamePlayer;break;case _0x38fcbf(0x1bd):const _0x3a1976=$gameActors[_0x38fcbf(0x2e8)](_0x3f0339)[_0x38fcbf(0x27d)]();_0x3a1976===0x0?_0x38fcbf(0x2a9)===_0x38fcbf(0x1ea)?(_0x4ee3c7[_0x38fcbf(0x329)][_0x38fcbf(0x2ad)][_0x38fcbf(0x2aa)](this),this[_0x38fcbf(0xf7)]()):this[_0x38fcbf(0xe4)]=$gamePlayer:this['_autoPositionTarget']=$gamePlayer[_0x38fcbf(0x159)]()[_0x38fcbf(0xb4)](_0x3a1976-0x1);break;case'map\x20party':if(_0x3f0339===0x1){if('ROlsJ'===_0x38fcbf(0x22c))this[_0x38fcbf(0xe4)]=$gamePlayer;else{if(this['_MessageCoreSettings']===_0x2bd08b)this['initMessageCore']();if(this[_0x38fcbf(0xf0)][_0x38fcbf(0x239)]===_0x15eb92)this[_0x38fcbf(0x18b)]();this['_MessageCoreSettings']['choiceTextAlign']=_0x3f68a6[_0x38fcbf(0x18e)]();}}else{if('SMeTG'!=='SMeTG'){const _0x4dfcc7=_0x3bdc51[_0x38fcbf(0x1d7)]()===''?0x0:_0x5c7fcb[_0x38fcbf(0x32c)]+0x14;_0x47f26c-=_0x4dfcc7,_0x292ac5[_0x38fcbf(0x329)][_0x38fcbf(0xa3)]['WordWrap'][_0x38fcbf(0x2f3)]&&(_0x1476cc-=_0x4dfcc7);}else this[_0x38fcbf(0xe4)]=$gamePlayer[_0x38fcbf(0x159)]()[_0x38fcbf(0xb4)](_0x3f0339-0x2);}break;case _0x38fcbf(0x26a):this[_0x38fcbf(0xe4)]=$gameMap['event'](_0x3f0339);break;}if(this[_0x38fcbf(0xe4)]){if('BImWp'===_0x38fcbf(0x2d3))return this[_0x38fcbf(0x2fc)];else this[_0x38fcbf(0x143)]();}},VisuMZ[_0xce50af(0x329)][_0xce50af(0x170)]=Window_Message[_0xce50af(0xe6)][_0xce50af(0x2f7)],Window_Message['prototype'][_0xce50af(0x2f7)]=function(){const _0x30c569=_0xce50af;this[_0x30c569(0x143)](),VisuMZ[_0x30c569(0x329)][_0x30c569(0x170)][_0x30c569(0x2aa)](this);},Window_Message[_0xce50af(0xe6)][_0xce50af(0x143)]=function(){const _0x4bd6fc=_0xce50af;if(!this['_autoPositionTarget'])return;const _0x19cb7a=SceneManager[_0x4bd6fc(0x127)];if(!_0x19cb7a)return;if(!_0x19cb7a[_0x4bd6fc(0x263)])return;const _0x3441a4=_0x19cb7a[_0x4bd6fc(0x263)][_0x4bd6fc(0x133)](this['_autoPositionTarget']);if(!_0x3441a4)return;let _0x44c82e=_0x3441a4['x'];_0x44c82e-=this[_0x4bd6fc(0x321)]/0x2,_0x44c82e-=(Graphics[_0x4bd6fc(0x321)]-Graphics[_0x4bd6fc(0x1d4)])/0x2;let _0x1a49f2=_0x3441a4['y'];_0x1a49f2-=this[_0x4bd6fc(0x15e)],_0x1a49f2-=(Graphics[_0x4bd6fc(0x15e)]-Graphics[_0x4bd6fc(0x1a3)])/0x2,_0x1a49f2-=_0x3441a4[_0x4bd6fc(0x15e)]+0x8;const _0x2c6b9e=$gameSystem[_0x4bd6fc(0xfa)]();_0x44c82e+=_0x2c6b9e['x'],_0x1a49f2+=_0x2c6b9e['y'],this['x']=Math['round'](_0x44c82e),this['y']=Math['round'](_0x1a49f2),this[_0x4bd6fc(0x36d)](!![],![]),this[_0x4bd6fc(0x1b1)][_0x4bd6fc(0x33f)]();},Window_Message[_0xce50af(0xe6)][_0xce50af(0x312)]=function(){const _0x304a34=_0xce50af;this['_messagePositionReset']=![],this[_0x304a34(0xe4)]=undefined,$gameSystem[_0x304a34(0x18b)](),this[_0x304a34(0x2c3)](),this[_0x304a34(0x196)]=0x0;},Window_Message[_0xce50af(0xe6)][_0xce50af(0x147)]=function(_0x238565){const _0x392824=_0xce50af;return Window_Base['prototype']['preConvertEscapeCharacters'][_0x392824(0x2aa)](this,_0x238565);},Window_Message[_0xce50af(0xe6)][_0xce50af(0x333)]=function(_0x1f713a){const _0x117923=_0xce50af;return Window_Base[_0x117923(0xe6)][_0x117923(0x333)][_0x117923(0x2aa)](this,_0x1f713a);},Window_Message[_0xce50af(0xe6)][_0xce50af(0x13c)]=function(_0x86f113){const _0x54bde5=_0xce50af;this[_0x54bde5(0x202)](_0x86f113),Window_Base['prototype'][_0x54bde5(0x13c)]['call'](this,_0x86f113),this[_0x54bde5(0xe8)](_0x86f113);},Window_Message[_0xce50af(0xe6)][_0xce50af(0x202)]=function(_0x15c9a2){},Window_Message[_0xce50af(0xe6)][_0xce50af(0xe8)]=function(_0x4b2e25){},Window_NameBox[_0xce50af(0xe6)][_0xce50af(0x352)]=function(){return![];},Window_NameBox[_0xce50af(0xe6)][_0xce50af(0xa2)]=function(){const _0x3cf4fe=_0xce50af;Window_Base[_0x3cf4fe(0xe6)]['resetTextColor'][_0x3cf4fe(0x2aa)](this),this[_0x3cf4fe(0x234)](this[_0x3cf4fe(0x17c)]());},Window_NameBox['prototype']['defaultColor']=function(){const _0xf9b240=_0xce50af,_0x163c2d=VisuMZ[_0xf9b240(0x329)][_0xf9b240(0xa3)][_0xf9b240(0x15d)][_0xf9b240(0x253)];return ColorManager[_0xf9b240(0x323)](_0x163c2d);},VisuMZ[_0xce50af(0x329)][_0xce50af(0x303)]=Window_NameBox['prototype'][_0xce50af(0x33f)],Window_NameBox[_0xce50af(0xe6)][_0xce50af(0x33f)]=function(){const _0x536169=_0xce50af;VisuMZ[_0x536169(0x329)][_0x536169(0x303)]['call'](this),this[_0x536169(0x1fd)](),this[_0x536169(0x1db)](),this[_0x536169(0x36d)](),this[_0x536169(0x264)]();},Window_NameBox[_0xce50af(0xe6)][_0xce50af(0x147)]=function(_0x34b876){const _0x456764=_0xce50af;return _0x34b876=_0x34b876[_0x456764(0x2c0)](/<LEFT>/gi,this[_0x456764(0x267)][_0x456764(0x26e)](this,0x0)),_0x34b876=_0x34b876[_0x456764(0x2c0)](/<CENTER>/gi,this[_0x456764(0x267)][_0x456764(0x26e)](this,0x5)),_0x34b876=_0x34b876['replace'](/<RIGHT>/gi,this[_0x456764(0x267)][_0x456764(0x26e)](this,0xa)),_0x34b876=_0x34b876['replace'](/<POSITION:[ ](\d+)>/gi,(_0x1e524b,_0x45178e)=>this[_0x456764(0x267)](parseInt(_0x45178e))),_0x34b876=_0x34b876[_0x456764(0x2c0)](/<\/LEFT>/gi,''),_0x34b876=_0x34b876[_0x456764(0x2c0)](/<\/CENTER>/gi,''),_0x34b876=_0x34b876[_0x456764(0x2c0)](/<\/RIGHT>/gi,''),Window_Base[_0x456764(0xe6)][_0x456764(0x147)][_0x456764(0x2aa)](this,_0x34b876);},Window_NameBox[_0xce50af(0xe6)]['setRelativePosition']=function(_0x5c4dc3){const _0x11c69f=_0xce50af;return this[_0x11c69f(0x270)]=_0x5c4dc3,'';},Window_NameBox[_0xce50af(0xe6)][_0xce50af(0x1fd)]=function(){const _0x1cd034=_0xce50af;if($gameMessage[_0x1cd034(0x31d)]())return;this[_0x1cd034(0x270)]=this[_0x1cd034(0x270)]||0x0;const _0xd6476a=this[_0x1cd034(0x2e9)],_0x592870=Math[_0x1cd034(0xd0)](_0xd6476a[_0x1cd034(0x321)]*this['_relativePosition']/0xa);this['x']=_0xd6476a['x']+_0x592870-Math[_0x1cd034(0xd0)](this[_0x1cd034(0x321)]/0x2),this['x']=this['x'][_0x1cd034(0x1bc)](_0xd6476a['x'],_0xd6476a['x']+_0xd6476a[_0x1cd034(0x321)]-this[_0x1cd034(0x321)]);},Window_NameBox['prototype']['updateOffsetPosition']=function(){const _0x3acdbd=_0xce50af;if($gameMessage[_0x3acdbd(0x31d)]())return;this[_0x3acdbd(0x270)]=this[_0x3acdbd(0x270)]||0x0;const _0x10bed4=VisuMZ[_0x3acdbd(0x329)][_0x3acdbd(0xa3)][_0x3acdbd(0x15d)][_0x3acdbd(0x201)],_0x23359c=VisuMZ['MessageCore']['Settings'][_0x3acdbd(0x15d)][_0x3acdbd(0x2ab)],_0x2501d2=(0x5-this[_0x3acdbd(0x270)])/0x5;this['x']+=Math[_0x3acdbd(0xd0)](_0x10bed4*_0x2501d2),this['y']+=_0x23359c;},Window_NameBox[_0xce50af(0xe6)]['updateOverlappingY']=function(){const _0x3e3deb=_0xce50af,_0x252013=this['_messageWindow'],_0x491d42=_0x252013['y'],_0x38f5be=VisuMZ[_0x3e3deb(0x329)][_0x3e3deb(0xa3)][_0x3e3deb(0x15d)][_0x3e3deb(0x2ab)];_0x491d42>this['y']&&_0x491d42<this['y']+this['height']-_0x38f5be&&(this['y']=_0x252013['y']+_0x252013['height']);},VisuMZ[_0xce50af(0x329)][_0xce50af(0x377)]=Window_NameBox[_0xce50af(0xe6)][_0xce50af(0x111)],Window_NameBox['prototype'][_0xce50af(0x111)]=function(){const _0x41b1b2=_0xce50af;this[_0x41b1b2(0x270)]=0x0,VisuMZ[_0x41b1b2(0x329)][_0x41b1b2(0x377)][_0x41b1b2(0x2aa)](this);},Window_ChoiceList[_0xce50af(0xe6)][_0xce50af(0x1d5)]=function(){return![];},Window_ChoiceList['prototype'][_0xce50af(0x352)]=function(){return!![];},Window_ChoiceList['prototype'][_0xce50af(0x156)]=function(){return $gameSystem['getChoiceListLineHeight']()+0x8;},Window_ChoiceList[_0xce50af(0xe6)][_0xce50af(0x30f)]=function(){const _0x5f1267=_0xce50af;return $gameSystem[_0x5f1267(0x208)]();},Window_ChoiceList[_0xce50af(0xe6)][_0xce50af(0x236)]=function(){const _0x246ffb=_0xce50af;this[_0x246ffb(0x111)](),this[_0x246ffb(0x2c7)](),this[_0x246ffb(0xfd)](),this[_0x246ffb(0x1c4)]();},Window_ChoiceList[_0xce50af(0xe6)][_0xce50af(0x111)]=function(){const _0x4610bf=_0xce50af;this['clearCommandList'](),this['makeCommandList'](),this[_0x4610bf(0x2e9)]&&(this[_0x4610bf(0x33f)](),this[_0x4610bf(0x17e)]()),this[_0x4610bf(0x2c2)](),this[_0x4610bf(0x21c)](),this[_0x4610bf(0x21d)](),Window_Selectable['prototype'][_0x4610bf(0x111)][_0x4610bf(0x2aa)](this);},Window_ChoiceList[_0xce50af(0xe6)][_0xce50af(0x31b)]=function(){const _0x36ed34=_0xce50af,_0xd1e003=$gameMessage[_0x36ed34(0x1ce)]();let _0x1d29a0=0x0;for(let _0x5575e6 of _0xd1e003){_0x5575e6=this[_0x36ed34(0x316)](_0x5575e6);if(this[_0x36ed34(0x235)](_0x5575e6)){if('nHFjX'!==_0x36ed34(0x1ca))_0x3f2d62=_0x5cb972[_0x36ed34(0x2c0)](/\\V\[(\d+)\]/gi,(_0xf69d6e,_0x3e9d30)=>this[_0x36ed34(0xaf)](_0x16e94e(_0x549782[_0x36ed34(0x214)](_0x29401d(_0x3e9d30)))));else{const _0x2ddae1=this[_0x36ed34(0x256)](_0x5575e6),_0x1b677b=this[_0x36ed34(0x339)](_0x5575e6);this[_0x36ed34(0x22d)](_0x2ddae1,_0x36ed34(0x346),_0x1b677b,_0x1d29a0);}}_0x1d29a0++;}},Window_ChoiceList['prototype']['convertChoiceMacros']=function(_0x287a51){const _0x1a9406=_0xce50af;return Window_Base[_0x1a9406(0xe6)][_0x1a9406(0x2d6)][_0x1a9406(0x2aa)](this,_0x287a51);},Window_ChoiceList['prototype'][_0xce50af(0x235)]=function(_0x4437f4){const _0x5ac8a7=_0xce50af;if(Imported['VisuMZ_1_EventsMoveCore'])$gameMessage[_0x5ac8a7(0x36f)]();if(_0x4437f4['match'](/<HIDE>/i))return![];if(_0x4437f4[_0x5ac8a7(0x188)](/<SHOW>/i))return!![];if(_0x4437f4['match'](/<SHOW[ ](?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x3442be=RegExp['$1'][_0x5ac8a7(0x181)](',')[_0x5ac8a7(0x28e)](_0x585e54=>Number(_0x585e54)||0x0);for(const _0x357e79 of _0x3442be){if(!$gameSwitches[_0x5ac8a7(0x214)](_0x357e79))return![];}return!![];}if(_0x4437f4[_0x5ac8a7(0x188)](/<SHOW ALL[ ](?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x56bb73=RegExp['$1'][_0x5ac8a7(0x181)](',')[_0x5ac8a7(0x28e)](_0x523844=>Number(_0x523844)||0x0);for(const _0x1dfa64 of _0x56bb73){if(_0x5ac8a7(0x1b5)===_0x5ac8a7(0x1ef)){if(this[_0x5ac8a7(0xf0)]===_0x41aa83)this[_0x5ac8a7(0x18b)]();if(this[_0x5ac8a7(0xf0)][_0x5ac8a7(0x1c5)]===_0x2593b5)this[_0x5ac8a7(0x18b)]();return this[_0x5ac8a7(0xf0)][_0x5ac8a7(0x1c5)];}else{if(!$gameSwitches['value'](_0x1dfa64))return![];}}return!![];}if(_0x4437f4[_0x5ac8a7(0x188)](/<SHOW ANY[ ](?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){if(_0x5ac8a7(0x1ad)==='bXADD'){const _0x5ac330=RegExp['$1'][_0x5ac8a7(0x181)](',')[_0x5ac8a7(0x28e)](_0x36fc29=>Number(_0x36fc29)||0x0);for(const _0x11d3f4 of _0x5ac330){if($gameSwitches[_0x5ac8a7(0x214)](_0x11d3f4))return!![];}return![];}else{_0x1d73af[_0x5ac8a7(0xa7)]=_0x102a1f['Match'][_0x5ac8a7(0xfc)](),_0x37a662[_0x5ac8a7(0x364)]=new _0x5e4c63('\x1b'+_0x201083[_0x5ac8a7(0xa7)],'gi'),_0x2ab394[_0x5ac8a7(0x2d0)]='\x1b'+_0x5a129c[_0x5ac8a7(0xa7)];if(_0x53612e[_0x5ac8a7(0x183)]==='')_0x509c8a[_0x5ac8a7(0x2d0)]+='[0]';}}if(_0x4437f4['match'](/<HIDE[ ](?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){if('GZNqP'==='kdhcz')return 0x0;else{const _0x24da5b=RegExp['$1'][_0x5ac8a7(0x181)](',')['map'](_0x16dcfe=>Number(_0x16dcfe)||0x0);for(const _0x1c9a4f of _0x24da5b){if(!$gameSwitches[_0x5ac8a7(0x214)](_0x1c9a4f))return!![];}return![];}}if(_0x4437f4[_0x5ac8a7(0x188)](/<HIDE ALL[ ](?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){if(_0x5ac8a7(0xd4)!=='ldonm')this[_0x5ac8a7(0xd8)](_0x588256),_0xd27fd0[_0x5ac8a7(0xe6)]['processCharacter']['call'](this,_0x587c5d);else{const _0x2ee7e9=RegExp['$1'][_0x5ac8a7(0x181)](',')[_0x5ac8a7(0x28e)](_0x20237f=>Number(_0x20237f)||0x0);for(const _0x4cf675 of _0x2ee7e9){if(_0x5ac8a7(0x1d1)!==_0x5ac8a7(0x1d1))return _0x5ac8a7(0x29f)[_0x5ac8a7(0x186)](_0x18b37a,_0x22fd0f);else{if(!$gameSwitches[_0x5ac8a7(0x214)](_0x4cf675))return!![];}}return![];}}if(_0x4437f4[_0x5ac8a7(0x188)](/<HIDE ANY[ ](?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){if(_0x5ac8a7(0x12e)===_0x5ac8a7(0x12e)){const _0x37b0ca=RegExp['$1'][_0x5ac8a7(0x181)](',')['map'](_0x56db39=>Number(_0x56db39)||0x0);for(const _0x5cee8c of _0x37b0ca){if($gameSwitches['value'](_0x5cee8c))return![];}return!![];}else{_0x35578a[_0x5ac8a7(0x329)][_0x5ac8a7(0x29b)][_0x5ac8a7(0x2aa)](this),this['clearFlags']();if(this[_0x5ac8a7(0x14b)])this[_0x5ac8a7(0x312)]();}}return!![];},Window_ChoiceList[_0xce50af(0xe6)]['parseChoiceText']=function(_0xb4fabe){const _0x56a75e=_0xce50af;let _0x200ff5=_0xb4fabe;return _0x200ff5=_0x200ff5[_0x56a75e(0x2c0)](/<(?:BR|LINEBREAK)>/gi,'\x0a'),_0x200ff5=_0x200ff5[_0x56a75e(0x2c0)](/<LINE\x1bWrapBreak[0]BREAK>/gi,'\x0a'),_0x200ff5;},Window_ChoiceList[_0xce50af(0xe6)][_0xce50af(0x339)]=function(_0x1ed6e0){const _0x192a14=_0xce50af;if(Imported['VisuMZ_1_EventsMoveCore'])$gameMessage['registerSelfEvent']();if(_0x1ed6e0[_0x192a14(0x188)](/<DISABLE>/i))return![];if(_0x1ed6e0[_0x192a14(0x188)](/<ENABLE>/i))return!![];if(_0x1ed6e0['match'](/<ENABLE[ ](?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x4998bc=RegExp['$1'][_0x192a14(0x181)](',')['map'](_0x1dc0e2=>Number(_0x1dc0e2)||0x0);for(const _0x532f48 of _0x4998bc){if(!$gameSwitches[_0x192a14(0x214)](_0x532f48))return![];}return!![];}if(_0x1ed6e0[_0x192a14(0x188)](/<ENABLE ALL[ ](?:SWITCH|SWITCHES):[ ](.*?)>/i)){if(_0x192a14(0x353)!==_0x192a14(0x353))_0x369e22=_0x411fc9[_0x192a14(0x288)](_0x1c8704,_0x3a71e3);else{const _0x270e01=RegExp['$1']['split'](',')[_0x192a14(0x28e)](_0x38a95b=>Number(_0x38a95b)||0x0);for(const _0x31a3d2 of _0x270e01){if(!$gameSwitches['value'](_0x31a3d2))return![];}return!![];}}if(_0x1ed6e0[_0x192a14(0x188)](/<ENABLE ANY[ ](?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x908931=RegExp['$1']['split'](',')[_0x192a14(0x28e)](_0x2b25f1=>Number(_0x2b25f1)||0x0);for(const _0x31de59 of _0x908931){if(_0x192a14(0xbb)===_0x192a14(0xbb)){if($gameSwitches[_0x192a14(0x214)](_0x31de59))return!![];}else{let _0x2e3336=_0x57aba3;return _0x2e3336=_0x2e3336[_0x192a14(0x2c0)](/<(?:BR|LINEBREAK)>/gi,'\x0a'),_0x2e3336=_0x2e3336[_0x192a14(0x2c0)](/<LINE\x1bWrapBreak[0]BREAK>/gi,'\x0a'),_0x2e3336;}}return![];}if(_0x1ed6e0[_0x192a14(0x188)](/<DISABLE[ ](?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x5541a2=RegExp['$1']['split'](',')[_0x192a14(0x28e)](_0x589a98=>Number(_0x589a98)||0x0);for(const _0x4472ef of _0x5541a2){if(!$gameSwitches[_0x192a14(0x214)](_0x4472ef))return!![];}return![];}if(_0x1ed6e0[_0x192a14(0x188)](/<DISABLE ALL[ ](?:SWITCH|SWITCHES):[ ](.*?)>/i)){if(_0x192a14(0x217)!==_0x192a14(0x2af)){const _0x35b9cf=RegExp['$1']['split'](',')[_0x192a14(0x28e)](_0x2c4a35=>Number(_0x2c4a35)||0x0);for(const _0x1b625c of _0x35b9cf){if(!$gameSwitches[_0x192a14(0x214)](_0x1b625c))return!![];}return![];}else _0x5cec0f['x']=-_0xe122ce[_0x192a14(0x321)]-_0x6da4fb;}if(_0x1ed6e0[_0x192a14(0x188)](/<DISABLE ANY[ ](?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x304fc2=RegExp['$1'][_0x192a14(0x181)](',')[_0x192a14(0x28e)](_0x85ea44=>Number(_0x85ea44)||0x0);for(const _0x1f2cff of _0x304fc2){if($gameSwitches['value'](_0x1f2cff))return![];}return!![];}return!![];},VisuMZ[_0xce50af(0x329)]['Window_ChoiceList_updatePlacement']=Window_ChoiceList[_0xce50af(0xe6)][_0xce50af(0x33f)],Window_ChoiceList[_0xce50af(0xe6)][_0xce50af(0x33f)]=function(){const _0x5c41a1=_0xce50af;VisuMZ['MessageCore'][_0x5c41a1(0xeb)][_0x5c41a1(0x2aa)](this),this[_0x5c41a1(0x36d)]();},Window_ChoiceList[_0xce50af(0xe6)][_0xce50af(0x17e)]=function(){const _0x470cdc=_0xce50af;if(!this[_0x470cdc(0xc3)])return;const _0x1b92b2=0x8,_0x2ef0dc=this[_0x470cdc(0xc3)],_0x57b73a=this['x']+this[_0x470cdc(0x321)],_0x563ecb=Math[_0x470cdc(0xd0)]((Graphics[_0x470cdc(0x321)]-Graphics[_0x470cdc(0x1d4)])/0x2);if(_0x57b73a>=Graphics[_0x470cdc(0x1d4)]+_0x563ecb-_0x2ef0dc[_0x470cdc(0x321)]+_0x1b92b2){if(_0x470cdc(0x34c)===_0x470cdc(0x1de)){const _0x2cb214=_0x3366b7['$1'][_0x470cdc(0x181)](',')[_0x470cdc(0x28e)](_0x5d0bf7=>_0x10fd5f(_0x5d0bf7)||0x0);for(const _0x52b5e3 of _0x2cb214){if(!_0x5d3012[_0x470cdc(0x214)](_0x52b5e3))return!![];}return![];}else _0x2ef0dc['x']=-_0x2ef0dc['width']-_0x1b92b2;}else _0x2ef0dc['x']=this['width']+_0x1b92b2;_0x2ef0dc['y']=this[_0x470cdc(0x15e)]/0x2-_0x2ef0dc[_0x470cdc(0x15e)]/0x2;},VisuMZ[_0xce50af(0x329)][_0xce50af(0x220)]=Window_ChoiceList[_0xce50af(0xe6)][_0xce50af(0x131)],Window_ChoiceList['prototype'][_0xce50af(0x131)]=function(){const _0x29e755=_0xce50af;if(this[_0x29e755(0x2e9)]){if(_0x29e755(0x14d)!==_0x29e755(0x2ee))return this['messageCoreWindowX']();else this[_0x29e755(0x33c)](...arguments);}else{if(_0x29e755(0xb5)===_0x29e755(0x1d9))_0x1313a7=_0xc57ad[_0x29e755(0x2c0)](_0x2c3997[_0x29e755(0x364)],_0xd95610[_0x29e755(0x2d0)]['bind'](this)),_0x24f6a7=this[_0x29e755(0x17b)](_0x4a0b3a);else return VisuMZ[_0x29e755(0x329)][_0x29e755(0x220)][_0x29e755(0x2aa)](this);}},Window_ChoiceList['prototype'][_0xce50af(0xd6)]=function(){const _0x225551=_0xce50af,_0x114379=$gameMessage[_0x225551(0x348)]();if(_0x114379===0x1)return(Graphics[_0x225551(0x1d4)]-this[_0x225551(0x128)]())/0x2;else return _0x114379===0x2?this['_messageWindow']['x']+this[_0x225551(0x2e9)]['width']-this[_0x225551(0x128)]():this['_messageWindow']['x'];},Window_ChoiceList[_0xce50af(0xe6)][_0xce50af(0x128)]=function(){const _0x244cea=_0xce50af,_0x53585d=(this['maxChoiceWidth']()+this[_0x244cea(0x280)]())*this[_0x244cea(0x30f)]()+this[_0x244cea(0x1cb)]*0x2;return Math['min'](_0x53585d,Graphics[_0x244cea(0x321)]);},Window_ChoiceList['prototype'][_0xce50af(0x24e)]=function(){const _0x5ee290=_0xce50af,_0x46f030=$gameMessage['choices']()['map'](_0x8d9223=>this[_0x5ee290(0x316)](_0x8d9223))['filter'](_0x30f42e=>this[_0x5ee290(0x235)](_0x30f42e)),_0x1e2db2=Math[_0x5ee290(0x1f0)](_0x46f030['length']/this['maxCols']());return Math[_0x5ee290(0x288)](0x1,Math[_0x5ee290(0xa4)](_0x1e2db2,this[_0x5ee290(0x326)]()));},Window_ChoiceList['prototype'][_0xce50af(0x326)]=function(){const _0x1d1fa1=_0xce50af,_0x5c4448=this[_0x1d1fa1(0x2e9)],_0x5af161=_0x5c4448?_0x5c4448['y']:0x0,_0x528090=_0x5c4448?_0x5c4448[_0x1d1fa1(0x15e)]:0x0,_0x38dc0e=Graphics[_0x1d1fa1(0x1a3)]/0x2;return _0x5af161<_0x38dc0e&&_0x5af161+_0x528090>_0x38dc0e?0x4:$gameSystem[_0x1d1fa1(0xc8)]();},Window_ChoiceList[_0xce50af(0xe6)][_0xce50af(0xf9)]=function(){const _0x31665b=_0xce50af;let _0x4fb482=0x60;for(const _0x4f5e7b of this['_list']){if(_0x31665b(0x16f)===_0x31665b(0x219)){const _0x4f7ebc=_0x4173e2(_0x399ea9['$1']);_0x4f7ebc!==_0x431bb9[_0x97ee35][_0x31665b(0x307)]&&(_0x1a9f27(_0x31665b(0x2c6)[_0x31665b(0x186)](_0x356ef1,_0x4f7ebc)),_0x5d9711[_0x31665b(0x2e7)]());}else{const _0x29d89b=_0x4f5e7b[_0x31665b(0x277)],_0x4efdd2=this[_0x31665b(0x2f2)](_0x29d89b)[_0x31665b(0x321)],_0x187657=Math['ceil'](_0x4efdd2)+this[_0x31665b(0x2a3)]()*0x2;if(_0x4fb482<_0x187657){if(_0x31665b(0x203)===_0x31665b(0x203))_0x4fb482=_0x187657;else return _0x43fb54;}}}return _0x4fb482;},Window_ChoiceList['prototype'][_0xce50af(0x317)]=function(_0x29495d){const _0xb93159=_0xce50af,_0x3afb18=this[_0xb93159(0x1eb)](_0x29495d),_0x42636f=$gameSystem[_0xb93159(0x1e0)]()!==_0xb93159(0x230)?_0xb93159(0x129)[_0xb93159(0x186)]($gameSystem[_0xb93159(0x1e0)]()):'',_0xeec841=_0x42636f+this[_0xb93159(0x16e)](_0x29495d);this[_0xb93159(0x108)](this['isCommandEnabled'](_0x29495d));const _0x1941c9=this[_0xb93159(0x2f2)](_0xeec841)[_0xb93159(0x15e)],_0x42adaf=Math[_0xb93159(0x288)](_0x3afb18['y'],_0x3afb18['y']+Math[_0xb93159(0x179)]((_0x3afb18['height']-_0x1941c9)/0x2));this['drawTextEx'](_0xeec841,_0x3afb18['x'],_0x42adaf,_0x3afb18[_0xb93159(0x321)]);},Window_ChoiceList[_0xce50af(0xe6)][_0xce50af(0x22a)]=function(){const _0x20ae8f=_0xce50af;$gameMessage['onChoice'](this[_0x20ae8f(0x328)]()),this[_0x20ae8f(0x2e9)]['terminateMessage'](),this['close']();};