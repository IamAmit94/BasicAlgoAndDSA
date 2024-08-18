# What is Event Propagation ?


Event propagation, also known as event bubbling and event capturing, is the process by which events are handled and passed through the DOM (Document Object Model) hierarchy in web browsers. When an event occurs on an element in the DOM, such as a click or keypress, it can trigger event handlers attached to that element as well as its ancestor elements. So Event propagation is a process of deciding when and in which direction the event will execute is EVENT PROPAGATION.

Event propagation consists of two phases:

1. Event Capturing (Capture Phase):

During the capture phase, the browser traverses the DOM from the root element down to the target element where the event occurred.

Event handlers attached to ancestor elements are executed first, working their way towards the target element.

2. Event Bubbling (Bubbling Phase): down to up approch(default behaviuor of event)

After the capture phase, during the bubbling phase, the browser traverses the DOM back up from the target element to the root element.

Event handlers attached to the target element and its ancestor elements are executed in sequence, bubbling up towards the root element.

Mentions are the some of the event which do not bubble
Focus events:

focus: Triggered when an element gains focus.
blur: Triggered when an element loses focus.
focusin: Similar to focus, but bubbles up through the DOM.
focusout: Similar to blur, but bubbles up through the DOM.

Mouse events:

mouseenter: Triggered when the mouse enters the boundaries of an element. This event does not bubble.
mouseleave: Triggered when the mouse leaves the boundaries of an element. This event does not bubble.
mouseover: Similar to mouseenter, but bubbles up through the DOM.
mouseout: Similar to mouseleave, but bubbles up through the DOM.
Scroll events:

scroll: Triggered when an element's scroll position changes.
Input events:

// Q6: What is Event Delegation ?


// Event delegation is a technique in JavaScript where instead of attaching event handlers directly to individual elements, you attach them to a parent element. This parent element then listens for events that bubble up from its descendants. When an event occurs on a descendant element, the event bubbles up to the parent element, where the event handler is executed. Event delegation leverages event propagation to handle events more efficiently, especially in cases where there are many elements that need event handling.


// Here's how event delegation works:

// 1. Attach Event Handler to Parent Element:
// You attach an event handler to a parent element that contains the child elements on which you want to handle events.

// 2. Check Event Target:
// When an event occurs, you check the event target to determine which descendant element triggered the event.

// 3. Handle Event:
// Based on the event target, you perform the appropriate action or execute the desired event handler.

// Event delegation offers several benefits:

// A. Efficiency: Instead of attaching event handlers to each individual element, you attach a single event handler to a parent element. This reduces the number of event handlers, improving performance and memory usage, especially for large DOM structures.

// B. Dynamic Elements: Event delegation works well with dynamically generated or added elements. Since the event handler is attached to a parent element, it automatically applies to any new child elements added later, even if they weren't present when the handler was initially attached.

// C. Simplicity: Event delegation simplifies event management, especially in complex applications with nested DOM structures. You only need to manage event handlers for a few parent elements rather than for every individual element.