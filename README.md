## diy-handlebars-helpers
#### Collection of generic handlebars helpers.

### Installation
```bash
npm install diy-handlebars-helpers
```

### Basic Use
```javascript
var handlebars-helpers    = require('diy-handlebars-helpers');
```

### Testing
```bash
npm test
```

### Helpers

#### abbr-count
```
{{abbr-count 4000}} // 4k+
```

#### captialize
```
{{capitalize 'hey dude'}} // Hey dude
```

#### chr-gt
```
{{chr-gt 'hey dude' 3}}
    // WOO! string is greater than 3
{{else}}
    // string is not longer than 3
{{/chr-gt}}
```

#### chr-lt
```
{{chr-lt 'hey dude' 3}}
    // string is less than 3
{{else}}
    // WOO! string is not less than 3
{{/chr-lt}}
```

#### each-key
```
{{#each-key object}}
Key: {{this.key}} Value: {{this.value}}
{{/each-key}}
```

#### each-limit
```
{{#each-limit items 3}}
    // will only iterate 3 times even if items is longer
{{/each-limit}}
```

#### each-reverse
```
{{#each-reverse items}}
    // iterating backwards!
{{/each-reverse}}
```

#### either
```
{{either false true false}}
    // at least one value was true
{{else}}
    // none were true
{{/either}}
```

#### encodeURIComponent
```
{{encodeURIComponent exactlyWhatYouThink}}
```

#### eq
```
{{#eq val1 val2}}
    // absolute comparision was true ===
{{else}}
    // here not so much
{{/eq}}
```

#### firstof
```
{{firstof false false 'real value' false}} // "real value" great for picking default text for empty variables
```

#### if-gt
```
{{#if-gt 10 5}}
    // of course 10 is greater than 5
{{else}}
    // this wouldn't execute
{{/if-gt}}
```

#### if-lt
```
{{#if-lt 5 10}}
    // of course 5 is less than 10
{{else}}
    // this wouldn't execute
{{/if-lt}}
```

#### indefinite-article
```
{{indefinite-article 'apple'}} // an
{{indefinite-article 'pineapple'}} // a
```

#### input-select
```
{{{input-select "month" options "05"}}} // builds <select name="month">...</select> an
```

`options` should be a multi-dimentional array: `[['val1', 'text1'], ['val2', 'text2']]`. If no 
text is provided, the value will be used for the option text.

The third optional argument is the default value. (will get the `selected` attribute.)

#### iter
```
{{#iter items}}
    {{i}} //index
    {{iPlus1}} // index + 1
{{/iter}}
```

#### join
```
{{join array ","}} // "item1, item2"
```

#### neither
```
{{neither false false false}}
    // all must be false for this to execute
{{else}}
    // at least one was true
{{/neither}}
```

#### not-eq
```
{{#not-eq val1 val2}}
    // absolute not comparision was true !==
{{else}}
    // here not so much
{{/not-eq}}

#### number
```
{{number 100000}} // "100,000"
```

#### pack-it
```
{{#pack-it items}}
    {{content}} // original item
    {{size}} // pack size
{{/pack-it}}
```

#### paragraphify
```
{{paragraphify textWithNewLines}} // <p>first line</p><p>second line</p>
```

#### posessive
```
{{posessive 'john'}} // "john's"
```

#### repeat
```
{{#repeat 5}}Hello!{{/repeat}} // "Hello!Hello!Hello!Hello!Hello!"
```

#### subtract
```
{{subtract a.length 2}}
```

#### title-case
```
{{title-case 'hey hey hey'}} // "Hey Hey Hey"
```

#### urlify
```
{{urlify 'Hey Hey'}} // "hey-hey"
```
