// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCv7718RyloM6W5LxzQfX8MkrxlrnEcgbg",
    authDomain: "ilahi-hims.firebaseapp.com",
    projectId: "ilahi-hims",
    storageBucket: "ilahi-hims.appspot.com",
    messagingSenderId: "682686294407",
    appId: "1:682686294407:android:f265bcf0e3f0f4c5a4cb22"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function generateTicketId() {
    const prefix = 'IHC';
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `${prefix}-${timestamp}-${random}`;
}

async function handleSubmit(event) {
    event.preventDefault();
    
    const loaderContainer = document.getElementById('loaderContainer');
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    loaderContainer.style.display = 'flex';
    form.style.opacity = '0.5';

    try {
        const ticketId = generateTicketId();
        const formData = new FormData(event.target);
        const data = {
            ticketId: ticketId,
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            category: formData.get('category'),
            description: formData.get('description'),
            status: 'New',
            priority: 'Medium',
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        };

        await db.collection('support_tickets').doc(data.ticketId).set(data);
        
        loaderContainer.style.display = 'none';
        form.style.opacity = '1';
        successMessage.style.display = 'block';
        
        form.reset();

        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);

    } catch (error) {
        console.error('Error saving ticket:', error);
        alert('Error sending message. Please try again.');
        loaderContainer.style.display = 'none';
        form.style.opacity = '1';
    }

    return false;
}

// Remove event listener for CAPTCHA
document.addEventListener('DOMContentLoaded', () => {
    // Any initialization code if needed
});