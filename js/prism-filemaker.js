Prism.languages.filemaker = {

	// COMMENTS
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true,
			greedy: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true,
			greedy: true
		}
	],
	
	// STRINGS
	'string': [
	
		// STRINGS WRAPPED IN DOUBLE QUOTES
		{
			pattern: /(["])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
			greedy: true
		},
		
		// UNQUOTED ¶
		{
			pattern: /¶/
		}
	],
	
	// FUNCTIONS
	'function': [
		{
			pattern: /\b\w+ ?(?=\()/
		},
		
		// PLUG-INS WITH NO PARAMS.
		{
			pattern: /(CNSBC_|CNSImage_|CNSMenu_|CNSQuery_|FTPit_|POP3it_|SMTPit_)[a-zA-Z]*?\b/
		}
	],
	
	// KEYWORDS
	'keyword': [
		
		// GET
		{
			pattern: /\b(?:AccountExtendedPrivileges|AccountGroupName|AccountName|AccountPrivilegeSetName|AccountType|ActiveFieldContents|ActiveFieldName|ActiveFieldTableName|ActiveLayoutObjectName|ActiveModifierKeys|ActivePortalRowNumber|ActiveRecordNumber|ActiveRepetitionNumber|ActiveSelectionSize|ActiveSelectionStart|AllowAbortState|AllowFormattingBarState|ApplicationArchitecture|ApplicationLanguage|ApplicationVersion|CalculationRepetitionNumber|ConnectionAttributes|ConnectionState|CurrentDate|CurrentExtendedPrivileges|CurrentHostTimestamp|CurrentPrivilegeSetName|CurrentTime|CurrentTimestamp|CurrentTimeUTCMilliseconds|CustomMenuSetName|DesktopPath|Device|DocumentsPath|DocumentsPathListing|EncryptionState|ErrorCaptureState|FileLocaleElements|FileMakerPath|FileName|FilePath|FileSize|FoundCount|HighContrastState|HostApplicationVersion|HostIPAddress|HostName|InstalledFMPlugins|InstalledFMPluginsAsJSON|LastError|LastExternalErrorDetail|LastMessageChoice|LayoutAccess|LayoutCount|LayoutName|LayoutNumber|LayoutTableName|LayoutViewState|MenubarState|ModifiedFields|MultiUserState|NetworkProtocol|NetworkType|OpenDataFileInfo|PageCount|PageNumber|PersistentID|PreferencesPath|PrinterName|QuickFindText|RecordAccess|RecordID|RecordModificationCount|RecordNumber|RecordOpenCount|RecordOpenState|RegionMonitorEvents|RequestCount|RequestOmitState|ScreenDepth|ScreenHeight|ScreenScaleFactor|ScreenWidth|ScriptAnimationState|ScriptName|ScriptParameter|ScriptResult|SortState|StatusAreaState|SystemAppearance|SystemDrive|SystemIPAddress|SystemLanguage|SystemLocaleElements|SystemNICAddress|SystemPlatform|SystemVersion|TemporaryPath|TextRulerVisible|TotalRecordCount|TouchKeyboardState|TriggerCurrentPanel|TriggerExternalEvent|TriggerGestureInfo|TriggerKeystroke|TriggerModifierKeys|TriggerTargetPanel|UserCount|UserName|UseSystemFormatsState|UUID|UUIDNumber|WindowContentHeight|WindowContentWidth|WindowDesktopHeight|WindowDesktopWidth|WindowHeight|WindowLeft|WindowMode|WindowName|WindowOrientation|WindowStyle|WindowTop|WindowVisible|WindowWidth|WindowZoomLevel)\b/
		},
		
		// JSON
		{
			pattern: /\b(?:JSONString|JSONNumber|JSONBoolean)\b/
		},
		
		// FIELD NAMES
		{
			pattern: /\b[a-zA-Z0-9_ ]*?::[a-zA-Z_][a-zA-Z0-9_]*?\b/,
			greedy: true
		}
	],
	
	// BOOLEAN
	'boolean': /\b(?:[fF]alse|[Tt]rue)\b/,
	
	// NUMBERS
	'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
	
	// OPERATORS
	'operator': [
		
		// &
		{
			pattern: /&/
		},
		
		// ARITHMETIC
		{
			pattern: /[-+*\/]/
		},

		// Comparison
		{
			pattern: /=|<=|≤|>=|≥|<>|≠|<|>/
		},

		// LOGIC
		{
			pattern: /and|or|xor|not/
		}

	],
	
	// PUNCTUATION
	'punctuation': /[{}[\];(),.:]/

};

Prism.languages.fm = Prism.languages.filemaker;
Prism.languages.FileMaker = Prism.languages.filemaker;