package cn.edu.jit.mapper;

import cn.edu.jit.po.RqtsSubmission;

public interface RqtsSubmissionMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table rqts_submission
     *
     * @mbggenerated
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table rqts_submission
     *
     * @mbggenerated
     */
    int insert(RqtsSubmission record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table rqts_submission
     *
     * @mbggenerated
     */
    int insertSelective(RqtsSubmission record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table rqts_submission
     *
     * @mbggenerated
     */
    RqtsSubmission selectByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table rqts_submission
     *
     * @mbggenerated
     */
    int updateByPrimaryKeySelective(RqtsSubmission record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table rqts_submission
     *
     * @mbggenerated
     */
    int updateByPrimaryKey(RqtsSubmission record);
}