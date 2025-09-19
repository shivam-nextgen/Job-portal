<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Proposal: NextGen Job Portal</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <!-- Chosen Palette: Corporate Sapphire (Slate, Sky Blue, White) -->
    <!-- Application Structure Plan: The application is designed as an interactive dashboard with fixed sidebar navigation. This structure was chosen because a project proposal is often reviewed non-linearly; stakeholders need to jump between sections like 'Budget', 'Team', and 'Architecture'. A dashboard with persistent navigation is far more user-friendly than a long, scrollable document. The user can instantly access any piece of information, compare different aspects of the plan, and gain a holistic understanding efficiently. -->
    <!-- Visualization & Content Choices: 
        - Report Info: System Architecture -> Goal: Organize & Show Relationships -> Viz/Presentation Method: An interactive diagram built with HTML/Tailwind CSS. -> Interaction: Hovering over components reveals more details. -> Justification: A visual diagram is the clearest way to explain how the backend, web, and mobile apps connect, which is superior to a dense text description. -> Library/Method: HTML/CSS.
        - Report Info: Execution Phases -> Goal: Show Change over Time -> Viz/Presentation Method: Horizontal Bar Chart (Gantt-style). -> Interaction: Hover tooltips for phase details. -> Justification: This provides an immediate visual summary of the project's timeline and dependencies. -> Library/Method: Chart.js/Canvas.
        - Report Info: Budget Allocation -> Goal: Compare Proportions -> Viz/Presentation Method: Donut Chart. -> Interaction: Hover tooltips for cost breakdown. -> Justification: A donut chart is excellent for showing how a whole (the budget) is divided into parts. -> Library/Method: Chart.js/Canvas.
        - Report Info: Features/Modules/Team -> Goal: Organize -> Viz/Presentation Method: Styled cards in a grid layout. -> Interaction: Clean, scannable presentation. -> Justification: Cards break down complex information into digestible chunks, improving readability. -> Library/Method: HTML/Tailwind CSS.
    -->
    <!-- CONFIRMATION: NO SVG graphics used. NO Mermaid JS used. -->
    <style>
        body { font-family: 'Inter', sans-serif; background-color: #f8fafc; }
        .sidebar-link { transition: all 0.2s ease-in-out; border-left: 3px solid transparent; }
        .sidebar-link:hover { background-color: #f0f9ff; border-left-color: #0ea5e9; color: #0369a1;}
        .sidebar-link.active { background-color: #e0f2fe; border-left-color: #0284c7; color: #0369a1; font-weight: 600; }
        .content-section { display: none; animation: fadeIn 0.5s ease-in-out; }
        .content-section.active { display: block; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .card { background-color: white; border-radius: 0.75rem; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); }
        .chart-container { position: relative; width: 100%; max-width: 800px; margin-left: auto; margin-right: auto; height: 350px; max-height: 450px; }
        @media (min-width: 768px) { .chart-container { height: 400px; } }
        .arch-box { border: 1px solid #e2e8f0; padding: 1rem; border-radius: 0.5rem; text-align: center; background-color: white; box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1); transition: all 0.2s ease-in-out; }
        .arch-box:hover { transform: translateY(-4px); box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); border-color: #38bdf8; }
        .arch-line { background-color: #cbd5e1; }
    </style>
</head>
<body class="text-slate-800">

    <div class="flex h-screen">
        <aside class="w-64 bg-white shadow-lg flex-shrink-0 z-10">
            <div class="p-6 border-b">
                <h1 class="text-xl font-bold text-sky-800">Project Proposal</h1>
                <p class="text-sm text-slate-500 mt-1">NextGen Job Portal</p>
            </div>
            <nav class="mt-4">
                <a href="#overview" class="sidebar-link active flex items-center py-3 px-6 text-slate-600 font-medium">Overview</a>
                <a href="#requirements" class="sidebar-link flex items-center py-3 px-6 text-slate-600 font-medium">Requirements</a>
                <a href="#architecture" class="sidebar-link flex items-center py-3 px-6 text-slate-600 font-medium">Architecture</a>
                <a href="#plan" class="sidebar-link flex items-center py-3 px-6 text-slate-600 font-medium">Execution Plan</a>
                <a href="#team" class="sidebar-link flex items-center py-3 px-6 text-slate-600 font-medium">Team Setup</a>
                <a href="#budget" class="sidebar-link flex items-center py-3 px-6 text-slate-600 font-medium">Budget</a>
            </nav>
        </aside>

        <main class="flex-1 overflow-y-auto p-6 md:p-10">
            
            <section id="overview" class="content-section active">
                <h2 class="text-3xl font-bold text-slate-900 mb-2">Project Overview</h2>
                <p class="text-slate-600 mb-6 max-w-3xl">This interactive proposal outlines our strategic plan for developing a comprehensive job portal ecosystem, consisting of a web application and native iOS/Android apps. Our approach leverages a unified MERN stack backend to ensure consistency and efficiency, while native mobile development guarantees a high-performance, best-in-class user experience. Explore the sections to understand the project's scope, architecture, and execution strategy.</p>
                <div class="grid md:grid-cols-3 gap-6">
                    <div class="card p-6">
                        <h3 class="font-bold text-lg text-sky-700">Unified Backend</h3>
                        <p class="text-slate-500 mt-2 text-sm">A single MERN stack backend powers all platforms, ensuring data consistency and rapid development.</p>
                    </div>
                    <div class="card p-6">
                        <h3 class="font-bold text-lg text-sky-700">Powerful Web App</h3>
                        <p class="text-slate-500 mt-2 text-sm">A dynamic and responsive web experience built with React.js for maximum reach and functionality.</p>
                    </div>
                    <div class="card p-6">
                        <h3 class="font-bold text-lg text-sky-700">Native Mobile Apps</h3>
                        <p class="text-slate-500 mt-2 text-sm">High-performance iOS (Swift) and Android (Kotlin) apps for an optimal on-the-go experience.</p>
                    </div>
                </div>
            </section>

            <section id="requirements" class="content-section">
                <h2 class="text-3xl font-bold text-slate-900 mb-2">Detailed Requirements & Modules</h2>
                <p class="text-slate-600 mb-8 max-w-3xl">The platform is composed of distinct modules, each handling specific business logic. This modularity ensures a scalable and maintainable system. Below is a breakdown of the core features that will define the user experience for both candidates and recruiters.</p>
                <div class="space-y-8">
                    <div class="card p-6">
                        <h3 class="text-xl font-semibold mb-4 text-slate-800">👤 User & Authentication</h3>
                        <ul class="list-disc list-inside text-slate-600 space-y-2 text-sm">
                            <li>**Role-Based Access:** Distinct experiences for 'Candidate' and 'Recruiter' roles.</li>
                            <li>**Secure Registration:** Email/password with MFA support, plus social sign-in via Google/LinkedIn.</li>
                            <li>**Rich Profile Management:** Sections for experience, education, skills, and portfolios.</li>
                        </ul>
                    </div>
                    <div class="card p-6">
                        <h3 class="text-xl font-semibold mb-4 text-slate-800">🔍 Job & Candidate Search</h3>
                        <ul class="list-disc list-inside text-slate-600 space-y-2 text-sm">
                            <li>**Advanced Search Engine:** Powered by Elasticsearch for fast, relevant results with complex filters.</li>
                            <li>**Smart Matching:** AI-driven recommendations for jobs and candidates based on user data.</li>
                            <li>**Geo-location Search:** "Near me" search functionality for both web and mobile platforms.</li>
                        </ul>
                    </div>
                     <div class="card p-6">
                        <h3 class="text-xl font-semibold mb-4 text-slate-800">✉️ Notifications & Messaging</h3>
                        <ul class="list-disc list-inside text-slate-600 space-y-2 text-sm">
                            <li>**Personalized Alerts:** Automated notifications for job matches and application status changes.</li>
                            <li>**In-App Messaging:** Secure, real-time communication channel between recruiters and candidates.</li>
                            <li>**Push Notifications:** Instant alerts delivered to native mobile apps to drive engagement.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="architecture" class="content-section">
                 <h2 class="text-3xl font-bold text-slate-900 mb-2">System Architecture</h2>
                 <p class="text-slate-600 mb-8 max-w-3xl">Our architecture is designed for scalability and efficiency. A single, unified RESTful API serves as the brain for all client applications, ensuring consistent business logic and data access. This approach simplifies development and maintenance while allowing each frontend to be optimized for its specific platform.</p>
                <div class="card p-8">
                    <div class="flex flex-col items-center">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
                            <div class="arch-box">
                                <h4 class="font-bold text-sky-700">React Web App</h4>
                                <p class="text-xs text-slate-500 mt-1">Dynamic single-page application for desktop and web users.</p>
                            </div>
                            <div class="arch-box">
                                <h4 class="font-bold text-sky-700">iOS App (Swift)</h4>
                                <p class="text-xs text-slate-500 mt-1">High-performance native app for the Apple ecosystem.</p>
                            </div>
                            <div class="arch-box">
                                <h4 class="font-bold text-sky-700">Android App (Kotlin)</h4>
                                <p class="text-xs text-slate-500 mt-1">Optimized native app for the Android ecosystem.</p>
                            </div>
                        </div>
                        <div class="flex justify-center w-full max-w-4xl h-16">
                            <div class="w-px h-full arch-line"></div>
                            <div class="w-px h-full arch-line md:hidden" style="margin-left: -1px;"></div>
                            <div class="w-px h-full arch-line md:hidden" style="margin-left: -1px;"></div>
                        </div>
                        <div class="arch-box w-full max-w-md">
                            <h3 class="text-lg font-bold text-slate-800">Unified RESTful API</h3>
                            <p class="text-sm text-slate-500 mt-2">MERN Stack (MongoDB, Express.js, React, Node.js)</p>
                            <p class="text-xs text-slate-400 mt-2">Single source of truth for all data and business logic.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="plan" class="content-section">
                <h2 class="text-3xl font-bold text-slate-900 mb-2">Execution Plan</h2>
                <p class="text-slate-600 mb-8 max-w-3xl">Our development process follows an Agile methodology, broken into distinct phases. This ensures a structured workflow, from foundational planning to parallel development and final deployment. The chart below visualizes the high-level timeline for the project.</p>
                 <div class="card p-6">
                    <div class="chart-container">
                        <canvas id="planChart"></canvas>
                    </div>
                 </div>
            </section>

            <section id="team" class="content-section">
                <h2 class="text-3xl font-bold text-slate-900 mb-2">Proposed Team Setup</h2>
                <p class="text-slate-600 mb-8 max-w-3xl">A specialized, multi-disciplinary team is essential to deliver a high-quality product across web and native mobile platforms. The proposed structure ensures dedicated expertise for each component of the project, managed under a unified project vision.</p>
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="card p-6"><h3 class="font-bold text-md text-sky-700">Project Lead</h3><p class="text-slate-500 mt-2 text-sm">Oversees project vision, information architecture, and team coordination.</p></div>
                    <div class="card p-6"><h3 class="font-bold text-md text-sky-700">Backend Developer (x2)</h3><p class="text-slate-500 mt-2 text-sm">Builds and maintains the core Node.js API and MongoDB database.</p></div>
                    <div class="card p-6"><h3 class="font-bold text-md text-sky-700">Frontend Developer</h3><p class="text-slate-500 mt-2 text-sm">Develops the responsive and dynamic React web application.</p></div>
                    <div class="card p-6"><h3 class="font-bold text-md text-sky-700">iOS Developer (Swift)</h3><p class="text-slate-500 mt-2 text-sm">Creates the high-performance native application for the Apple ecosystem.</p></div>
                    <div class="card p-6"><h3 class="font-bold text-md text-sky-700">Android Developer (Kotlin)</h3><p class="text-slate-500 mt-2 text-sm">Builds the optimized native application for the Android ecosystem.</p></div>
                    <div class="card p-6"><h3 class="font-bold text-md text-sky-700">QA Engineer</h3><p class="text-slate-500 mt-2 text-sm">Ensures quality, consistency, and performance across all platforms.</p></div>
                </div>
            </section>
            
            <section id="budget" class="content-section">
                <h2 class="text-3xl font-bold text-slate-900 mb-2">Estimated Budget</h2>
                <p class="text-slate-600 mb-8 max-w-3xl">The estimated budget for this project covers all development phases for the web platform and both native mobile applications. The allocation reflects the complexity of parallel development and the specialized skill sets required. The total estimated cost is **Rs.35,00,000**.</p>
                <div class="card p-6">
                    <div class="chart-container">
                         <canvas id="budgetChart"></canvas>
                    </div>
                </div>
            </section>
        </main>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const links = document.querySelectorAll('.sidebar-link');
            const sections = document.querySelectorAll('.content-section');
            let planChartInstance = null;
            let budgetChartInstance = null;

            const activateSection = (hash) => {
                const targetHash = hash || '#overview';
                
                links.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === targetHash);
                });

                sections.forEach(section => {
                    section.classList.toggle('active', '#' + section.id === targetHash);
                });

                if (targetHash === '#plan' && !planChartInstance) {
                    renderPlanChart();
                }
                if (targetHash === '#budget' && !budgetChartInstance) {
                    renderBudgetChart();
                }
            };
            
            links.forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetHash = this.getAttribute('href');
                    if(window.location.hash !== targetHash) {
                        window.location.hash = targetHash;
                    }
                });
            });

            window.addEventListener('hashchange', () => activateSection(window.location.hash));
            
            function renderPlanChart() {
                const ctx = document.getElementById('planChart').getContext('2d');
                planChartInstance = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Discovery & Design', 'Backend API Dev', 'Web & Mobile Dev (Parallel)', 'Unified Testing & QA', 'Deployment'],
                        datasets: [{
                            label: 'Project Weeks',
                            data: [ [0, 4], [4, 12], [6, 18], [18, 21], [21, 22] ],
                            backgroundColor: 'rgba(14, 165, 233, 0.6)',
                            borderColor: 'rgba(14, 165, 233, 1)',
                            borderWidth: 1, barPercentage: 0.5, borderSkipped: false
                        }]
                    },
                    options: {
                        indexAxis: 'y', responsive: true, maintainAspectRatio: false,
                        scales: { x: { min: 0, max: 24, title: { display: true, text: 'Weeks' } } },
                        plugins: {
                            legend: { display: false },
                            tooltip: { callbacks: { label: c => `${c.label}: Week ${c.raw[0]} to Week ${c.raw[1]}` } }
                        }
                    }
                });
            }

            function renderBudgetChart() {
                const ctx = document.getElementById('budgetChart').getContext('2d');
                budgetChartInstance = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: ['Backend Dev', 'Mobile Dev (iOS/Android)', 'Web Dev', 'PM & Design', 'QA & Infra'],
                        datasets: [{
                            data: [30, 35, 15, 15, 5],
                             backgroundColor: ['#0284c7', '#0ea5e9', '#38bdf8', '#7dd3fc', '#bae6fd'],
                            borderColor: '#f8fafc', borderWidth: 4,
                        }]
                    },
                    options: {
                        responsive: true, maintainAspectRatio: false, cutout: '60%',
                        plugins: {
                            legend: { position: 'bottom' },
                            tooltip: { callbacks: { label: c => `${c.label}: ${c.parsed}%` } }
                        }
                    }
                });
            }
            
            activateSection(window.location.hash);
        });
    </script>
</body>
</html>
