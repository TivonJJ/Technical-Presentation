---
layout: default
---

# Function Calling

<div class="grid grid-cols-2 gap-6">
  <div class="glass-card p-3 flex flex-col max-h-96">
    <div class="flex items-center justify-between mb-1">
      <span class="font-bold text-sm text-blue-400">Request (Schema)</span>
      <carbon-json class="opacity-50"/>
    </div>
    <div class="flex-1 overflow-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-800 max-h-80">

````md magic-move {lines: true}
```json {2-4}
{
  "type": "function",
  "name": "get_weather",
  "description": "Retrieves current weather for the given location.",
  "parameters": {
    "type": "object",
    "properties": {
      "location": {
        "type": "string",
        "description": "City and country e.g. Bogotá, Colombia"
      },
      "units": {
        "type": "string",
        "enum": ["celsius", "fahrenheit"],
        "description": "Units the temperature will be returned in."
      }
    },
    "required": ["location", "units"],
    "additionalProperties": false
  },
  "strict": true
}
```

```json {5-21}
{
  "type": "function",
  "name": "get_weather",
  "description": "Retrieves current weather for the given location.",
  "parameters": {
    "type": "object",
    "properties": {
      "location": {
        "type": "string",
        "description": "City and country e.g. Bogotá, Colombia"
      },
      "units": {
        "type": "string",
        "enum": ["celsius", "fahrenheit"],
        "description": "Units the temperature will be returned in."
      }
    },
    "required": ["location", "units"],
    "additionalProperties": false
  },
  "strict": true
}
```
````

  </div>
  </div>

  <div v-click 
    v-motion
    :initial="{ opacity: 0, x: 50 }"
    :enter="{ opacity: 1, x: 0, transition: { duration: 500 } }"
    class="glass-card p-3 flex flex-col max-h-96">
    <div class="flex items-center justify-between mb-1">
      <span class="font-bold text-sm text-green-400">Response (Call)</span>
      <carbon-code class="opacity-50"/>
    </div>
    
  <div class="flex-1 overflow-auto scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-800 max-h-80">

```json
[
  {
    "id": "fc_12345xyz",
    "call_id": "call_12345xyz",
    "type": "function_call",
    "name": "get_weather",
    "arguments": "{\"location\":\"Paris, France\"}"
  }
]
```

  </div>
  </div>
</div>


