document.addEventListener('DOMContentLoaded', () => {
    // Mock data for courses
    const courses = [
      { title: "Course 1", description: "Introduction to Programming" },
      { title: "Course 2", description: "Web Development Basics" },
      { title: "Course 3", description: "Advanced JavaScript" }
    ];
  
    // Display courses
    const courseList = document.querySelector('.course-list');
    courses.forEach(course => {
      const courseCard = document.createElement('div');
      courseCard.classList.add('course-card');
      courseCard.innerHTML = `
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <button onclick="startCourse('${course.title}')">Start Course</button>
      `;
      courseList.appendChild(courseCard);
    });
  
    // Video Progress
    const video = document.getElementById('video');
    const progressBar = document.querySelector('.video-progress');
  
    video.addEventListener('timeupdate', () => {
      const progress = (video.currentTime / video.duration) * 100;
      const filled = document.createElement('div');
      filled.classList.add('filled');
      filled.style.width = `${progress}%`;
      progressBar.innerHTML = '';
      progressBar.appendChild(filled);
    });
  
    // Function to start course (mock for now)
    window.startCourse = (courseTitle) => {
      alert(`You started ${courseTitle}`);
    };
  });
  