import { NextPage } from 'next';

declare module '@/app/dashboard/Summary' {

    interface Props {
        data: object;
    }

    const Summary: NextPage<Props>;

    export { Summary };
}