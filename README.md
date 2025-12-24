# Intelligent Parking Management System (IPMS)

## Project Overview
The **Intelligent Parking Management System (IPMS)** is a functional prototype developed for the **Software Configuration Management (SCM)** Mini Project assignment. 

The primary objective of this project is to demonstrate the practical application of SCM principles, including configuration identification, version control, formal change management, and configuration auditing within a structured software lifecycle.

## System Description
IPMS is a floor-based parking management tool that allocates parking slots based on vehicle types. The system is designed to distinguish requirements for:
*   **Cars:** Allocated to Floor 1 or 2.
*   **Vans:** Allocated to Floor 1.
*   **Trucks:** Restricted to the Ground Floor.

### Prototype Features:
*   **Authentication:** A dedicated login page to secure system access.
*   **Main Dashboard:** A feature-rich dashboard for vehicle selection and booking.
*   **Allocation Logic:** Scripted logic to automate parking floor recommendations.
*   **Change Control Implementation:** The system evolved from v1.0 to v1.1 through a formal Change Request (CR) process, adding fee calculation and logout functionality.

## Technical Stack & Tools
*   **Languages:** HTML5, CSS3, JavaScript (ES6)
*   **Data Store:** JSON (JavaScript Object Notation)
*   **Version Control:** Git & GitHub
*   **Development Tools:** Visual Studio Code (VS Code), GitHub Desktop

## Repository Structure
The repository is organized according to standard SCM practices to ensure high traceability:
*   ` /docs `: Contains the SCM Plan, CI Register, SRS, Change Management records, Baseline Records, and the Configuration Audit Report.
*   ` /src `: Contains all operational source code and the `parking.json` data file.
*   ` /tests `: Placeholder for verification and testing documentation.
*   ` /releases `: Contains release notes and history for versions v1.0 and v1.1.

## SCM Milestones
1.  **Baseline 1 (BL1):** Established after finalizing the SCMP and CI Register.
2.  **Release v1.0:** Initial working prototype with core allocation features.
3.  **Change Management:** Implementation of CR-01, CR-02, and CR-03 via a dedicated feature branch.
4.  **Baseline 2 (BL2):** Established after the integration of Change Requests.
5.  **Release v1.1:** Final release version including fee logic and UI enhancements.
6.  **Configuration Audit:** Completed PCA and FCA to verify project integrity.

## Installation and Execution
To view the prototype locally:
1.  **Clone the repository:**
    ```bash
    git clone https://github.com/AASTU-Ravenclaw/intelligent-parking-management-system.git
    ```
2.  **Navigate to the source folder:** Open the `/src` directory.
3.  **Run the application:** Open `index.html` in any modern web browser (Chrome, Firefox, or Edge).

---
**Department of Software Engineering**  
*Software Configuration Management Mini Project*  
**Submitted to:** Inst. Yimer Amedi  
**Date:** December 2025
