export const SELECTION_CHANGED  = 'home/leftnav/selection-changed';
export const selectItem = (selectedItem) => {
    return {
        type: SELECTION_CHANGED,
        selectedItem
    }
};