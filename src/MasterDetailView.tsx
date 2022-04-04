import React,  { useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react';

import MasterDetail from "@sakit-sa/react-master-detail";
import '@sakit-sa/react-master-detail/dist/index.css';
import Select from 'react-select';
import Masters from './components/Masters';
import Detail from './components/Detail';

import { getOptions } from './utils/util';
import { OptionTypes } from './utils/types';

const MasterDetailView = inject('store')(
    observer(({ store }) => {
        const [showDetail, setShowDetail] = useState<boolean>(false);
        const [selectedId, setSelectedId] = useState<string>();
        const [selectedMasters, setSelectedMasters] = useState<Array<string>>([]);
        const options: OptionTypes[] = getOptions(store.data);
        const [selecteOption, setsSelectedOptiopn] = useState(options[0]);
        const selectedDetail = store.data.find(e => e.id === selectedId);

        useEffect(() => {
            store.init();
        }, []);
        
        useEffect(() => {
            if(selecteOption.value.toString()  === 'all') {
                setSelectedMasters(store.data);
            } else {
                setSelectedMasters(store.data.filter(e => e.publishedDate === selecteOption.value));
            }
        }, [selecteOption, store.data]);

        const handleChange = selected => {
            setsSelectedOptiopn(selected);
        }

        const onClick = (id) => {
            setSelectedId(id);
            setShowDetail(true);
        }
        return (
            <>
                {store.loading ? (
                    <h5>loading...</h5>
                ) : (
                    <div>
                        <div className='select'>
                            <Select 
                                options={options} 
                                onChange={handleChange}
                                value={selecteOption}
                            />
                        </div>
                        <div className='container'>
                            <MasterDetail
                                centerAlign={false}
                                showDetail={!!showDetail}
                                detailMinWidth="30%"
                            >
                                <div>
                                    <Masters masters={selectedMasters} handleClick={onClick}/>
                                </div>
                                <div>
                                    <Detail  selected={selectedDetail} />
                                </div>
                            </MasterDetail>
                        </div>
                    </div>
                )}
            </>
        )
    })
)
export default MasterDetailView