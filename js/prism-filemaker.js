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
		}
	],
	
	// KEYWORDS
	'keyword': [
		
		// GET
		{
			pattern: /(Get ?\() ?[a-z]* ?(?=\))/i,
			lookbehind: true,
			greedy: true
		},

		// JSON
		{
			pattern: /\b(?:JSONString|JSONNumber|JSONBoolean)\b/
		},
		
		// FIELD NAMES
		{
			pattern: /[a-z0-9_ »\@]+::[a-z0-9_ »]+/i
		}
	],
	
	// BOOLEAN
	'boolean': /\b(?:False|True)\b/i,
	
	// VARIABLES
	'variable': [
		
		// $LOCAL, $$GLOBAL, local non-prefixed
		{
			pattern: /\${0,2}[a-z_~.]+/i
		}

	],
	
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