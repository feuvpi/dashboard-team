import HomeIcon from './icons/HomeIcon.svelte';
import BillsIcon from './icons/BillsIcon.svelte';
import AnalyticsIcon from './icons/AnalyticsIcon.svelte';
import MonitoringIcon from './icons/MonitoringIcon.svelte';
import DemographicsIcon from './icons/DemographicsIcon.svelte';
import ApplicationsIcon from './icons/ApplicationsIcon.svelte';
import DocumentationIcon from './icons/DocumentationIcon.svelte';

export const data = [
	{
		title: 'ATLETAS',
		icon: HomeIcon,
		link: '/'
	},
	{
		title: 'TIMES',
		icon: BillsIcon,
		link: '/admin/bills'
	},
	{
		title: 'JOGOS',
		icon: ApplicationsIcon,
		link: '/admin/applications'
	},
	{
		title: 'CONTRATOS',
		icon: MonitoringIcon,
		link: '/admin/monitoring'
	}
];
