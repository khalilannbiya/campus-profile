import { useState } from 'react';
import PrimaryButton from '../PrimaryButton';
import AgendaCard from './AgendaCard';

const GroupAgenda = () => {
    const [agendas, setAgendas] = useState([
        {
            date: { day: '05', month: 'October', year: '2024' },
            title: 'Agenda Card 1',
            description: 'aoidwaihdoiahdoiahdwaoihdaoihdiahwdiahowdih',
        },
        {
            date: { day: '06', month: 'October', year: '2024' },
            title: 'Agenda Card 2',
            description: 'Some description about the agenda item 2',
        },
        {
            date: { day: '07', month: 'October', year: '2024' },
            title: 'Agenda Card 3',
            description: 'This is the third agenda card description',
        },
    ]);

    return (
        <div className="px-4 py-10 mx-auto max-w-7xl">
            <h1 className="mb-8 text-center text-3xl font-bold">Agenda</h1>
            <div className="grid grid-cols-1 items-center justify-items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
                {agendas.map((agenda, index) => (
                    <AgendaCard
                        key={index}
                        date={agenda.date}
                        title={agenda.title}
                        description={agenda.description}
                    />
                ))}
            </div>
            <div className="flex justify-center py-10">
                <PrimaryButton>Selengkapnya</PrimaryButton>
            </div>
        </div>
    );
};

export default GroupAgenda;
