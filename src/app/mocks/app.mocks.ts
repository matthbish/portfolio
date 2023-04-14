import { Project } from "../models/app.models";

export const MOCK_PROJECT: Project = {
    name: 'Project',
    images: [
        '../../assets/project/project.png',
        '../../assets/project/project.png',
        '../../assets/project/project.png',
        '../../assets/project/project.png',
        '../../assets/project/project.png',
        '../../assets/project/project.png',
    ],
    techstack: [
        'Angular',
        'Typescript',
        'HTML',
        'CSS'
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
    + 'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
    + 'ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in '
    + 'voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, '
    + 'sunt in culpa qui officia deserunt mollit anim id est laborum.'
}