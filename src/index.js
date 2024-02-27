import './scss/main.scss';
import { sidebarSwitch, toggleSidebar } from './js/sidebar';
import { swipingCards } from './js/rules';
import { carousel } from './js/carousel';
import { infoOpen } from './js/information';
import { linkScroll } from './js/linkScroll';
import { stub } from './js/stub';

linkScroll(toggleSidebar);
sidebarSwitch(toggleSidebar);
swipingCards();
carousel();
infoOpen();
stub();
