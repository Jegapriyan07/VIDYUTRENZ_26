# 🚫 How to Close Event Registrations

## ✅ System is Ready!

I've added a "Registration Closed" badge system to your website. Here's how to use it:

---

## 📝 How to Close Registration for an Event

### Step 1: Open the EventsCard.jsx File

Navigate to: `src/pages/EventsCard/EventsCard.jsx`

### Step 2: Find the Event You Want to Close

Look for the event in the `eventData` object (around line 37-57)

### Step 3: Add Two Properties

Add `registrationClosed: true` and optionally `closedReason: "Your reason"`

---

## 💡 Example: Closing "Prototype Parade"

### Before (Registration Open):
```javascript
{ 
  id: 1, 
  title: "Prototype Parade", 
  description: "Showcase your innovative prototypes...", 
  date: "Feb 06, 2026", 
  // ... other properties
  registrationLink: "https://...",
  rulesLink: Tech_1 
},
```

### After (Registration Closed):
```javascript
{ 
  id: 1, 
  title: "Prototype Parade", 
  description: "Showcase your innovative prototypes...", 
  date: "Feb 06, 2026", 
  // ... other properties
  registrationLink: "https://...",
  rulesLink: Tech_1,
  registrationClosed: true,  // ← ADD THIS
  closedReason: "Venue capacity reached"  // ← OPTIONAL
},
```

---

## 🎨 What Users Will See

When `registrationClosed: true`:
- ❌ "Register Now" button is **hidden**
- ✅ Red "Registration Closed" badge appears
- 🚫 Shows the icon and message
- 📝 Shows the reason (if you added one)
- ✅ "Rules" button still works

---

## 📋 Quick Copy-Paste Examples

### Close with Reason:
```javascript
registrationClosed: true,
closedReason: "Venue capacity reached"
```

### Close without Reason:
```javascript
registrationClosed: true
```

### Reopen Registration (Remove these lines):
```javascript
// registrationClosed: true,
// closedReason: "Venue capacity reached"
```

---

## 🚀 Deployment Process

After editing the file:

```bash
# 1. Test locally
npm run dev

# 2. Check if it works
# Visit http://localhost:5173/events/technical

# 3. Deploy to Vercel
git add .
git commit -m "Closed registration for [Event Name]"
git push origin main

# 4. Wait 1-3 minutes for Vercel to deploy
```

---

## 🎯 Real-World Workflow

### Scenario: "IoT with Robotics" workshop is full

**Step 1:** Open `EventsCard.jsx`

**Step 2:** Find the workshop (around line 50):
```javascript
{ 
  id: 1, 
  title: "IoT with Robotics", 
  // ... properties
}
```

**Step 3:** Add the closed status:
```javascript
{ 
  id: 1, 
  title: "IoT with Robotics", 
  // ... properties
  registrationClosed: true,
  closedReason: "Workshop full - 50 seats filled"
}
```

**Step 4:** Save, commit, push:
```bash
git add .
git commit -m "Closed IoT workshop - venue full"
git push
```

**Step 5:** Done! Live in 1-3 minutes ✅

---

## 🔄 To Reopen Registration Later

Simply remove or comment out the lines:

```javascript
{ 
  id: 1, 
  title: "IoT with Robotics", 
  // ... properties
  // registrationClosed: true,  ← Comment out
  // closedReason: "Workshop full"  ← Comment out
}
```

---

## 💡 Pro Tips

### Tip 1: Close Multiple Events at Once
```javascript
// Close 3 events in one commit
{ id: 1, title: "Event 1", registrationClosed: true },
{ id: 2, title: "Event 2", registrationClosed: true },
{ id: 3, title: "Event 3", registrationClosed: true },
```

### Tip 2: Use Descriptive Reasons
```javascript
closedReason: "50/50 seats filled"
closedReason: "Registration deadline passed"
closedReason: "Venue capacity reached"
closedReason: "Event postponed"
```

### Tip 3: Test Before Deploying
Always run `npm run dev` and check the event card locally before pushing to production.

---

## ⚠️ Important Notes

1. **Don't delete the event** - Just add `registrationClosed: true`
2. **Keep the registration link** - You might need it later
3. **Rules button still works** - Users can still see event rules
4. **Easy to reopen** - Just remove the two lines

---

## 🆘 Troubleshooting

### Badge Not Showing?
- Check spelling: `registrationClosed` (camelCase)
- Make sure it's `true` (lowercase, no quotes)
- Save the file and refresh browser

### Still Shows Register Button?
- Clear browser cache (Ctrl + Shift + R)
- Check if you pushed to Git
- Wait for Vercel deployment to complete

### Want to Change the Badge Color?
Edit `EventsCard.css` around line 389 (the `.ecards-closed-badge` section)

---

## ✅ Summary

**To Close Registration:**
1. Add `registrationClosed: true` to the event
2. Optionally add `closedReason: "Your reason"`
3. Save, commit, push
4. Wait 1-3 minutes

**To Reopen:**
1. Remove those two lines
2. Save, commit, push
3. Wait 1-3 minutes

**That's it!** Super simple and safe! 🚀
