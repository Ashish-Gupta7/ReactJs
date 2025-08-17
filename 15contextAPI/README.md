## CONTEXT API

### Context API kya hai?

React Context API ek built-in tareeka hai prop drilling (parent → child → grandchild ko repeatedly props dena) ko avoid karne ka. Aap global jaisi state (theme, auth user, language, cart, settings, etc.) ko ek Provider se poori tree me share kar sakte ho.

### Kab use karna chahiye?

- Jab same data bohot saare components me chahiye (e.g., theme, user).
- Jab props chain lambi ho rahi ho.
- High-frequency state (typing ke har keypress par update) ke liye Context avoid karein; waha local state ya dedicated state libs sahi rehti hain.
