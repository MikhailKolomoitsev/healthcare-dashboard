'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import styles from './CollapseMenu.module.scss';

type MenuItem = {
    label: string;
    lightIcon: string;
    darkIcon: string;
};

const menuItems: MenuItem[] = [
    { label: 'Overview', lightIcon: '/assets/icons/light/overview.svg', darkIcon: '/assets/icons/dark/overview.svg' },
    { label: 'Appointments', lightIcon: '/assets/icons/light/appointments.svg', darkIcon: '/assets/icons/dark/appointments.svg' },
    { label: 'Pathology Results', lightIcon: '/assets/icons/light/pathology-results.svg', darkIcon: '/assets/icons/dark/pathology-results.svg' },
    { label: 'Chats', lightIcon: '/assets/icons/light/chats.svg', darkIcon: '/assets/icons/dark/chats.svg' },
];

const accountItems: MenuItem[] = [
    { label: 'Settings', lightIcon: '/assets/icons/light/settings.svg', darkIcon: '/assets/icons/dark/settings.svg' },
    { label: 'Logout', lightIcon: '/assets/icons/light/logout.svg', darkIcon: '/assets/icons/dark/logout.svg' },
]

function CollapseMenu() {
    const { theme } = useTheme();

    return (
        <aside className={styles.collapseMenu}>
            <div className={styles['collapseMenu__container']}>
                <div className={styles['collapseMenu__logoWrapper']}>
                    <img
                        className={styles['collapseMenu__siteLogo']}
                        src="/assets/icons/site-logo.png"
                        alt="Site logo"
                    />
                </div>

                <ul className={styles['collapseMenu__menuList']}>
                    {menuItems.map((item) => (
                        <li key={item.label} className={styles['collapseMenu__menuItem']}>
                            <button
                                className={styles['collapseMenu__menuItem-icon']}>
                                <Image
                                    className={styles['collapseMenu__menuList']}
                                    src={theme === 'dark' ? item.darkIcon : item.lightIcon}
                                    alt={item.label}
                                    width={32}
                                    height={32}
                                />
                            </button>
                        </li>
                    ))}
                </ul>
                <ul className={styles['collapseMenu__menuList']}>
                    {accountItems.map((item) => (
                        <li key={item.label} className={styles['collapseMenu__menuItem']}>
                            <button
                                className={styles['collapseMenu__menuItem-icon']}>
                                <Image
                                    className={styles['collapseMenu__menuList']}
                                    src={theme === 'dark' ? item.darkIcon : item.lightIcon}
                                    alt={item.label}
                                    width={32}
                                    height={32}
                                />
                            </button>
                        </li>
                    ))}
                </ul>

                <Image
                    src="/assets/icons/telephone-icon.svg"
                    alt="Telephone"
                    width={32}
                    height={32}
                />
            </div>
        </aside>
    );
}

export default CollapseMenu;