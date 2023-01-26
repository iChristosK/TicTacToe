import React from 'react';
import renderer from 'react-test-renderer';
import { tieString } from '../../../utils/global';
import { WinnerBox } from './winnerBox';

describe('WinnerBox', () => {
    it('should render correctly when there is a winner', () => {
        const tree = renderer.create(<WinnerBox winner="X" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render correctly when it is a tie', () => {
        const tree = renderer.create(<WinnerBox winner={tieString} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render correctly when there is no winner', () => {
        const tree = renderer.create(<WinnerBox winner={null} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
