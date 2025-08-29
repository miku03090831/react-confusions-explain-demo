# React Confusions Explain Demo

A React application demonstrating common React concepts and potential confusion points through interactive examples.

## Prerequisites

- Node.js version: 20.11.0
- Package manager: pnpm

## Installation & Running

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start the development server:
   ```bash
   pnpm dev
   ```

3. Open your browser and navigate to the local development server URL (typically `http://localhost:5173`)

## Demos

This application contains two main demonstrations:

### 1. Infinite Loop Demo
Demonstrates how improper use of `useEffect` and state updates can create infinite re-render loops in React. 

**What it shows:**
- A button that triggers an infinite loop when clicked
- Uses `useTransition` and regular state dispatch together
- The `useEffect` hook runs on state changes and updates another state, creating a cycle
- Check the browser console after clicking to see the infinite loop in action

### 2. Key Property Demo
Illustrates the importance of proper `key` prop usage in React lists through four different approaches:

**Four scenarios demonstrated:**
1. **No Key**: React renders without keys, causing warnings and potential state confusion
2. **Index as Key**: Uses array index as key - basically same issues as no key when list order changes
3. **Random Number as Key**: Uses `Math.random()` as key, causing components to recreate on every render and lose state
4. **Correct Unique Value as Key**: Uses proper unique identifiers (item names), ensuring correct component updates and state preservation

**Interactive features:**
- **Reverse List**: Click to reverse the order of list items and observe different behaviors
- **Shallow Copy Reassign**: Creates a new array reference to test re-rendering behavior
- Each child component maintains its own click counter to demonstrate state preservation/loss

## Built With

- React + TypeScript
- Vite

## Purpose

This demo helps developers understand:
- How infinite loops can occur in React applications
- The critical importance of proper `key` prop usage
- The difference between various key strategies and their effects on component behavior
- Common React pitfalls and how to avoid them