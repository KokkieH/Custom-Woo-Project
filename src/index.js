import { registerBlockType } from '@wordpress/blocks';
import {
        useBlockProps,
        InspectorControls,
} from '@wordpress/block-editor';
import {
        PanelBody, 
        TextControl,
} from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';

registerBlockType( 'kokkieh/gh-commit-block', {
    attributes: {
        commitHash: {
            type: 'string',
        },
        commitData: {
            type: 'string',
        },
    },

    edit: ( { attributes, setAttributes } ) => {
        const blockProps = useBlockProps( { className: 'blockStyles' } );
        const {
            commitHash,
            commitData,
        } = attributes;

        function onChangeTextField( newValue ) {
            setAttributes( { commitHash: newValue } );
        }

        apiFetch( { path: '/kokkieh/commit/' + commitHash } )
        .then( ( data ) => {
            console.log(data);
        } );

        controller?.abort();

        return <div { ...blockProps }>
            <InspectorControls key="setting">
                <PanelBody title="GitHub Commit Settings">
                    <div id="gh-commit-widget-controls">
                        <fieldset>
                            <legend className="blocks-base-control__label">
                                Commit Hash
                            </legend>
                            <TextControl
                                value={ commitHash }
                                onChange={ onChangeTextField }
                            />
                        </fieldset>
                    </div>
                </PanelBody>
            </InspectorControls>
            The Commit Hash is { commitHash }</div>;
    },

    save: ( { attributes } ) => {
        const blockProps = useBlockProps.save();
        const {
            commitHash,
        } = attributes;

        return <div { ...blockProps }>The Commit Hash is { commitHash }</div>;
    },
} );